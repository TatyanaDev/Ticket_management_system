import { Dropdown, DropdownButton } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import cn from "classnames";
import { styleRoleDropdown } from "../../../../../utils/helpersFunction";
import ModalDeleteUser from "../../../ModalDeleteUser";
import UserModal from "../../../UserModal";
import style from "./styles.module.css";

export default function TableRow({ user }) {
  const [remove, setRemove] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <tr className={cn("align-middle", style.border, (remove || edit) && style.background)}>
      <td className='p-3'>{user.ticket_name}</td>
      <td className='p-3'>{user.last_name}</td>
      <td className='p-3'>{user.email}</td>
      <td className='text-center p-3'>
        <DropdownButton title={user.user_role[0]} className={cn(styleRoleDropdown(user.user_role[0]), style.dropdown)}>
          {user.user_role.map((role, i) => (
            <Dropdown.Item key={i}>{role}</Dropdown.Item>
          ))}
        </DropdownButton>
      </td>
      <td className='text-center p-3 text-nowrap'>
        <Icon icon='bx:bx-edit' onClick={() => setEdit(true)} className={style.edit_icon} />
        <UserModal handleClose={() => setEdit(false)} show={edit} title='Edit User' userEmail={user.email} userRole={user.user_role[0]} userFirstName={user.first_name} userLastName={user.last_name} />
      </td>
      <td>
        <Icon icon='fluent:delete-24-regular' className={style.remove_icon} onClick={() => setRemove(true)} />
        <ModalDeleteUser handleClose={() => setRemove(false)} show={remove} fullName={`${user.ticket_name} ${user.last_name}`} />
      </td>
    </tr>
  );
}

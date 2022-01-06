import { Dropdown, DropdownButton } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import cn from "classnames";
import { styleRoleDropdown } from "../../../../../utils/helpersFunction";
import style from "../../ClientAdmin/TableRow/styles.module.css";
import ModalDeleteUser from "../../../ModalDeleteUser";

export default function TableRow({ user }) {
  const [remove, setRemove] = useState(false);

  return (
    <>
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
      <td className='text-end p-3'>{user.total_ticket}</td>
      <td className='text-center p-3'>
        <Icon icon='fluent:delete-24-regular' className={style.remove_icon} onClick={() => setRemove(true)} />
        <ModalDeleteUser handleClose={() => setRemove(false)} show={remove} fullName={`${user.first_name} ${user.last_name}`} />
      </td>
    </>
  );
}

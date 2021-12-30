import { FormControl, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import style from "./styles.module.css";

export default function SearchInput({ data, setTicketsList }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = () => {
    setTicketsList(data.filter((item) => item.ticket_name.toLowerCase().includes(searchValue.trim().toLowerCase())));
  };

  return (
    <InputGroup>
      <InputGroup.Text id='basic-addon1' onClick={handleSearchInput} className={style.wrap_icon}>
        <Icon icon='fluent:search-20-filled' className={style.search_icon} />
      </InputGroup.Text>
      <FormControl onKeyDown={handleSearchInput} type='search' placeholder='Search' aria-label='Search' aria-describedby='basic-addon1' value={searchValue} onChange={({ target }) => setSearchValue(target.value)} className={style.input} />
    </InputGroup>
  );
}

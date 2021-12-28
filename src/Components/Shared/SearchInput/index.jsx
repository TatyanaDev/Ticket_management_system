import { FormControl, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useEffect, useState } from "react";
import style from "./styles.module.css";

export default function SearchInput({ data, onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!searchValue) {
      onSearch(data);
    }
  }, [searchValue, data, onSearch]);

  const handleSearchInput = () => {
    onSearch(data.filter((item) => item.name.toLowerCase().includes(searchValue.trim().toLowerCase())));
  };

  return (
    <InputGroup>
      <InputGroup.Text id='basic-addon1' onClick={handleSearchInput} className={style.wrap_icon}>
        <Icon icon='fluent:search-20-filled' className={style.search_icon} />
      </InputGroup.Text>
      <FormControl onKeyDown={handleSearchInput} type='search' placeholder='Search' aria-label='Search' aria-describedby='basic-addon1' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={style.input} />
    </InputGroup>
  );
}

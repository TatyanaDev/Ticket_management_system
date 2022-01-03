import { Button, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import style from "./styles.module.css";

export default function SearchBar({ setTicketsList, data }) {
  return (
    <Row className={style.background}>
      <Col xs='auto' className='ps-0'>
        <Link to='/ticket_list'>
          <Button variant='link' className={style.button}>
            <Icon icon='ph:caret-left-bold' className={style.icon_btn} />
            Back
          </Button>
        </Link>
      </Col>
      <Col xs={{ span: 3 }}>
        <SearchInput data={data} setTicketsList={setTicketsList} />
      </Col>
    </Row>
  );
}

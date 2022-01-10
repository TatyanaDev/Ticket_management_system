import { Button, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import style from "./styles.module.css";

export default function SearchBar({ children = null, setTicketsList, data }) {
  const navigate = useNavigate();

  return (
    <Row className={style.background}>
      <Col xs='auto' className='ps-0'>
        <Button variant='link' className={style.button} onClick={() => navigate(-1)}>
          <Icon icon='ph:caret-left-bold' className={style.icon_btn} />
          Back
        </Button>
      </Col>
      <Col xs={{ span: 3 }}>
        <SearchInput data={data} setTicketsList={setTicketsList} />
      </Col>
      {children && (
        <Col className='text-end' style={{ paddingRight: 47 }}>
          {children}
        </Col>
      )}
    </Row>
  );
}

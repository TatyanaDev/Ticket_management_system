import { Col, Image, Row } from "react-bootstrap";
import DefaultAvatar from "./DefaultAvatar";

export default function FullNameAvatar({ userName, src, styles }) {
  return (
    <Row className='p-0 m-0 d-flex flex-nowrap align-items-center'>
      {src ? (
        <Col xs='auto'>
          <Image src={src} roundedCircle className='p-0' />
        </Col>
      ) : (
        <DefaultAvatar userName={userName} styles={styles} />
      )}
      <Col xs='auto' className='ps-1 pe-0'>
        {userName}
      </Col>
    </Row>
  );
}

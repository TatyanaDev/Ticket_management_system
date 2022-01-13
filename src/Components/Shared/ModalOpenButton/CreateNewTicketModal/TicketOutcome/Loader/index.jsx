import { Row, Col, Form, Button, Container, Image } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import Dropzone from "react-dropzone";
import cn from "classnames";
import uploadIcon from "../../../../../../icons/Upload.svg";
import style from "./styles.module.css";

export default function Loader({ files, setFiles }) {
  const handleDrop = (acceptedFiles) => setFiles(acceptedFiles.map((file) => ({ fileName: file.name, fileSize: `${Math.trunc(file.size / 1000)}KB` })));
  const removeFile = ({ target }) => setFiles(files.filter((file) => file.fileName !== target.id));

  return (
    <Container className='p-0'>
      <Dropzone onDrop={handleDrop} accept='.pdf'>
        {({ getRootProps, getInputProps }) => (
          <Container {...getRootProps({ className: style.dropzone })}>
            <Form.Group>
              <Form.Control {...getInputProps()} />
              <Image src={uploadIcon} className={style.add_file} />
              <Button clickable='#dropzonePreview' className={cn(style.add_file, style.button_add_file)}>
                Add file
              </Button>
              <Form.Label className={style.label}>or drop files to upload</Form.Label>
            </Form.Group>
          </Container>
        )}
      </Dropzone>
      <Row style={{ maxWidth: 419, overflow: "hidden", margin: "0 auto" }}>
        {files.map((fileItem, i) => (
          <Col key={i} className={style.container_file}>
            <Row>
              <Col className={style.wrapper_file_name}>
                <Icon icon='ant-design:file-pdf-outlined' style={{ fontSize: 40 }} />
              </Col>
              <Col>
                <Row className={style.file_name}>
                  {fileItem.fileName}
                  <span className={style.button_remove_file} id={fileItem.fileName} onClick={removeFile}>
                    &#215;
                  </span>
                </Row>
                <Row className={style.file_size}>{fileItem.fileSize}</Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

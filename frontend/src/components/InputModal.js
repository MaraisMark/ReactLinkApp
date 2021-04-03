import React, { useState } from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import AddKeyword from "./AddKeyword";

export default function InputModal() {
  const [show, setShow] = useState(false);
  const [keywordList, setKeywordList] = useState([]);
  const [link, setLink] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Link
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Link"
            aria-label="Link"
            aria-describedby="basic-addon2"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <AddKeyword
            keywordList={keywordList}
            setKeywordList={setKeywordList}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

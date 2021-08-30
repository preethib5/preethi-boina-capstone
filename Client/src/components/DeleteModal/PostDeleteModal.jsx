import React, { Component, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

function DeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
        className="singlepage__icons far fa-trash-alt"
        onClick={handleShow}
      ></i>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to Delete the Post</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={()=>{
                props.deletePost(props.postsData.blog_id,props.postsData.id)}}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;

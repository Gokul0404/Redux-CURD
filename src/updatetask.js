import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { updateTaskList } from "../src/taskslice";  //update field 3
import { useDispatch, useSelector } from 'react-redux';



export default function MyVerticallyCenteredModal(props) {
  const { selectedTask } = useSelector((state) => state.tasks); // //read pannanum na useselecter and map

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [id, setId] = useState(0); //update panum podhu idum call panrapa state use pannanum

  const dispatch = useDispatch(); //update field 3

  const updateTask = () => {
    props.onHide();

dispatch(updateTaskList({ id, title, description })); //update field 3

  };

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description); //load agum podhey values poidanum upate formku
      setId(selectedTask.id);
    }
  }, [selectedTask]);

  return (
    <>
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Taske 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Task Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Task Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Task Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <div className="text-end"></div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => updateTask()}>updateTask</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

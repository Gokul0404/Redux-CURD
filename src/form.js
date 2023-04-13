import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "../src/taskslice";    //taskslice adding process
import { useDispatch } from 'react-redux';


export default function AddTask() {


  const  dispatch=useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addTask = (e) => {
      e.preventDefault();
      console.log(title, description);

      dispatch(addTaskToList({ title, description }));

      
      setTitle("") //click to clear the text field
      setDescription("") //click to clear the text field
    };
  

  return (
    <div>
      {/* onChange la text box value get panram athu title la store agum same for
      description */}
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
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

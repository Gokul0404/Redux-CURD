import React, { useState } from 'react'
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './updatetask';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask, removeTaskFromList } from "../src/taskslice";
export default function Tablefield() {

  const dispatch = useDispatch() //value anupanum na dispatch -1
  

   const { tasksList } = useSelector((state) => state.tasks);  //read pannanum na useselecter and map

    const updateTask = (task) => {
      //intha task update button la irunthu pass aguthu
      console.log("updateTask");
      setModalShow(true); //upadete button click agum podhu model true aaidum

      dispatch(setSelectedTask(task)); //task la iruka values setSelectedTaskku podum athu array kulla irukum tasklist
    };
    const deleteTask = (task) => {
      console.log("deleteTask");
      dispatch(removeTaskFromList(task));
    }
    
 const[modalShow, setModalShow]=useState(false)

    return (
      <>
        <section className="mt-5">
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">

              {
                tasksList && tasksList.map((task,index) => {       //task list la value irukanu check pannum apadi iruntha atha map panni edukkalam
                  return (
                    <tr key={task.id}>
                      <td>{index+1}</td>
                      <td>{ task.title}</td>
                      <td>{ task.description}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          class="btn btn-primary mx-3"
                          onClick={() => updateTask(task)} //ithulla iruka datas matum tha task la vachurukum
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => deleteTask(task)}
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
}

              
            </tbody>


          </Table>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </section>
      </>
    );
}

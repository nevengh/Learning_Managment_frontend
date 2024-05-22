import React, { useEffect } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { actGetTeachers } from "../../redux/teachersSlice";
import { useNavigate } from "react-router-dom";
import actDeleteTeacher from "../../redux/thunk/actDeleteTeacher";

const Teacher = () => {
  
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.teachers);
  console.log(records);
  useEffect(() => {
    dispatch(actGetTeachers());
    
  }, [dispatch]);

  const handleDeleteTeacher = (id) => {
    dispatch(actDeleteTeacher(id))
        .then(() => {
            // Perform any additional actions after successful deletion
            dispatch(actGetTeachers()); // Refetch the list of teachers
        })
        .catch((error) => {
            // Handle the error, e.g., display an error message
            console.error('Error deleting teacher:', error);
        });
};
 
const handleEditTeacher = (id) => {
  navigate(`/teachers/edit/${id}`);
};


  const listTeacher =

  Array.isArray(records) ? (

    records.map((record) => {

      return (

        <React.Fragment key={record.id}>

          <tr>

            <td>{record.id}</td>

            <td>{record.name}</td>

            <td>{record.email}</td>

            <td>{record.img}</td>
            <td>
              <button className="btn btn-success"onClick={() => handleEditTeacher(record.id)}  >Edite</button>
              <button className="btn btn-danger" onClick={() => handleDeleteTeacher(record.id)} >Delete</button>
            </td>

          </tr>

        </React.Fragment>

      );

    })

  ) : (

    <tr>

      <td colSpan="4">No teachers found</td>

    </tr>

  );

  const navigate = useNavigate();

  const handleAddTeacher = () => {
    navigate('/teachers/add');
  };
  return (
    <Container>
      <h1 className="mt-5 mb-5 text-center">
        Teachers <Badge>List</Badge>
      </h1>
      <div onClick={handleAddTeacher}  className="text-center mb-3">
      <button className="btn btn-primary" >Add Teacher</button>
      </div>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Email</th>
            <th>img</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{listTeacher}</tbody>
      </Table>
    </Container>
  );
};

export default Teacher;

import React from "react";
import "./Student.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Student = ({ student, setStudents }) => {
  const { id, name, age, class_name, subject } = student;

  const navigate = useNavigate();

  //deleting Student

  //   const deleteStudent = async () => {
  //     await axios.delete(`http://localhost:3000/students/${id}`);
  //   };

  //   const handelDelete = () => {
  //     deleteStudent();
  //   };

  // Delete Handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this developer?")) {
      try {
        await axios.delete(`http://localhost:3000/students/${id}`);
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id)
        );
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{class_name}</td>
      <td>{subject}</td>
      <td>
        <Link to={`/edit/${id}`}>
          <button className="upBtn">Update</button>
        </Link>
      </td>
      <td>
        <button className="delBtn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Student;

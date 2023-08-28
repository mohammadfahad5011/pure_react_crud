import React, { useEffect, useState } from "react";
import "./StudentList.css";
import axios from "axios";
import Loading from "../Loading/Loading";
import Student from "../Student/Student";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  //data fetching function...

  const dataFetching = async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      const data = res.data;
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  // data fetching ...

  useEffect(() => {
    dataFetching();
    setLoading(false);
  }, []);

  return (
    <>
      <Title>Student List</Title>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
              {students.map((student) => (
                <Student
                  key={student.id}
                  student={student}
                  setStudents={setStudents}
                />
              ))}
            </tbody>
            <Link to="/create">
              <button className="addBtn">Add Student</button>
            </Link>
          </table>
        </>
      )}
    </>
  );
};

export default StudentList;

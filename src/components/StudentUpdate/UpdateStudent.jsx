import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Title from "../Title/Title";

const UpdateStudent = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    class_name: "",
    subject: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  //update student Id

  let upadteId = params.id;

  // Input handler
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // geting Updated  student data
  const getingSingleStudentData = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/students/${upadteId}`);

      let singleStudentData = res.data;
      setInput(singleStudentData);
      console.log(singleStudentData);
    } catch (error) {
      console.log(error);
    }
  };

  //update student info

  const updateUserInfo = async () => {
    try {
      await axios.put(`http://localhost:3000/students/${upadteId}`, input);
    } catch (error) {
      console.log(error);
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo();
    navigate("/");
  };

  //
  useEffect(() => {
    getingSingleStudentData();
  }, []);

  return (
    <>
      <Title>Update Student Info</Title>
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            value={input.name}
            onChange={handleInput}
            name="name"
          />
        </div>
        <div className="input_box">
          <label htmlFor="age">Age</label> <br />
          <input
            type="text"
            id="age"
            value={input.age}
            onChange={handleInput}
            name="age"
          />
        </div>
        <div className="input_box">
          <label htmlFor="class_name">Class Name</label> <br />
          <input
            type="text"
            id="class_name"
            value={input.class_name}
            onChange={handleInput}
            name="class_name"
          />
        </div>
        <div className="input_box">
          <label htmlFor="subject">Subject</label> <br />
          <input
            type="text"
            id="subject"
            value={input.subject}
            onChange={handleInput}
            name="subject"
          />
        </div>
        <button type="submit" className="addBtn">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateStudent;

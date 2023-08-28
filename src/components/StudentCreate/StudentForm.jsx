import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./StudentFrom.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    class_name: "",
    subject: "",
  });

  const navigate = useNavigate();

  // Input handler
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Creating student
  const createStudent = async () => {
    try {
      await axios.post("http://localhost:3000/students", input);
    } catch (error) {
      console.log(error);
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent();
    navigate("/");
  };

  return (
    <>
      <Title>Add New Student Info</Title>
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
          ADD
        </button>
      </form>
    </>
  );
};

export default StudentForm;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import StudentForm from "./components/StudentCreate/StudentForm";
import UpdateStudent from "./components/StudentUpdate/UpdateStudent";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/create" element={<StudentForm />} />
        <Route path="/edit/:id" element={<UpdateStudent />} />
      </Routes>
    </div>
  );
}

export default App;

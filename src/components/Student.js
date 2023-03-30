import React, { useContext } from "react";
import Navbar from "./Navbar";
import { PersonAllContext } from "./PersonContext";
function Student() {
  const { personList } = useContext(PersonAllContext);
  const studentAllList = personList
    .filter((person) => person.profession === "student")
    .map((student) => (
      <li>
        {student.firstName} {student.lastName} <br /> Profession:
        {student.profession} <br /> E-mail: {student.email}
        <hr />
      </li>
    ));
  return (
    <div>
      <Navbar />

      <ol>{studentAllList}</ol>
    </div>
  );
}

export default Student;

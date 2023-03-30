import React, { useContext } from 'react'
import Navbar from './Navbar'
import { PersonAllContext } from './PersonContext'
function Teacher() {

  const {personList}=useContext(PersonAllContext)
  const TeacherAllList=personList.filter((person) => person.profession==="teacher")
  .map((teacher)=> <li>
      {teacher.firstName} {teacher.lastName} <br /> Profession:
      {teacher.profession} <br /> E-mail: {teacher.email}
      <hr />

  </li> )

  return (
    <div>

      <Navbar />
     <ol>
     {TeacherAllList}
     </ol>
    
      </div>
  )
}

export default Teacher
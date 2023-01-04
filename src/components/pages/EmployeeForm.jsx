import React, { useState } from "react";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");


const options = [
  {label:"Female", value:"apple"},
  {label:"Male", value:"male"},
  {label:"Other", value:"other",}
];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      gender,
      birthDate,
    


    };
    const response = await fetch("/api/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    const newEmployee = await response.json();
    console.log(newEmployee);
  };
  return (
    <form className ="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="firstName">
      <label className="form_label" for="firstName">First Name</label>
        <input className="form_input" onChange={(event) => setFirstName(event.target.value)} 
        value={firstName} />
        </div>
        <div className="lastName">
        <label className="form-label" for="firstName">Last Name</label>
        <input className="form_input" onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        </div>
        <div className="gender">
        <label className="form-label" for="gender">Gender</label>
        <input className="form_input" onChange={(event) => setGender(event.target.value)}
          value={gender}
        />
      </div>
       <div className="birthDate">
       <label className="form-label" for="birthDate">Birth Date:</label>
        <input className="form_input" type="birthDate" id="birthDate" onChange={(event) => setBirthDate(event.target.value)}
         value={birthDate}
        />
      </div>
      <div className="email">
        <label className="form-label" for="email">Email</label>
        <input className="form_input" onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div class="submit">
      <button type="submit"> Add New Employee</button>
      </div>
      </div>
    </form>
  );
};
export default EmployeeForm;

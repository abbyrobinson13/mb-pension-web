import React, { useState } from "react";

const EmployeeAddOn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [employmentDate,setEmploymentDate,] = useState("");
  const [dependents, setDependents] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      gender,
      birthDate,
      department,
      position,
      employmentDate,
      dependents,
      email,
      mobile,
      street,
      postalCode,
      city,
      province,


    };
    const response = await fetch("/api/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    const newEmployee = await response.json();
    console.log(employee);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        first Name:
        <input onChange={(event) => setFirstName(event.target.value)} value={firstName} />
      </label>
      <label>
      Last Name:
        <input
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
      </label>
      <label>
      Gender:
        <input
          onChange={(event) => setGender(event.target.value)}
          value={gender}
        />
      </label>
      <label>
      Birth Date:
        <input
          onChange={(event) => setBirthDate(event.target.value)}
          value={birthDate}
        />
      </label>
      <label>
      Department:
        <input
          onChange={(event) => setDepartment(event.target.value)}
          value={department}
        />
      </label>
      <label>
      Position:
        <input
          onChange={(event) => setPosition(event.target.value)}
          value={position}
        />
      </label>
      <label>
      Employment Date:
        <input
          onChange={(event) => setEmploymentDate(event.target.value)}
          value={employmentDate}
        />
      </label>
      <label>
      Dependents:
        <input
          onChange={(event) => setDependents(event.target.value)}
          value={dependents}
        />
      </label>
      <label>
      Email:
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </label>
      <label>
      Mobile:
        <input
          onChange={(event) => setMobile(event.target.value)}
          value={mobile}
        />
      </label>
      <label>
      Street:
        <input
          onChange={(event) => setStreet(event.target.value)}
          value={street}
        />
      </label>
      <label>
      Postal Code:
        <input
          onChange={(event) => setPostalCode(event.target.value)}
          value={postalCode}
        />
      </label>
      <label>
      City:
        <input
          onChange={(event) => setCity(event.target.value)}
          value={city}
        />
      </label>
      <label>
      Province:
        <input
          onChange={(event) => setProvince(event.target.value)}
          value={province}
        />
      </label>
      <button type="submit">Add New Employee</button>
    </form>
  );
};

export default EmployeeAddOn;

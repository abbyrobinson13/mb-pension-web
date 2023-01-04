import React from 'react';
import { useState } from 'react';
function Employees() {
  const [file, setFile] = useState();
  const [status, setStatus] = useState();
  const handleSubmit = async () => {
    const data = new FormData();
    console.log(file);
    data.append('file', file, file.name);
    data.append('fileName', file.name);

    const response = await fetch('/api/csv/add', {
      method: 'POST',
      body: data
    });

    const answer = await response.json();
    if (response.ok) {
      console.log('ok');
      setStatus('success');
    } else {
      console.log('not ok', answer);
      setStatus(answer.writeErrors[0].errmsg);
    }
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <input
        id="upload"
        type="button"
        value="Upload to Database"
        onClick={handleSubmit}
      />
      {status}
    </div>
  );
}

export default Employees;

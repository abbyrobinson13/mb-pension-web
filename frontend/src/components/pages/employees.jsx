import React from 'react';
import { useState } from 'react';
import { LayoutCompanyNavBar } from '../CompanyNavBar';

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
    <LayoutCompanyNavBar>
      <div>
        <div >
          <h3 id="h3-upload-csv"> Please use this page to add your employee information.</h3>
          <h5 id="h5-upload-csv"> Once CSV file is selected, click "Upload" to proceed</h5>
        </div>

        <div>
          <input
            className="upload"
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />

          <input
            className="upload"
            type="button"
            value="Upload to database "
            onClick={handleSubmit}
          />

          <p className="uploadStatus">{status}</p>
        </div>
      </div>
    </LayoutCompanyNavBar>
  );
}

export default Employees;

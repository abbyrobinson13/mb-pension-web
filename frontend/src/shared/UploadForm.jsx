import React, { useState } from 'react';
import { storage } from '../firebase-config.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { LayoutCompanyNavBar } from '../components/CompanyNavBar.jsx';
import { ExternalDropZone, Upload } from '@progress/kendo-react-upload';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const uploadRef = React.createRef();

function UploadForm() {
  // State to store uploaded file
  const [file, setFile] = useState(''); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleClear = () => {
    setFile('');
    setPercent(0);
  };
  const handleUpload = () => {
    if (!file) {
      alert('Please upload a document first!');
    }
    const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        console.log('setting percent to:', percent);

        if (isNaN(percent)) {
          setPercent(100);
        } else {
          setPercent(percent);
        }
    
      },
      (err) => console.log('upload task error', err),
      () => {
        // download url
        console.log('calling getDownloadURL()');
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log('get download URL got:', url);
          })
          .catch((err) => {
            console.log('get download URL got an error!', err);
          });
      }
    );
  };
  return (
    <LayoutCompanyNavBar>
      <Grid className="">
        <form className="form-logins" noValidate onSubmit={handleUpload}>
          <div>
            <ExternalDropZone uploadRef={uploadRef} />
            <div
              style={{
                height: '50px'
              }}
            />
            <Upload
              ref={uploadRef}
              batch={false}
              multiple={true}
              defaultFiles={[]}
              withCredentials={false}
              onAdd={handleChange}
              saveUrl={
                'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
              }
              removeUrl={
                'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
              }
            />
            {/* <input type="file" onChange={handleChange} accept="/files/*" /> */}
            {/* <button onClick={handleUpload}>Upload to Firebase</button> */}
            <Button
              type="clear"
              variant="contained"
              style={{ backgroundColor: '#E1705D', marginRight: '20px' }}
              onClick={handleClear}
            >
              CLEAR{' '}
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: '#E1705D' }}
              onClick={handleUpload}
            >
              Upload Files to Database{' '}
            </Button>
            <p>{percent}% done</p>
          </div>
        </form>
      </Grid>
    </LayoutCompanyNavBar>
  );
}
export default UploadForm;

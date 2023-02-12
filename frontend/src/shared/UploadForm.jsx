import { useState } from 'react';
import { storage } from '../firebase-config.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function UploadForm() {
  // State to store uploaded file
  const [file, setFile] = useState(''); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
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
        setPercent(percent);
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
    <div>
      <input type="file" onChange={handleChange} accept="/files/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done"</p>
    </div>
  );
}
export default UploadForm;

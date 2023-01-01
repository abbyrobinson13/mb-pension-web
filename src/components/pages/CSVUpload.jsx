import react from "react";


function UploadForm() {
    const [file, setFile] = useState(null);

    const handleChange = event => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        axios.post(/api/upload, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(response => {
              console.log(response.data);
            }).catch(error => {
              console.error(error);
            });
          };
        
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="file">Choose a CSV file:</label>
              <input type="file" id="file" onChange={handleChange} />
              <button type="submit">Upload</button>
            </form>
          );
        }
        
        export default UploadForm;
        
        
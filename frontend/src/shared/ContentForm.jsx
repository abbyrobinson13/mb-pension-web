import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SelectMultiple from '../components/common/SelectMultiple.jsx';

function ContentForm({ handleSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState('');
  const [img, setImg] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  function handleClick() {
    console.log(category);
    console.log(title);
    console.log(description);
    console.log(tags);
    console.log(url);
    console.log(img);
  }

  const updateTags = (symptoms) => {
    setTags(symptoms);
  };

  return (
    <div>
      <form
        className="form"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          left: 400,
          width: 700
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const contentValues = {
            category,
            title,
            description,
            tags,
            url,
            img
          };
          console.log(contentValues);
          handleSubmit(contentValues);
        }}
      >
        <div>
          <label>Content title</label>
          <input
            type="Content Title"
            className="form-control mt-1"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            placeholder="Please enter a title..."
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="Content Description"
            className="form-control mt-1"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            placeholder="Enter content description ..."
          />
        </div>
        <div>
          <label>Link/URL</label>
          <input
            type="URL/ Link"
            className="form-control mt-1"
            onChange={(event) => setUrl(event.target.value)}
            value={url}
            placeholder="Upload link to content ..."
          />
        </div>
        <div>
          <label>Upload image</label>
          <input
            type="file"
            label="Image"
            name="img"
            className="form-control mt-1"
            id="file-upload"
            accept=".jpeg, .png, .jpg"
            onChange={(event) => setImg(event.target.value)}
            value={img}
            placeholder="Upload link to content ..."
          />
        </div>

        <label> Select Content Category</label>

        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={category}
            label="Category *"
            onChange={handleChange}
          >
            <MenuItem value={'Self-help'}>Self-help</MenuItem>
            <MenuItem value={'Services'}>Services</MenuItem>
            <MenuItem value={'Providers'}>Provider</MenuItem>
            <MenuItem value={'Packages'}>Packages</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <SelectMultiple tags={tags} updateTags={updateTags} />
        <button style={{ margin: 40 }} type="submit">
          Submit Content
        </button>
      </form>
    </div>
  );
}

export default ContentForm;

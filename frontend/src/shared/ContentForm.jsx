import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Select from 'react-select';
import SelectMultiple from '../components/common/SelectMultiple.jsx';
import { Button } from '@mui/material';

function ContentForm({ handleSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState('');
  const [img, setImg] = useState('');
  const [provider, setProvider] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');
  const categoryOptions = [
    { value: 'SelfHelp', label: 'SelfHelp' },
    { value: 'Services', label: 'Services' },
    { value: 'Packages', label: 'Packages' },
    { value: 'Practitioners', label: 'Practitioners' }
  ];

  const handleCategoryChange = (category) => {
    setCategory(category.value);
    console.log(category.value);
  };

  const handleProviderChange = (provider) => {
    setProvider(provider.value);
    console.log(provider.value);
  };

  const providers = {
    Practitioners: [
      {
        value: 'Acupuncture',
        label: 'Acupuncture'
      },
      { value: 'Audiology', label: 'Audiology' },
      { value: 'Chiropractor', label: 'Chiropractor' },
      { value: 'Dietician', label: 'Dietician' },
      { value: 'Message Therapy', label: 'Message Therapy' },
      { value: 'Occupational Therapy', label: 'Occupational Therapy' },
      { value: 'Osteopathy', label: 'Osteopathy' },
      { value: 'Speech Therapy', label: 'Speech Therapy' },
      { value: 'Naturopathy', label: 'Naturopathy' },
      { value: 'Physiotherapy', label: 'Physiotherapy' },
      { value: 'Psychologist', label: 'Psychologist' },
      { value: 'Podiatrist', label: 'Podiatrist' }
    ],
    SelfHelp: [{ value: 'N/A', label: 'N/A' }],
    Packages: [{ value: 'N/A', label: 'N/A' }],
    Services: [{ value: 'N/A', label: 'N/A' }]
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setImg(base64);
  };

  function handleClick() {
    console.log(category);
    console.log(title);
    console.log(description);
    console.log(tags);
    console.log(url);
    console.log(img);
  }

  function handleCascadingDropdown(e) {
    setSelectedCategory(e.target.value);
    console.log(selectedCategory);
  }

  const updateTags = (symptoms) => {
    setTags(symptoms);
  };

  return (
    <div>
      <h1>Add Content to Mobile App</h1>
      <form
        className="form"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          left: 550,
          width: 700,
          marginBottom: 100
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const contentValues = {
            category,
            title,
            description,
            tags,
            url,
            img,
            provider
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
            onChange={handleFileUpload}
            placeholder="Upload link to content ..."
          />
        </div>

        <div>
          <div style={{ width: 600, marginBottom: 20, margin: 20 }}>
            <b>Please select a category: </b>
            <Select
              options={categoryOptions}
              onChange={handleCategoryChange}
              value={category.value}
            />
          </div>
          {category && (
            <div style={{ width: 600, marginBottom: 20, margin: 20 }}>
              <b>What type of provider?</b>
              <Select
                options={providers[category]}
                onChange={handleProviderChange}
              />
            </div>
          )}
        </div>

        <SelectMultiple tags={tags} updateTags={updateTags} />
        <Button
          variant="contained"
          style={{
            display: 'flex',
            margin: 20,
            width: 350,
            backgroundColor: '#0F1A4D',
            textEmphasisColor: '#FAF5F3'
          }}
          type="submit"
        >
          Submit Content
        </Button>
      </form>
    </div>
  );
}

export default ContentForm;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

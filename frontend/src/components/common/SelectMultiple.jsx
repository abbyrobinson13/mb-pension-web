import * as React from 'react';
import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { flexbox } from '@mui/system';
import { useEffect } from 'react';

const root = {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid grey',
  minHeight: 500,
  maxHeight: 500,
  fontSize: 18,
  '& :hover': {
    color: 'grey'
  },
  '& li': {
    //list item specific styling
    borderRadius: 4
  }
};

export default function SelectMultiple({ selectedTitles, updateTags }) {
  const [tags, setTags] = useState([]);

  const handleChange = (_, values) => {
    const tags = values.map((value) => value.title);
    setTags(tags);
    console.log(tags);
  };

  useEffect(() => {
    updateTags(tags);
  }, [tags, updateTags]);

  return (
    <div>
      <label>Risk Factors</label>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="multiple-limit-tags"
          options={symptoms}
          ListboxProps={{ sx: root }}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} placeholder="Please select symptoms" />
          )}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

const symptoms = [
  { title: 'Anxiety' },
  { title: 'Addictions' },
  { title: 'Insomnia' },
  { title: 'Depression' },
  { title: 'ADHD' },
  { title: 'Eating Disorders ' },
  { title: 'Trauma' },
  { title: 'Emotional Regulation Problems' },
  { title: 'Physical illness/chronic pain' },
  { title: 'Parenting challenges' },
  { title: 'Relationships' },
  { title: 'Work stress' },
  { title: 'Burnout' },
  { title: 'Systemic discrimination' },
  { title: 'Gastrointestinal/gut issues' },
  { title: 'Fertility/pregnancy/birth' },
  { title: 'A traumatic experience' },
  { title: 'Weight/body image concerns' },
  { title: 'Attention/focus' },
  { title: 'Perimenopause/menopause' },
  { title: 'Grief/loss' },
  { title: 'Sexual Health' },
  { title: 'Overwhelm' }
];

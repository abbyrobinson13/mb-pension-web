import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentForm from '../shared/ContentForm.jsx';

function AddContent({}) {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (content) => {
    alert('Form submitted');
    setConfirmSubmit(true);
    navigate('/');

    const response = await fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
    const newContent = await response.json();
    console.log(newContent);
  };
  return (
    <div>
      <ContentForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddContent;

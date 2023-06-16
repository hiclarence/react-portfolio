import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleBlur = (fieldName) => {
    if (!getFieldValue(fieldName)) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'This field is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    }
  };

  const getFieldValue = (fieldName) => {
    switch (fieldName) {
      case 'name':
        return name.trim();
      case 'email':
        return email.trim();
      case 'message':
        return message.trim();
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="contactMe">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              onBlur={() => handleBlur('name')}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Message:</label>
            <input
              value={message}
              onChange={handleMessageChange}
              onBlur={() => handleBlur('message')}
            ></input>
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Form;


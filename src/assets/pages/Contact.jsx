import React, { useState } from 'react';

function Contact() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (formData.name.trim() === "") {
      newError.name = "Please enter your name";
    }
    if (formData.mobile.trim().length !== 10) {
      newError.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (formData.email.trim() === "") {
      newError.email = "Please enter your email";
    }
    if (formData.comment.trim().length < 10) {
      newError.comment = "Comment must be at least 10 characters long";
    }
    setErrors(newError);
  };

  return (
    <>
      <div className='flex justify-center items-center bg-lime-100 h-screen w-full '>

        
        
        <div className='flex justify-center items-center bg-teal-400 p-8 rounded-lg shadow-lg  h-130 md:h-140 w-98'>

       
          <form className='flex flex-col w-80' onSubmit={handleSubmit}>

<h1 className='text-4xl font-bold'>Contact</h1>
<br />
            <input
              className='text-black h-10   rounded bg-white w-full'
              placeholder='Enter Name'
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.name}</p>
            <br /><br />

            <input
              className='text-black h-10 rounded bg-white w-full'
              placeholder='Enter Mobile No'
              type="text"
              name='mobile'
              value={formData.mobile}
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.mobile}</p>
            <br />
<br />
            <input
              className='text-black h-10 rounded bg-white w-full'
              placeholder='Enter Email'
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.email}</p>
            <br />
<br />
            <textarea
              className="w-full p-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              rows="4"
              placeholder="Write your comment here..."
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
            <p className='text-red-500'>{errors.comment}</p>
            <br />

            <button className='bg-red-300 rounded w-full h-10 mt-4'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

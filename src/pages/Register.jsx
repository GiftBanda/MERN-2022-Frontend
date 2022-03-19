
import {React, useState, useEffect} from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formData;

    //store values from the input fields
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))   
    }

    //Do something with form submission
    const onSubmit = (e) => {
        e.preventDefault()

    }

  return (
      <>
    <section className='heading'>
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create account</p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input 
            type='text' 
            className='form-control' 
            placeholder='Enter your name' 
            id='name' 
            name='name'
            value={name}
            onChange={handleChange} />
            </div> 

            <div className='form-group'>
            <input 
            type='email' 
            className='form-control' 
            placeholder='Enter your email' 
            id='email' 
            name='email'
            value={email}
            onChange={handleChange} />
            </div> 

            <div className='form-group'>
            <input 
            type='password' 
            className='form-control' 
            placeholder='Enter your password' 
            id='password' 
            name='password'
            value={password}
            onChange={handleChange} />
            </div> 

            <div className='form-group'>
            <input 
            type='password' 
            className='form-control' 
            placeholder='Confirm password' 
            id='password2' 
            name='password2'
            value={password2}
            onChange={handleChange} />
            </div> 

            <div className='form-group'>
            <button className='btn btn-block' type='submit'>Register</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Register
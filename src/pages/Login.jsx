import { React, useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData;


    //store values from the input fields
    const handleChange = (e) => {
      const {name, value} = e.target

      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      })
      )
    }

    //Do something with form submission
    const onSubmit = (e) => {
      e.preventDefault()

      console.log(formData)
  
    }
  return (
  <>
    <section className='heading'>
    <h1>
        <FaSignInAlt /> Login
    </h1>
    <p>Start setting goals</p>
    </section>

    <section className='form'>
    <form onSubmit={onSubmit}>

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
          <button className='btn btn-block' type='submit'>Login</button>
        </div>
        
    </form>
    </section>
  </>
  )
}

export default Login
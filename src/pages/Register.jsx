
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

  return (
      <>
    <section className='haeding'>
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create account</p>
    </section>

    <section className='form'>
        <form>
            <div className='form-group'>
            <input type='text' className='form-control' id='name' />
            </div> 
        </form>
    </section>
    </>
  )
}

export default Register
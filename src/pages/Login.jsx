import { React, useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import { login, reset} from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

  useEffect(() => {
    if(isError) {
        toast.error(message);
    }

    if(isSuccess || user) {
        toast.success(message);
        navigate('/');
    }

    dispatch(reset());

  }, [user, isError, isSuccess, message, navigate, dispatch])

  //destructure the form data
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

      const userData = {
        email,
        password
      }

      dispatch(login(userData))

      console.log(formData)
  
    }
  
  if(isLoading) {
    return <Spinner />
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
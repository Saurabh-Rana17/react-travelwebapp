import React from 'react';
import '../../App.css';
import './SignUp.css'

export default function SignUp() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/signup.avif' alt='uttarakhad image'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
            <label>Email</label> <br></br>
            <input type='text' placeholder='johndoe@gmail.com'></input>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input>
            <button type='submit' className='btn-sign'>Sign Up</button>
          </form>

          <div>
            <p className='have-account'>Have an account? <span>Log In here </span></p>
          </div>
        </div>

      </div>
    </div>
  );
}
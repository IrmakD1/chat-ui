import React from "react";
import { Button } from '../../atoms'
import { Input } from '../../atoms/form'
import "./styles.css";

const LoginForm = ({ title, handleSubmit, handleChange, username, password }) => {

  return (
    <div className="login-form">
      <div className="heading-container">
        <h1>{title}</h1>
      </div>
      <form className="form-fields" onSubmit={handleSubmit}>
        <Input 
          text="Username" 
          type='text' 
          value={username} 
          id={'username'}
          handleChange={handleChange}
        />
        <Input 
          text="Password" 
          type='password' 
          value={password} 
          id={'password'}
          handleChange={handleChange}
        />
        <div className='button-container'>
          <Button type="submit" text='Login' styling='submit-button'/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

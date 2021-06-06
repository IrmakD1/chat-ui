import React from "react";
import { Button } from '../../atoms'
import { Input } from '../../atoms/form'
import "./styles.css";

const LoginForm = ({ title }) => {
  return (
    <div className="login-form">
      <div className="heading-container">
        <h1>{title}</h1>
      </div>
      <form className="form-fields">
        <Input text="Username" type='text'/>
        <Input text="Password" type='password'/>
        <div className='button-container'>
          <Button type="submit" text='Login' styling='submit-button'/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

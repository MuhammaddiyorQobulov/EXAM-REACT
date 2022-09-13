import React from 'react'
import { Link } from 'react-router-dom'
import cls from './register.module.scss'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div className={cls.register}>
      <span className={cls.back}>
        <Link to="/">
          <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </Link>
      </span>
      <h1>Register</h1>
      <form action="" className={cls.form}>
        <div className={cls.inputs}>
          <div className={cls.input}>
            <label htmlFor="firstname">
              <h4>First Name</h4>
            </label>
            <input
              type="text"
              id="passsword"
              name="firstname"
              placeholder="enter your firstname"
            />
          </div>
          <div className={cls.input}>
            <label htmlFor="lastname">
              <h4>Last Name</h4>
            </label>
            <input
              type="text"
              id="passsword"
              name="lastname"
              placeholder="enter your lastname"
            />
          </div>
          <div className={cls.input}>
            <label htmlFor="email">
              <h4>Email</h4>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="enter your email"
            />
          </div>
          <div className={cls.input}>
            <label htmlFor="password">
              <h4>Password</h4>
            </label>
            <input
              type="text"
              id="passsword"
              name="password"
              placeholder="enter your password"
            />
          </div>
        </div>
        <button className={cls['submit-btn']}>
          <h4>Register</h4>
        </button>
      </form>

      <h4>
        Don't have an account?
        <Link to="/login">Login</Link>
      </h4>
    </div>
  )
}

export default Register

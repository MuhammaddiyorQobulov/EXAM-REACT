import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from './login.module.scss'
// import {} from 'yup'
import { schema } from '../../services/validation'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const [state, setState] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  })

  const onChange = async (e: any) => {
    await setState({ ...state, [e.current?.name]: e.current?.value })

    schema
      .validate({
        email: state.email,
        password: state.password,
      })
      .then(() => {
        console.log('SUCCESS')
        setState({
          ...state,
          [e.current?.name]: e.current?.value,
          errors: { email: '', password: '' },
        })
      })
      .catch((error: any) => {
        setState({
          ...state,
          errors: { ...state.errors, [e.current?.name]: error.message },
        })
      })
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log('submitted', state)
    setState({ email: '', password: '', errors: { email: '', password: '' } })
  }

  return (
    <div className={cls.login}>
      <span className={cls.back}>
        <Link to="/">
          <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </Link>
      </span>

      <h1>Login</h1>
      <form action="" className={cls.form} onSubmit={onSubmit}>
        <div className={cls.input}>
          <label htmlFor="email">
            <h4>Email</h4>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter your email"
            ref={emailRef}
            onChange={() => onChange(emailRef)}
            defaultValue={state.email}
          />
          {/* {state.errors.email.trim() !== '' &&
           } */}
          <p>{state.errors.email}</p>
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
            ref={passwordRef}
            defaultValue={state.password}
            onChange={() => onChange(passwordRef)}
          />
          {/* {state.errors.password.trim() !== '' && (
              )} */}
          <p>{state.errors.password}</p>
        </div>
        <button className={cls['submit-btn']}>
          <h4>Login</h4>
        </button>
      </form>

      <h4>
        Don't have an account?
        <Link to="/register">Register</Link>
      </h4>
    </div>
  )
}

export default Login

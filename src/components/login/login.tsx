import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from './login.module.scss'
// import {} from 'yup'
import { schema } from '../../services/validation'

interface LoginProps {
  userData: (data: { email: string; password: string }) => void
}

const Login: React.FC<LoginProps> = ({ userData }) => {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const [state, setState] = useState({
    email: '',
    password: '',
    errors: { email: '', password: '' },
  })

  const onChange = (e: any) => {
    setState({ ...state, [e.current?.name]: e.current?.value })

    try {
      schema.validate({
        email: state.email,
        password: state.password,
      })
      console.log('wklegnoweng')
    } catch (err:any) {
      console.log(JSON.parse(JSON.stringify(err)))
      setState({
        ...state,
        errors: { ...state.errors, [err.path]: err.message },
      })
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (state.errors.email === '' && state.errors.password === '') {
      setState({ email: '', password: '', errors: { email: '', password: '' } })
      userData({ email: state.email, password: state.password })
    }
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
            required
          />
          {state.errors.email !== '' && <p>{state.errors.email}</p>}
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
            required
          />
          {state.errors.password !== '' && <p>{state.errors.password}</p>}
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

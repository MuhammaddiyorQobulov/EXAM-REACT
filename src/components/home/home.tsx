import React from 'react'
import { Link } from 'react-router-dom'
import cls from './home.module.scss'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <div className={cls.home}>
    <div>
      <h1>Hello There!</h1>
      <h5>Welcome To React User App</h5>
    </div>
    <div className={cls['home--btns']}>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  </div>
)

export default Home

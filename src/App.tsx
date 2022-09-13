import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import cls from './app.module.scss'
import Register from './components/register/register'
import Login from './components/login/login'
import Home from './components/home/home'
import UserInfos from './components/user-infos/user-infos'

function App() {
  const [state, setState] = useState({
    user: {},
  })

  const userData = (data: { password: string; email: string }) => {
    setState({ ...state, user: data })
  }

  setTimeout(() => {
    console.log(state)
  }, 100)

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <Switch>
          <Route
            exact
            path="/"
            component={(props: any) => <Home {...props} />}
          />
          <Route
            exact
            path="/login"
            component={(props: any) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            component={(props: any) => <Register {...props} />}
          />
          <Route
            exact
            path="/user-infos"
            component={(props: any) => <UserInfos {...props} />}
          />
        </Switch>
      </div>
    </div>
  )
}

export default App

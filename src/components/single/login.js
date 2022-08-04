import { useEffect, useState } from "react"
import LoginPage from './login_page'
import UserPage from './user_page'
const Login = (props) => {

  const [isLogin, setLogin] = useState(false)


  useEffect(() => {
    const x = localStorage.getItem("user_data");
    if (x != null) {
      setLogin(true)
    }
  });

  const changeStatus = () => {
    setLogin(!isLogin)
  }

  const changeState = () => {
    props.changeStateLogin()
    props.changeMenu(1)
  }

  return (
    (isLogin) ? <UserPage changeStatus={changeStatus}></UserPage> : <LoginPage changeStatus={changeStatus} changeState={changeState}></LoginPage>
  )
}

export default Login;
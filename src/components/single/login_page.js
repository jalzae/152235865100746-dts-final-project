import { useState } from "react"
import axios from '../../plugins/axios/axios'
import sweetalert from 'sweetalert'
import { useDispatch } from "react-redux";
import { changeUser } from '../../store/user'

const LoginPage = (props) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const Login = async (e) => {
    e.preventDefault()
    let response = await axios.post('/home/login', { username: username, password: password }, {});
    if (response.status) {
      sweetalert("Sukses Login")
      localStorage.setItem("user_data", JSON.stringify(response.data.data))
      dispatch(changeUser(response.data.data))
      props.changeStatus()
    } else {
      sweetalert("Gagal Login")
    }
  }
  return (
    <div className="login-section">
      <div class="container">
        <div class="center">

          <div class="col-lg-6 col-md-12 col-sm-12 w-full-md card card-body form-login">
            <i onClick={() => props.changeState()} className="pointer zmdi zmdi-close"></i>
            <form method="post" onSubmit={(e) => Login(e)}>
              <h4 class="mtext-105 cl2 txt-center p-b-30">
                Sign In To Continue
              </h4>

              <div class=" m-b-20 how-pos4-parent">
                <input class="form-control stext-111 cl2 plh3 rounded-3" onChange={e => setUsername(e.target.value)} type="text" name="email" placeholder="Your Email Address" />
              </div>

              <div class=" m-b-20 how-pos4-parent">
                <input class="form-control stext-111 cl2 plh3 rounded-3" onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Your Password" />
              </div>

              <button class="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                Submit
              </button>

              <button class="flex-c-m stext-101 mt-2  cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                Login With  Google (<i className="zmdi zmdi-google"></i>)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>)
}
export default LoginPage
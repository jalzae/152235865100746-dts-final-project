import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const UserPage = (props) => {
  let navigate = useNavigate()

  const logout = async () => {
    localStorage.clear();
    navigate("/", { replace: true })
  }

  const username = useSelector((state) => state.userRTK.user.username);

  return (<div class="container">
    <div class="flex-w flex-tr">
      <div class="col-lg-4 col-md-12 col-sm-12 w-full-md  form-login card card-body">
        <i onClick={() => props.changeState()} className="pointer zmdi zmdi-close"></i>
        <form>
          <h4 class="mtext-105 cl2 txt-center p-b-30">
            User Profile
          </h4>

          <div class=" m-b-20 how-pos4-parent">
            <p class="form-control stext-111 cl2 plh3 rounded-3">Username : {username}</p>

          </div>

          <button onClick={() => logout()} class="flex-c-m stext-101 cl0 size-121 bg-danger bor1 hov-btn3 p-lr-15 trans-04 pointer">
            Logout
          </button>


        </form>
      </div>
      <div class="col-lg-1"></div>
      <div class="col-lg-7 col-md-12 col-sm-12 w-full-md float-end form-login  card card-body">
        <h4 class="mtext-105 cl2 txt-center p-b-30">
          Upload Event Form
        </h4>


        <div class="form-group">
          <label>Name event</label>
          <input type="text" name="name_event" id="name_event" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Desc event</label>
          <input type="text" name="desc_event" id="desc_event" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Banner event</label>
          <input type="file" name="banner_event" id="banner_event" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Location</label>
          <input type="text" name="location" id="location" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Location lat</label>
          <input type="text" name="location_lat" id="location_lat" class="form-control" />
        </div>

        <div class="form-group">
          <label>Date Start</label>
          <input type="date" name="time_start" id="time_start" class="form-control" />
        </div>

        <div class="form-group">
          <label>Date End</label>
          <input type="date" name="time_end" id="time_end" class="form-control" />
        </div>


        <button class="flex-c-m stext-101 cl0 size-121 bg-dark bor1 hov-btn3 p-lr-15 trans-04 pointer">
          Submit Event
        </button>
      </div>

    </div>
  </div>)
}
export default UserPage
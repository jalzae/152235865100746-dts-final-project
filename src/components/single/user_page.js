import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from '../../plugins/axios/axios'
import sweetAlert from 'sweetalert'
const UserPage = (props) => {
  let navigate = useNavigate()
  const username = useSelector((state) => state.userRTK.user.username);
  const [selectedFile, setSelectedFile] = useState(null);
  const [form, setForm] = useState({
    name_event: "",
    desc_event: "",
    banner_event: {},
    location: "",
    location_lat: "0.00",
    location_lng: "0.00",
    time_start: "",
    time_end: "",
    entry_user: username,
    update_user: username,
    update_date: Date.now(),
    delete_date: Date.now(),
    url_event: "",
    ext: ''
  })

  const logout = async () => {
    localStorage.clear();
    navigate("/", { replace: true })
  }

  const setFile = (e) => {

    setSelectedFile(e.target.files[0])
    setForm({ ...form, ext: e.target.value })
  }

  const uploadImage = async () => {
    let arr = form.ext.split(".")
    let extension = arr[arr.length - 1]
    let data = new FormData();
    data.append('imageFile', selectedFile)
    data.append('ext', extension)
    const response = await axios.post("/helper/image/create", data, { "Content-Type": "multipart/form-data" })

    setForm({ ...form, banner_event: response.data.data });
  }

  const submitEvent = async (e) => {
    e.preventDefault()
    try {
      const imageUrl = await uploadImage();
      const response = await axios.post("/home/submit_event", form, {})
      sweetAlert("Sukses Update Event")
    } catch (error) {
      console.log(error);
    }

  }



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

        <form method="post" multipart="form-data/enctype">
          <div class="form-group">
            <label>Name event</label>
            <input type="text" name="name_event" id="name_event" onChange={(e) => setForm({ ...form, name_event: e.target.value })} class="form-control" required />
          </div>

          <div class="form-group">
            <label>Desc event</label>
            <textarea type="text" name="desc_event" id="desc_event" onChange={(e) => setForm({ ...form, desc_event: e.target.value })} class="form-control" required />
          </div>

          <div class="form-group">
            <label>Banner event</label>
            <input type="file" name="banner_event" id="banner_event" onChange={(e) => setFile(e)} class="form-control" required />
          </div>

          <div class="form-group">
            <label>Location</label>
            <textarea type="text" name="location" id="location" onChange={(e) => setForm({ ...form, location: e.target.value })} class="form-control" required />
          </div>

          <div class="form-group">
            <label>Date Start</label>
            <input type="date" name="time_start" id="time_start" onChange={(e) => setForm({ ...form, time_start: e.target.value })} class="form-control" />
          </div>

          <div class="form-group">
            <label>Date End</label>
            <input type="date" name="time_end" id="time_end" onChange={(e) => setForm({ ...form, time_end: e.target.value })} class="form-control" />
          </div>


          <button type="submit" onClick={(e) => submitEvent(e)} class="flex-c-m stext-101 cl0 size-121 bg-dark bor1 hov-btn3 p-lr-15 trans-04 pointer">
            Submit Event
          </button>

        </form>
      </div>

    </div>
  </div>)
}
export default UserPage
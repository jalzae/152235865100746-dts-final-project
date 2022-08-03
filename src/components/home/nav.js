import { useState } from "react";


const Nav = (props) => {
  const [menubar, setMenu] = useState(1)
  const changeandSetMenu = (val) => {
    props.changeMenu(val)
    setMenu(val)
  }
  return (
    <>
      <li onClick={() => changeandSetMenu(1)} className={(menubar == 1) ? "active-menu" : ""}
      >
        <a href="#">Home</a>
      </li>

      <li onClick={() => changeandSetMenu(2)} className={(menubar == 2) ? "active-menu" : ""}>
        <a href="#">About</a>
      </li>

      <li onClick={() => changeandSetMenu(3)} className={(menubar == 3) ? "active-menu" : ""}>
        <a href="#">Event</a>
      </li>

      <li onClick={() => changeandSetMenu(4)} className={(menubar == 4) ? "active-menu" : ""}>
        <a href="#">Contact</a>
      </li>
    </>
  );
}

export default Nav;
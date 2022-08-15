import useDrawer from "../../hooks/useDrawer";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import "./Navbar.css";
import Avatar from '/avatar.png';

const Navbar = () => {
  const { toggle, visible } = useDrawer();

  return (
    <div className="navbar">
      <span>
        <button className="menuButton" onClick={toggle}>
          <Icon path={mdiMenu} size={1} horizontal />
        </button>
      </span>

      <span className="logo-mobile">Logo</span>

      <span className="navbar-icons">
        <img src={Avatar} height={35} className="img-avatar"></img>
      </span>
      
    </div>
  );
};

export default Navbar;

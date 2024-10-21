import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Amit.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100035271457468"} target="_blank">
          <FaFacebookF />
        </Link>
       
       
        
      </div>
    </footer>
  );
};

export default Footer;

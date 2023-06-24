import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileSidebar from "./ProfileSidebar";
import Orders from "./Orders";
import UserData from "./UserData";
import Address from "./Address";

import "./UserProfile.css";

function UserProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [component, setComponent] = useState();
  const [selected, setSelected] = useState();


  useEffect(() => {
    if(location.pathname === "/minha-conta") {
      setSelected(1);
      return navigate("/minha-conta/pedidos");
    }

    if(location.pathname === "/minha-conta/pedidos") {
      setComponent(<Orders/>);
      setSelected(1);
    }
    else if (location.pathname === "/minha-conta/dados") {
      setSelected(2);
      setComponent(<UserData/>);
    }else if (location.pathname === "/minha-conta/endereco") {
      setSelected(3);
      setComponent(<Address/>);

    } else  navigate("/404", { replace: true });

  }, [location]);

  return (
    <>
      <Header />
      <div className="user-profile-container">
        <ProfileSidebar selected={selected}/>
        <div className="profile-content">
          {component}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;

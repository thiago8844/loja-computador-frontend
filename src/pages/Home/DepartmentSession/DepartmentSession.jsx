import React from "react";
import HomeSession from "../HomeSession/HomeSession";
import "./DepartmentSession.css";
import departIcon from "../../../images/icons/department.svg";
import { Link } from "react-router-dom";

import depImage1 from "../../../images/homeImages/monte-seu-pc.png";
import depImage2 from "../../../images/homeImages/612e705bfe1ad807fc2b94cc_600x600.jpeg";
import depImage3 from "../../../images/homeImages/125188-1-Placa_de_video_NVIDIA_GeForce_RTX4090_24GB_PCI_E_Gigabyte_Gaming_OC_24G_GV_N4090GAMING_OC_24GD_125188.webp";
import depImage4 from "../../../images/homeImages/pc-gamer-t-gamer-prodigy-amd-ryzen-5-5600g-16gb-ddr4-ssd-480gb_157091.jpg";
import depImage5 from "../../../images/homeImages/71RJJqm5HsL._AC_SL1500_.jpg";
import depImage6 from "../../../images/homeImages/ryzen.jpg";
import depImage7 from "../../../images/homeImages/811-HoAXB0L._AC_SY679_.jpg";
import depImage8 from "../../../images/homeImages/485d441ffdc7a807f61a376e53fa9769.webp";

function DepartmentSession() {
  return (
    <HomeSession title={"departamentos"} icon={departIcon}>
      <div className="department-grid">
        <div className="department-card">
          <Link to="/monteseupc">
            <img src={depImage1} />
            <h2>Monte Seu PC</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/perifericos">
            <img src={depImage2} />
            <h2>Periféricos</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/hardware/placa-de-video">
            <img src={depImage3} />
            <h2>Placa de Vídeo</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/computadores/pc-gamer">
            <img src={depImage4} />
            <h2>PC Gamer</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/hardware/armazenamento">
            <img src={depImage5} />
            <h2>Armazenamento</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/hardware/processadores">
            <img src={depImage6} />
            <h2>Processadores</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/cadeiras-gamer">
            <img src={depImage7} />
            <h2>Cadeiras Gamer</h2>
          </Link>
        </div>
        <div className="department-card">
          <Link to="/departamento/notebooks">
            <img src={depImage8} />
            <h2>Notebooks</h2>
          </Link>
        </div>
      </div>
    </HomeSession>
  );
}

export default DepartmentSession;

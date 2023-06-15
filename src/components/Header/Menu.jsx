import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css"

function Menu() {
  return (
    <ul className="menu">
      {/* DEPARTAMENTOS */}
      <li className="menu-dep">
        <a className="e1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="hamburguer"
          >
            <path
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          DEPARTAMENTOS
        </a>

        <ul className="sub-menu">
          {/*  COMPUT  */}
          <li className="iterable">
            <a href="/departamento/computadores">
              Computadores
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            <ul className="sub-menu_2">
              <li>
                <a href="/departamento/computadores/pc-gamer">Gamer</a>
              </li>
              <li>
                <a href="/departamento/computadores/pc-casual">Casual</a>
              </li>
              <li>
                <a href="/departamento/computadores/pc-escritorio">
                  Home Office
                </a>
              </li>
            </ul>
          </li>
          {/*  HARD  */}
          <li className="iterable">
            <a href="/departamento/hardware">
              Hardware
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            <ul className="sub-menu_2">
              <li>
                <a href="/departamento/hardware/processador">Processadores</a>
              </li>
              <li>
                <a href="/departamento/hardware/placa-de-video">
                  Placa de Vídeo
                </a>
              </li>
              <li>
                <a href="/departamento/hardware/placa-mae">Placa Mãe</a>
              </li>
              <li>
                <a href="/departamento/hardware/memoria">Memórias</a>
              </li>
              <li>
                <a href="/departamento/hardware/armazenamento">Armazenamento</a>
              </li>
              <li>
                <a href="/departamento/hardware/refrigeramento">
                  Refrigeramento
                </a>
              </li>
            </ul>
          </li>
          {/*  PERIF  */}
          <li className="iterable">
            <a href="/departamento/perifericos">
              Periféricos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            <ul className="sub-menu_2">
              <li>
                <a href="/departamento/perifericos/teclado">Teclado</a>
              </li>
              <li>
                <a href="/departamento/perifericos/mouse">Mouse</a>
              </li>
              <li>
                <a href="/departamento/perifericos/fone">Fone de Ouvido</a>
              </li>
              <li>
                <a href="/departamento/perifericos/microfone">
                  Microfones e Headsets
                </a>
              </li>
              <li>
                <a href="/departamento/perifericos/webcam">Webcam</a>
              </li>
            </ul>
          </li>
          {/*   NOTEBOOKS  */}
          <li className="iterable">
            <a href="/departamento/notebooks">
              Notebooks
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>

            <ul className="sub-menu_2">
              <li>
                <a href="/departamento/notebooks/macbook">Macbook</a>
              </li>
              <li>
                <a href="/departamento/notebooks/notebook-gamer">
                  Notebook Gamer
                </a>
              </li>
              <li>
                <a href="/departamento/notebooks/notebook-escritorio">
                  Notebook Escritório
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/departamento/kit-upgrade"> Kit Upgrade </a>
          </li>

          <li>
            <a href="/departamento/cadeiras-gamer">Cadeiras Gamer </a>
          </li>

          <li>
            <a href="/departamento/monitores"> Monitores </a>
          </li>

          <li>
            <a href="/departamento/celulares"> Celulares </a>
          </li>

          <li>
            <a href="/departamento/games">Games </a>
          </li>
        </ul>
      </li>
      {/* COMPUTADORES */}
      <li>
        <a href="/departamento/computadores">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
          COMPUTADORES
        </a>

        <ul className="sub-menu">
          {/*  COMPUT */}
          <li>
            <a href="/departamento/computadores/pc-gamer"> Gamer </a>
          </li>

          <li>
            <a href="/departamento/computadores/pc-escritorio"> Escritório </a>
          </li>

          <li>
            <a href="/departamento/computadores/pc-casual">Casual</a>
          </li>
        </ul>
      </li>
      {/* HARDWARE */}
      <li>
        <a href="/departamento/hardware/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
            />
          </svg>
          HARDWARE
        </a>
        <ul className="sub-menu">
          <li>
            <a href="/departamento/hardware/processador">Processadores</a>
          </li>
          <li>
            <a href="/departamento/hardware/placa-de-video">Placa de Vídeo</a>
          </li>
          <li>
            <a href="/departamento/hardware/placa-mae">Placa Mãe</a>
          </li>
          <li>
            <a href="/departamento/hardware/memoria">Memórias</a>
          </li>
          <li>
            <a href="/departamento/hardware/armazenamento">Armazenamento</a>
          </li>
          <li>
            <a href="/departamento/hardware/refrigeramento">Refrigeramento</a>
          </li>
        </ul>
      </li>
      {/*  PERIFÉRICOS  */}
      <li>
        <a href="/departamento/perifericos/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="mouse"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11.141 4c-1.582 0-2.387.169-3.128.565a3.453 3.453 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128.337.63.818 1.111 1.448 1.448.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.453 3.453 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.453 3.453 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4H11.14zm0-2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801a5.452 5.452 0 0 1-2.268-2.268C4.278 17.953 4 16.873 4 14.859V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6h2v5h-2V6z" />
          </svg>
          PERIFÉRICOS
        </a>

        <ul className="sub-menu">
          <li>
            <a href="/departamento/perifericos/teclado">Teclado</a>
          </li>
          <li>
            <a href="/departamento/perifericos/mouse">Mouse</a>
          </li>
          <li>
            <a href="/departamento/perifericos/fone">Fone de Ouvido</a>
          </li>
          <li>
            <a href="/departamento/perifericos/headset">
              Microfones e Headsets
            </a>
          </li>
          <li>
            <a href="/departamento/perifericos/webcam">Webcam</a>
          </li>
        </ul>
      </li>
      {/*  MONTEU SEU PC  */}
      <li className="monte-pc">
        <a href="/monteseupc" className="e2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
              clip-rule="evenodd"
            />
            <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z" />
          </svg>

          <span>MONTE SEU COMPUTADOR</span>
        </a>
      </li>
    </ul>
  );
}

export default Menu;

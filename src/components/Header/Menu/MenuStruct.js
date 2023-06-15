import hamburguerIcon from "../../../images/icons/hamburguer.svg"
import monitorIcon from "../../../images/icons/monitor.svg"
import cpuIcon from "../../../images/icons/cpu.svg"
import mouseIcon from "../../../images/icons/mouse.svg"
import configIcon from "../../../images/icons/config.svg"
import arrowIcon from "../../../images/icons/seta.svg"

export const menuStruct = [
  {
    title: "departamentos",
    url: "",
    icon:hamburguerIcon,
    subMenu: [
      {
        title: "Computadores",
        url: "/computadores",
        icon: arrowIcon,
        subMenu: [
          {
            title: "PC Gamer",
            url: "/computadores/pc-gamer",
          },
          {
            title: "PC Casual",
            url: "/computadores/pc-casual",
          },
          {
            title: "PC Home Office",
            url: "/computadores/pc-escritorio",
          },
  
        ],
      },
      {
        title: "Hardware",
        url: "/hardware",
        icon: arrowIcon,
        subMenu: [
          {
            title: "Processadores",
            url: "/hardware/processador",
          },
          {
            title: "Placa de Vídeo",
            url: "/hardware/placa-de-video",
          },
          {
            title: "Placa Mãe",
            url: "/hardware/placa-mae",
          },
          {
            title: "Memórias",
            url: "/hardware/memoria",
          },
          {
            title: "Armazenamento",
            url: "/hardware/armazenamento",
          },
          {
            title: "Refrigeramento",
            url: "/hardware/refrigeramento",
          },
        ],
      },
      {
        title: "Periféricos",
        url: "/perifericos",
        icon: arrowIcon,
        subMenu: [
          {
            title: "Teclado",
            url: "/perifericos/teclado",
          },
          {
            title: "Mouse",
            url: "/perifericos/mouse",
          },
          {
            title: "Fones",
            url: "/perifericos/fone",
          },
          {
            title: "Headsets e Microfones",
            url: "/perifericos/headset",
          },
          {
            title: "WebCam",
            url: "/perifericos/webcam",
          },
        ],
      },
      {
        title: "Notebooks",
        url: "/notebooks",
        icon: arrowIcon,
        subMenu: [
          {
            title: "Macbook",
            url: "/notebooks/macbook",
          },
          {
            title: "Mouse",
            url: "/notebooks/notebook-gamer",
          },
          {
            title: "Notebook Escritório",
            url: "/notebooks/notebook-escritorio",
          },
          
        ],
      },,
      {
        title: "Kit Upgrade",
        url: "/kit-upgrade",
      },
      {
        title: "Cadeiras Gamer",
        url: "/cadeiras-gamer",
      },
      {
        title: "Monitores",
        url: "/monitores",
      },
      {
        title: "Celulares",
        url: "/celulares",
      },
      {
        title: "Games",
        url: "/games",
      }
    ],
  },
  {
    title: "Computadores",
    url: "/computadores",
    icon: monitorIcon,
    subMenu: [
      {
        title: "PC Gamer",
        url: "/computadores/pc-gamer",
      },
      {
        title: "PC Casual",
        url: "/computadores/pc-casual",
      },
      {
        title: "PC Home Office",
        url: "/computadores/pc-escritorio",
      },
    ],
  },
  {
    title: "Hardware",
    url: "/hardware",
    icon: cpuIcon,
    subMenu: [
      {
        title: "Processadores",
        url: "/hardware/processador",
      },
      {
        title: "Placa de Vídeo",
        url: "/hardware/placa-de-video",
      },
      {
        title: "Placa Mãe",
        url: "/hardware/placa-mae",
      },
      {
        title: "Memórias",
        url: "/hardware/memoria",
      },
      {
        title: "Armazenamento",
        url: "/hardware/armazenamento",
      },
      {
        title: "Refrigeramento",
        url: "/hardware/refrigeramento",
      },
    ],
  },
  {
    title: "Periféricos",
    url: "/perifericos",
    icon: mouseIcon,
    subMenu: [
      {
        title: "Teclado",
        url: "/perifericos/teclado",
      },
      {
        title: "Mouse",
        url: "/perifericos/mouse",
      },
      {
        title: "Fones",
        url: "/perifericos/fone",
      },
      {
        title: "Headsets e Microfones",
        url: "/perifericos/headset",
      },
      {
        title: "WebCam",
        url: "/perifericos/webcam",
      },
    ],
  },
  {
    title: "monte seu computador",
    url: "/monte-seu-pc",
    icon: configIcon
  },
];

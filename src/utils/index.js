export const getCookie = (cookieName) => {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};

import Cookies from "universal-cookie";
import jwt from "jwt-decode";

const cookies = new Cookies();

export const checkAuth = () => {
  let authenticated = false;

  try {
    const token = cookies.get("auth");

    if (token) {
      const { id } = jwt(token);
      authenticated = true;

      return {
        user_id: id,
        authenticated,
        token,
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    user_id: null,
    authenticated,
    token: null,
  };
};

export function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

export function formatCPF(cpf) {
  const cleanedCPF = cpf.replace(/\D/g, "");

  const groups = cleanedCPF.match(/(\d{3})(\d{3})(\d{3})(\d{2})/);

  const formattedCPF = `${groups[1]}.${groups[2]}.${groups[3]}-${groups[4]}`;

  return formattedCPF;
}

export function formatPhoneNumber(phoneNumber) {
  // Remove any non-digit characters from the phone number string
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Check if the phone number has 10 or 11 digits
  const isElevenDigits = cleanedPhoneNumber.length === 11;

  // Define the format based on the number of digits
  const format = isElevenDigits
    ? "({0}{1}) {2}{3}{4}{5}-{6}{7}{8}{9}"
    : "({0}{1}) {2}{3}{4}{5}-{6}{7}{8}{9}";

  // Use Array.prototype.reduce to insert the digits into the format
  const formattedPhoneNumber = cleanedPhoneNumber
    .split("")
    .reduce((acc, digit, index) => {
      return acc.replace(`{${index}}`, digit);
    }, format);

  return formattedPhoneNumber;
}

export function formatCEP(cep) {
  const cleanCEP = cep.replace(/\D/g, "");
  return cleanCEP.replace(/(\d{5})(\d{3})/, "$1-$2");
}

export function validateUserAddress(address) {
  const errors = [];
  let { cep, rua, numero, bairro, cidade, estado } = address;

  cep = cep.replace(/\D/g, "");
  if (!cep || cep.length != 8) errors.push("CEP inválido");
  if (!rua) errors.push("Rua inválida");
  if (!numero) errors.push("Número inválido");
  if (!bairro) errors.push("Bairro inválido");
  if (!cidade) errors.push("Cidade inválida");
  if (!estado) errors.push("Estado inválido");

  if (errors.length === 0) {
    return {
      result: true,
      errors: null,
    };
  }
  return {
    result: false,
    errors,
  };
}

export function validateUserData(userData) {
  const errors = [];

  let { email, telefone, cpf, nome, data_nasc } = userData;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome) errors.push("Nome inválido");
  if (!emailRegex.test(email)) errors.push("Email Inválido");

  telefone = telefone.replace(/\D/g, "");
  if ((telefone.length != 10 && telefone.length != 11) || !telefone)
    errors.push("Telefone inválido");

  cpf = cpf.replace(/\D/g, "");
  if (cpf.length != 11 || !cpf) errors.push("CPF inválido");

  if (!data_nasc) errors.push("Data inválida");

  console.log(userData);

  //Envia os resultado
  if (errors.length === 0) {
    return {
      result: true,
      errors: null,
    };
  }

  return {
    result: false,
    errors,
  };
  return null;
}

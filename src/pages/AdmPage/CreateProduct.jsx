import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { checkAuth } from "../../utils";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./CreateProduct.css";

function CreateProduct() {
  const initialValues = {
    nome: "",
    preco: "",
    fabricante: "",
    id_departamento: null,
    id_sub_departamento: null,
  };

  const navigate = useNavigate();
  const { token } = checkAuth();
  const [formValues, setFormValues] = useState(initialValues);
  const [formFiles, setFormFiles] = useState([]);

  //Verifica se o user é adm
  const checkAdmAuth = async () => {
    try {
      const response = await api.get("/check-adm", {
        headers: {
          Authorization: token,
        },
      });
      if (response.status === 200) {
        return;
      } else {
        return navigate("/login", { replace: true });
      }
    } catch (error) {
      return navigate("/login", { replace: true });
    }
  };

  //Lida com as mudanças do formulário
  const changeHandler = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setFormValues((prevData) => {
      prevData[name] = value;

      return { ...prevData };
    });
    console.log(formValues);
  };

  const fileChangeHandler = (e) => {
    const files = Array.from(e.target.files);
    setFormFiles(files);
  };

  const submitNewProduct = async (e) => {
    e.preventDefault();
    console.log("Vou enviar")
    console.log(formValues)
    console.log(formFiles)

    const formData = new FormData();

    formData.append("nome", formValues.nome);
    formData.append("preco", formValues.preco);
    formData.append("fabricante", formValues.fabricante);
    formData.append("id_departamento", formValues.id_departamento);
    formData.append("id_sub_departamento", formValues.id_sub_departamento);
    formData.append("descricao", null);

    formFiles.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });

    try {
      const response = await api.post("/criarproduto", formData, {
        headers: {
          Authorization: token,
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
 
  };

  useEffect(() => {
    checkAdmAuth();
  });

  return (
    <>
      <Header />
      <main className="create-product-container">
        <form
          onSubmit={submitNewProduct}
          className="criar-produto-form"
          enctype="multipart/form-data"
        >
          <h1>Criação de Produto</h1>

          <div className="form-nome">
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="name"
              name="nome"
              placeholder="Insira o nome do produto"
              value={formValues.nome}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-preco">
            <label for="preco">Preço:</label>
            <input
              type="text"
              id="preco"
              name="preco"
              placeholder="Insira o preco do produto"
              required
              value={formValues.preco}
              onChange={changeHandler}
              oninvalid="this.setCustomValidity('Esse número não é válido !')"
            />
          </div>
          <div className="form-fabricante">
            <label for="fabricante">Fabricante:</label>
            <input
              value={formValues.fabricante}
              onChange={changeHandler}
              type="text"
              id="fabricante"
              name="fabricante"
              placeholder="Insira o preco do produto"
            />
          </div>
          <div className="form-departamento">
            <label for="id_departamento">Departamento:</label>
            <select
              value={formValues.id_departamento}
              onChange={changeHandler}
              name="id_departamento"
              id="select-dep"
              className="dep"
              required
            >
              <option value="" disabled selected hidden>
                Selecione
              </option>
              <option value="1">Computador</option>
              <option value="2">Hardware</option>
              <option value="3">Periféricos</option>
              <option value="4">Notebooks</option>
              <option value="5">Kit Upgrade</option>
              <option value="6">Cadeiras Gamer</option>
              <option value="7">Monitores</option>
              <option value="8">Celulares</option>
              <option value="9">Games</option>
            </select>
          </div>
          <div className="form-sub-departamento">
            <label for="id_sub_departamento">Sub-Departamento:</label>
            <select
              name="id_sub_departamento"
              id="select-sub-dep"
              className="dep"
              value={formValues.id_sub_departamento}
              onChange={changeHandler}
            >
              <option value="">Nenhum</option>
              <option value="1">Pc Gamer</option>
              <option value="2">PC Escritorio</option>
              <option value="3">PC Casual</option>
              <option value="4">Processador</option>
              <option value="5">Placa de Vídeo</option>
              <option value="6">Placa Mãe</option>
              <option value="7">Memória</option>
              <option value="8">Armazenamento</option>
              <option value="9">Cooler</option>
              <option value="10">Teclado</option>
              <option value="11">Mouse</option>
              <option value="12">Fone</option>
              <option value="13">Headset</option>
              <option value="14">Webcam</option>
              <option value="15">Macbook</option>
              <option value="16">Notebook Gamer</option>
              <option value="17">Notebook Escritório</option>
            </select>
          </div>
          <div className="form-descricao">
            <label for="description">Descrição:</label>
            <textarea
              name="descricao"
              className="form-descricao"
              cols="100"
              rows="10"
            ></textarea>
          </div>

          <div className="">
            <label for="imagens" className="form-label">
              Imagem:
            </label>
            <input
              type="file"
              id="image"
              name="imagens"
              className="form-input"
              accept="image/*"
              multiple
              required
              onChange={fileChangeHandler}
            />
          </div>
          <div className="div.btn">
            <button type="submit" className="btn-criar">
              CRIAR
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default CreateProduct;

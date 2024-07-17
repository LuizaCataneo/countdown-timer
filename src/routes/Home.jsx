import React, { useContext } from "react";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownContext } from "../context/CountdownContext";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };
    setEvent(eventObject);
    navigate("/countdown"); //redirecionando usuário para a rota countdown
  };

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form action="" className="countdown-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;

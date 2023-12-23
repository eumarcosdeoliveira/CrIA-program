import React, { useState } from 'react';
import Imagem from "../../../assets/img/img.png";
import "./style-cards.css";

function Cards() {
  const [text, setText] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Imagem;
    link.download = 'imagem.png';
    link.click();
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Verifica se o texto atingiu 200 caracteres
    if (newText.length >= 44) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="container">
      <div className="workspace">

        <form id="cardsform" className='form'>
          <div className='inputContainerw'>
            <input
              className='input'
              type="url"
              id="url"
              name="url"
              placeholder='URL'
            />
          </div>

          <div id="cardsinput" className='inputContainer'>
            <div className="textarea-container">
              <textarea
                className={`input textarea ${text.length >= 44 ? 'red-text' : ''}`}
                id="textcards"
                name="text"
                placeholder='Edite seu Texto'
                value={text}
                onChange={handleTextChange}
                style={{ resize: 'none' }} // Impede o redimensionamento manual
              />
            </div>
            <div className="character-count">
              {text.length}/43
            </div>
          </div>

          <button id='buttoncard2' className='button' disabled={isButtonDisabled}>
            Atualizar
          </button>

          <button id="buttoncard" className='button' onClick={handleDownload} disabled={isButtonDisabled}>
            Baixar
          </button>
        </form>

        <img src={Imagem} alt="" />
      </div>
    </div>
  );
}

export default Cards;

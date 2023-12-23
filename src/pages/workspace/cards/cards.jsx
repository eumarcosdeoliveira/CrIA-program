import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Imagem from '../../../assets/img/img.png';
import './style-cards.css';

function Cards() {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    checkForChanges();
  }, [url, text]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Imagem;
    link.download = 'imagem.png';
    link.click();
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const checkForChanges = () => {
    if (url !== '' || text !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.post('http://localhost:5000/update', { url, text });
      console.log('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar dados:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="workspace">
        <form id="cardsform" className="form">
          <div className="inputContainerw">
            <input
              className="input"
              type="url"
              id="url"
              name="url"
              placeholder="URL"
              value={url}
              onChange={handleUrlChange}
            />
          </div>

          <div id="cardsinput" className="inputContainer">
            <div className="textarea-container">
              <textarea
                className={`input textarea ${text.length >= 43 ? 'red-text' : ''}`}
                id="textcards"
                name="text"
                placeholder="Edite seu Texto"
                value={text}
                onChange={handleTextChange}
                style={{ resize: 'none' }} // Impede o redimensionamento manual
              />
            </div>
            <div className="character-count">{text.length}/43</div>
          </div>

          <button id="buttoncard2" className="button" onClick={handleUpdate} disabled={isButtonDisabled}>
            Atualizar
          </button>

          <button id="buttoncard" className="button" onClick={handleDownload} disabled={isButtonDisabled}>
            Baixar
          </button>
        </form>

        <img src={Imagem} alt="" />
      </div>
    </div>
  );
}

export default Cards;

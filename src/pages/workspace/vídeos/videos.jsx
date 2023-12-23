import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Videos() {
  const [data, setData] = useState([]);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Buscar imagem
        const responseImage = await axios.get('http://localhost:5000/images', { responseType: 'arraybuffer' });
        const imageBlob = new Blob([responseImage.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'imagem.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Renderizar membros */}
      {data.map((member, index) => (
        <div key={index}>{member}</div>
      ))}

      {/* Exibir imagem */}
      <img src={imageSrc} alt="Imagem" />

      {/* Botão para baixar imagem */}
      <button onClick={handleDownload}>Baixar Imagem</button>
    </div>
  );
}

export default Videos;

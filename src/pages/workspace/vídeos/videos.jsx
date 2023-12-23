import "./style-videos.css"
import React, {useState} from 'react'

function Videos () {
    const handleDownload = () => {
        const imageUrl = 'https://podacochar.com.br/wp-content/uploads/2023/12/congresso-1536x947.jpg';
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.jpg';
        link.click();
      };
  
    return (
        <div>
        <button onClick={handleDownload}>Baixar Imagem</button>
      </div>
    );
  }

export default Videos
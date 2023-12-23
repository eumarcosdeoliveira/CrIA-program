import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Videos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/members');
        const membersArray = response.data.members || [];
        setData(membersArray);
        console.log(membersArray);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Renderizar membros como necessário */}
      {data.map((member, index) => (
        <div key={index}>{member}</div>
      ))}

      <button>Baixar Imagem</button>
    </div>
  );
}

export default Videos;

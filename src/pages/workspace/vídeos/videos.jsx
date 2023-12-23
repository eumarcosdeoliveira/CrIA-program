import React, { useState, useEffect } from 'react';

function Videos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("members")
      .then(res => res.json())
      .then(data => {
        setData(data.members || []);
        console.log(data);
      })
  }, []);

  return (
    <div>
      <h1>Membros:</h1>
      <ul>
        {data.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <button >Baixar Imagem</button>
    </div>
  );
}

export default Videos;

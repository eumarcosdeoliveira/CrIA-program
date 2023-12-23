import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login/index';
import { AppRoutes } from './routes/AppRoutes';


// Remova a parte desnecessária de importação de estilos (você deve usar um arquivo CSS para isso)

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você quiser começar a medir o desempenho em seu aplicativo, descomente a linha abaixo
// reportWebVitals();

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import Spinner from 'react-bootstrap/Spinner';
import './style-sidebar.css';

import { MdInsertPhoto } from 'react-icons/md';
import { MdVideoCameraBack } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaHistory } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { ImExit } from 'react-icons/im';



function Sidebar() {
  const navigate = useNavigate();
  const [signOut, loading, error] = useSignOut(auth);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      await signOut();
      // Adicione feedback visual ou redirecione para a página de login
      alert('Você foi desconectado.');
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <div className="sidebar">
      <img className="logoside" src={logo} alt="Logo" />

      <div className="Menu">
        <span>MENU</span>

        <button>
          <MdInsertPhoto />
          <span>Cards</span>
        </button>

        <button>
          <MdVideoCameraBack />
          <span>Vídeos</span>
        </button>

        <button>
          <IoPerson />
          <span>Conta</span>
        </button>

        <button>
          <FaHistory />
          <span>Histórico</span>
        </button>

        <button>
          <IoMdSettings />
          <span>Configurações</span>
        </button>

        <button className="Sair" onClick={handleLogout}>
          {logoutLoading ? (
            <Spinner animation="border" variant="secondary" />
          ) : (
            <>
              <ImExit />
              <span>Sair</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

interface TeacherProps {
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
  id: number;
}

const TeacherItem: React.FC<TeacherProps> = (props) => {

  async function handleCreateNewConnection() {
    await api.post('connections', {
      user_id: props.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt={props.name}/>
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>
      <p>
        {props.bio}
      </p>

      <footer>
        <p>
              Preço/hora 
          <strong>R$ {props.cost}</strong>
        </p>
        <a target="_blank" onClick={handleCreateNewConnection} href={`https://wa.me/${props.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
        </a>
      </footer>
    </article>

    
  );
};

export default TeacherItem;
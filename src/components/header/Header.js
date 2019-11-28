import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo-purple.svg';

import { Container, Content, Profile } from './styles';
import Notifications from '../notifications/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Gilmar Basilio</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Gilmar Basilio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

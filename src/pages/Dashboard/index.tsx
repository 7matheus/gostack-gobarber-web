import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/31441201?s=460&u=1cf93b13751255a1e6507b2e0f8faf1384e4294f&v=4"
                alt="Matheus Lino"
              />
              <strong>Matheus Lino</strong>
              <span>
                <FiClock />
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/31441201?s=460&u=1cf93b13751255a1e6507b2e0f8faf1384e4294f&v=4"
                  alt="Matheus Lino"
                />
                <strong>Matheus Lino</strong>
              </div>
            </Appointment>

            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/31441201?s=460&u=1cf93b13751255a1e6507b2e0f8faf1384e4294f&v=4"
                  alt="Matheus Lino"
                />
                <strong>Matheus Lino</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};
export default Dashboard;

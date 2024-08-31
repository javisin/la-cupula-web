import React from 'react';
import Page from '../../components/Page';
import schedule1 from '../../assets/horario-mañana.jpeg';
import schedule2 from '../../assets/horario-tarde.jpeg';

function Schedule() {
  return (
    <div className="Schedule">
      <Page>
        <div className="container mt-3 text-center">
          <h3>Horarios</h3>
          <img className="w-75 mb-3" src={schedule1} alt="Horario mañana" />
          <br/>
          <img className="w-75 mb-3" src={schedule2} alt="Horario tarde" />
          <br />
        </div>
      </Page>
    </div>
  );
}

export default Schedule;

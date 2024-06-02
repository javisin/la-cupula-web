import React from 'react';
import Page from '../../components/Page';
import schedule1 from '../../assets/horario1.jpeg';
import schedule2 from '../../assets/horario2.jpeg';
import schedule3 from '../../assets/horario3.jpeg';
import schedule4 from '../../assets/horario4.jpeg';

function Schedule() {
  return (
    <div className="Schedule">
      <Page>
        <div className="container mt-3 text-center">
          <h3>Horarios</h3>
          <img className="w-50 mb-3" src={schedule1} alt="Horario" />
          <br />
          <img className="w-50 mb-3" src={schedule2} alt="Horario" />
          <br />
          <img className="w-50 mb-3" src={schedule3} alt="Horario" />
          <br />
          <img className="w-50 mb-3" src={schedule4} alt="Horario" />
        </div>
      </Page>
    </div>
  );
}

export default Schedule;

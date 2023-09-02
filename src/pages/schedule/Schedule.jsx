import React from 'react';
import Page from '../../components/Page';
import schedule from '../../assets/horario.jpeg';

function Schedule() {
  return (
    <div className="Schedule">
      <Page>
        <div className="container mt-3 text-center">
          <h3>Horarios</h3>
          <img className="w-100" src={schedule} alt="Horario" />
          <a className="mt-3 btn btn-secondary" href={schedule} download="horario.jpeg">Descargar horario</a>
        </div>
      </Page>
    </div>
  );
}

export default Schedule;

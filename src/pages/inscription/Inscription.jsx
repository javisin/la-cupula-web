import React from 'react';
import './Inscription.scss';
import logo from '../../assets/logo-black.svg';
import Page from '../../components/Page';

function Inscription() {
  return (
    <div className="Inscription">
      <Page>
        <h3 className="mt-3 text-center">
          ¡Únete al equipo!
        </h3>

        <h5 className="mt-3 text-center">
          Ponte en contacto con nosotros en el
          <a href="tel:123-456-7890"> +34 722 61 37 52 </a>
          para empezar a entrenar
        </h5>
        <div className="row justify-content-end">
          <img src={logo} alt="logo" />
        </div>
      </Page>
    </div>
  );
}

export default Inscription;

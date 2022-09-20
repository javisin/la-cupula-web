import React from 'react';
import './Prices.scss';
import Page from '../../components/Page';
import prices from '../../assets/precios.jpeg';

function Prices() {
  return (
    <div className="Prices">
      <Page>
        <div className="container mt-3 text-center">
          <h3>Precios</h3>
          <img src={prices} alt="Precios" />
        </div>
      </Page>
    </div>
  );
}

export default Prices;

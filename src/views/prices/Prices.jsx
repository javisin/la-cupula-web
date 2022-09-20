import React from 'react';
import Page from '../../components/Page';
import prices from '../../assets/precios.jpeg';

function Prices() {
  return (
    <div className="Prices">
      <Page>
        <div className="container mt-3 text-center">
          <h3>Precios</h3>
          <img className="w-25" src={prices} alt="Precios" />
        </div>
      </Page>
    </div>
  );
}

export default Prices;

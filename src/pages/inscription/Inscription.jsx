import React, { useState } from 'react';
import './Inscription.scss';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import db from '../../firebase';
import logo from '../../assets/logo-black.svg';
import Page from '../../components/Page';

function Inscription() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('adult');
  const [belt, setBelt] = useState('white');
  const [observations, setObservations] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isKid, setIsKid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'users', email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setResponseMessage('Este email ya está registrado.');
      return;
    }
    await setDoc(doc(db, 'users', email), {
      name, surname, phone, email, category, belt, contactName, contactSurname, observations,
    });
    setResponseMessage('¡Inscripción completada con éxito!');
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    const kidsCategories = ['kids-1', 'kids-2', 'youth-1'];
    setIsKid(kidsCategories.includes(newCategory));
  };

  return (
    <div className="Inscription">
      <Page>
        <h3 className="mt-3 text-center">
          ¡Únete al equipo!
        </h3>
        <form className="container" onSubmit={handleSubmit}>

          <div className="row justify-content-center">
            <label htmlFor="category">
              <strong>Categoría</strong>
              <select value={category} onChange={handleCategoryChange}>
                <option value="kids-1">Infantil 1 (4-6 años)</option>
                <option value="kids-2">Infantil 2 (6-12 años)</option>
                <option value="youth-1">Juvenil 1 (12-14 años)</option>
                <option value="youth-2">Juvenil 2 (14-17 años)</option>
                <option value="adult">Adulto (+18)</option>
                <option value="kick-boxing">Kick Boxing</option>
              </select>
            </label>
          </div>

          {!isKid && category !== 'kick-boxing'
            && (
              <div className="row justify-content-center">
                <label htmlFor="belt">
                  <strong>Cinturón</strong>
                  <select value={belt} onChange={(e) => setBelt(e.target.value)}>
                    <option value="white">Blanco</option>
                    <option value="blue">Azul</option>
                    <option value="purple">Morado</option>
                    {category !== 'youth-2'
                      && (
                        <>
                          <option value="brown">Marrón</option>
                          <option value="black">Negro</option>
                        </>
                      )}
                  </select>
                </label>
              </div>
            )}

          <div className="row justify-content-center">
            <label htmlFor="name">
              <strong>Nombre</strong>
              <input required onChange={(e) => setName(e.target.value)} type="text" />
            </label>
          </div>

          <div className="row justify-content-center">
            <label htmlFor="surname">
              <strong>Apellidos</strong>
              <input required onChange={(e) => setSurname(e.target.value)} type="text" />
            </label>
          </div>

          {isKid
            && (
              <div>
                <div className="row justify-content-center">
                  <label className="mt-3" htmlFor="">
                    <h5>Datos de padre/madre o tutor</h5>
                  </label>
                  <label htmlFor="contact-name">
                    <strong>Nombre</strong>
                    <input required onChange={(e) => setContactName(e.target.value)} type="text" />
                  </label>
                </div>
                <div className="row justify-content-center">
                  <label htmlFor="contact-name">
                    <strong>Apellidos</strong>
                    <input required onChange={(e) => setContactSurname(e.target.value)} type="text" />
                  </label>
                </div>
              </div>
            )}

          <div className="row justify-content-center">
            <label htmlFor="phone">
              <strong>Teléfono</strong>
              <input required onChange={(e) => setPhone(e.target.value)} type="text" />
            </label>
          </div>

          <div className="row justify-content-center">
            <label htmlFor="email">
              <strong>Email</strong>
              <input required onChange={(e) => setEmail(e.target.value)} type="email" />
            </label>
          </div>

          <div className="row justify-content-center">
            <label htmlFor="observations">
              <strong>Observaciones</strong>
              <textarea value={observations} onChange={(e) => setObservations(e.target.value)} />
            </label>
          </div>

          <div className="row justify-content-center mt-2">
            <button className="submit-button" type="submit">Unirse</button>
          </div>

          <div className="row mt-3 justify-content-center">
            <p>{responseMessage}</p>
          </div>

        </form>
        <div className="row justify-content-end">
          <img src={logo} alt="logo" />
        </div>
      </Page>
    </div>
  );
}

export default Inscription;

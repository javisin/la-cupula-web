import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import db from '../firebase';
import logo from '../assets/logo-black.svg';

function Inscription() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('adult');
  const [showMessage, setShowMessage] = useState(false);
  const [isKid, setIsKid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'users', email), {
      name, surname, phone, email, category, contactName, contactSurname,
    });
    setShowMessage(true);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    const kidsCategories = ['kids-1', 'kids-2', 'youth-1'];
    setIsKid(kidsCategories.includes(newCategory));
  };

  return (
    <div className="Inscription">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">EJJB La Cúpula</Link>
        </nav>
      </header>
      <h3 className="mt-3 text-center">
        ¡Únete al equipo!
      </h3>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <label htmlFor="email">
            <strong>Categoría</strong>
            <select value={category} onChange={handleCategoryChange}>
              <option value="kids-1">Infantil 1 (4-6 años)</option>
              <option value="kids-2">Infantil 2 (6-12 años)</option>
              <option value="youth-1">Juvenil 1 (12-14 años)</option>
              <option value="youth-2">Juvenil 2 (14-17 años)</option>
              <option value="adult">Adulto (+18)</option>
            </select>
          </label>
        </div>

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
          <button type="submit">Unirse</button>
        </div>

        {showMessage
          && (
          <div className="row mt-3 justify-content-center">
            <p>¡Inscripción completada con éxito!</p>
          </div>
          )}

        <div className="row justify-content-end">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </form>
    </div>
  );
}

export default Inscription;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';

function Student() {
  const [user, setUser] = useState({});
  const { email } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'users', email);
    getDoc(docRef).then((docSnap) => {
      setUser(docSnap.data());
    });
  }, []);

  return (
    <div className="Student">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">EJJB La Cúpula</Link>
        </nav>
      </header>
      <h3 className="mt-3 text-center">
        Página de administrador
      </h3>

      <div className="container">
        <div className="row mt-3 text-center">
          <div className="col-6">
            <strong>Nombre</strong>
          </div>

          <div className="col-6">
            <strong>Apellidos</strong>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-6">
            <span>{user.name}</span>
          </div>

          <div className="col-6">
            <span>{user.surname}</span>
          </div>
        </div>

        <div className="row mt-3 text-center">
          <div className="col-6">
            <strong>Email</strong>
          </div>

          <div className="col-6">
            <strong>Teléfono</strong>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-6">
            <span>{user.email}</span>
          </div>

          <div className="col-6">
            <span>{user.phone}</span>
          </div>
        </div>

        <div className="row text-center mt-2">

          <div className="col-6">
            <strong>Categoría</strong>
          </div>

          <div className="col-6">
            <strong>Cinturón</strong>
          </div>
        </div>

        <div className="row text-center">

          <div className="col-6">
            <span>{user.category}</span>
          </div>

          <div className="col-6">
            <span>{user.belt}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Student;

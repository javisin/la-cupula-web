import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);

  const auth = getAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        if (user.uid === 'VcxR12Pq0dVrhi2qJkA78qBaWA83') {
          const querySnapshot = await getDocs(collection(db, 'users'));
          const inscribedUsers = querySnapshot.docs.map((doc) => doc.data());
          setUsers(inscribedUsers);
          setIsLogged(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="Admin">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">EJJB La Cúpula</Link>
        </nav>
      </header>
      <h3 className="mt-3 text-center">
        Página de administrador
      </h3>
      <form className="container" onSubmit={handleSubmit}>

        <div className="row justify-content-center">
          <label htmlFor="name">
            <strong>Email</strong>
            <input name="email" required onChange={(e) => setEmail(e.target.value)} type="text" />
          </label>
        </div>

        <div className="row justify-content-center">
          <label htmlFor="surname">
            <strong>Contraseña</strong>
            <input name="password" required onChange={(e) => setPassword(e.target.value)} type="password" />
          </label>
        </div>

        <div className="row justify-content-center">
          <button type="submit">Entrar</button>
        </div>
      </form>

      {isLogged
      && (
      <div>
        <h3>Usuarios inscritos</h3>
        {users.map((user) => (
          <div key={user.email} className="row m-1">
            <div className="col-2">
              {user.name}
            </div>

            <div className="col-2">
              {user.surname}
            </div>

            <div className="col-2">
              {user.category}
            </div>

            <div className="col-2">
              {user.email}
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Admin;

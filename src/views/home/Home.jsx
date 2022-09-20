import React from 'react';
import Page from '../../components/Page';
import logo from '../../assets/logo.svg';
import home from '../../assets/home.jpeg';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <Page>
        <div className="container mt-3">
          <div className="bg-dark quote mx-auto">
            <img className="w-50 quote-logo" src={logo} alt="Logo" />
            <div className="centered">
              <p className="font-italic">
                &quot;Establece tus metas altas, y no pares hasta que llegues allí.&quot;
              </p>
              <span>- Bo Jackson</span>
            </div>
          </div>

          <div className="my-3">
            <h5 className="font-weight-bold">¿Qué es La Cúpula?</h5>
            <p>
              La Cúpula es una escuela de Jiu-jitsu brasileño situada en Las Palmas de Gran Canaria que
              prioriza el bienestar y la comodidad de todos los estudiantes, proporcionando una variedad
              de clases para diferentes edades y niveles, con la principal intención de crear buenos
              atletas y personas tanto dentro del mundo deportivo como fuera de él.
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-weight-bold">¿Qué voy a aprender?</h5>
            <p>
              Nuestro objetivo es enseñar el arte del jiu jitsu brasileño. Si nunca has hecho este deporte antes, entrarás en el grupo de principiantes donde podrás
              ir aprendiendo los principios y lo más fundamental del grappling (estilo de lucha con agarres y sin golpeo).
              Aprenderás acompañado de tus compañeros a medida que irán progresando hasta llegar al nivel de clases intermedias y avanzadas.
              Spoiler: En este deporte NUNCA se deja de aprender.
            </p>
          </div>

          <div className="my-3">
            <h5 className="font-weight-bold">¿Cómo puedo empezar a entrenar?</h5>
            <p>
              Para empezar a entrenar debes inscribirte en el club a través del enlace que aparece en la página como: “Registrarme”.
              Te aparecerán una serie de preguntas que nos facilitarán tu entrada a la escuela permitiéndonos ayudarte en
              todo lo posible para tus entrenamientos. (Uniformidad, asignación de clases, detalles personales a tener en cuenta, etc…)
              También es posible el registro de forma presencial solicitando una cita previa para la inscripción.
            </p>
          </div>
          <img className="w-25 d-block mx-auto" src={home} alt="Presentación" />
        </div>
      </Page>
    </div>
  );
}

export default Home;

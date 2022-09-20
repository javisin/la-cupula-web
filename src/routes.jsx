import {
  PersonAddAlt1, Home, Schedule, School, Euro,
} from '@mui/icons-material';
import React from 'react';

export default {
  home: {
    title: 'Inicio',
    icon: <Home />,
    path: '/',
  },
  inscription: {
    title: 'Inscripción',
    icon: <PersonAddAlt1 />,
    path: '/inscripcion',
  },
  lessons: {
    title: 'Clases',
    icon: <School />,
    path: '/clases',
  },
  schedule: {
    title: 'Horario',
    icon: <Schedule />,
    path: '/horario',
  },
  prices: {
    title: 'Precios',
    icon: <Euro />,
    path: '/precios',
  },
};

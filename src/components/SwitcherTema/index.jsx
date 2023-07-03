import React from 'react';
import ThemeOn from '../../assets/img/themeOn.svg';
import ThemeOff from '../../assets/img/themeOff.svg';
import { Icone } from '../UI';

const claro = <Icone src={ThemeOn} alt="Tema Claro" />
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />

// eslint-disable-next-line import/no-anonymous-default-export
export default (({tema}) => (tema ? escuro : claro));
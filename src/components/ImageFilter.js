import React from 'react';
import alimentacao from '../assets/img/alimentacao.svg';
import outros from '../assets/img/outros.svg';
import saude from '../assets/img/saude.svg';
import transporte from '../assets/img/transporte.svg';
import utilidades from '../assets/img/utilidades.svg';
import { IconeTema } from './UI';

// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Saude: <IconeTema src={saude} alt="Saúde" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        default: <IconeTema src={outros} alt="Outro" />,
    };

    return Images[type] || Images.default;
}
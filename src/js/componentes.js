import "../css/componentes.css"
// import webpacklogo from '../assets/img/webpack-logo.png';


export const saludar = (nombre) => {
    const h1 = document.createElement('h1')
    h1.innerText = nombre;
    document.body.appendChild(h1)
};

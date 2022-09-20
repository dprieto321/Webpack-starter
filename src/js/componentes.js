import '../css/componentes.css';
// import webpagLogo from '../assets/imgs/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola, ${nombre}!`;


    document.body.append(h1);

    //IMG
    // console.log(webpagLogo);
    // const img = document.createElement('img');
    // img.src = webpagLogo;
    // document.body.append(img);

}
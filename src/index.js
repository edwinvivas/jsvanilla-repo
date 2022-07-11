import router from './routes';

//addEventListener Manejador de eventos que escucha si algo sucede 
window.addEventListener('load',router);
//  Escuchar las rutas 
window.addEventListener('hashchange', router);
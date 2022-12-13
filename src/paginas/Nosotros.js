import React from 'react';
import '../../estilos/paginas/Nosotros.css';

const Nosotros = (props) => {
    return (
        <main className='holder'>
        <div className='historia'>
            <h2>Historia</h2>
            <p>Winter es un emprendimeinto familiar, que fue creciendo desde 1989. Hoy cuenta con 10 profesores certificados, clases para todas las edades y cabañas para hospedarse en el parque.</p>
        </div>
        <div className='staff'>
             <h2>Staff</h2>
             <div className='personas'>
                <div className='laura'>
                    <img src="img/laura.jpg" alt="Laura"></img>
                    <h3>Laura Perez</h3>
                    <h4>Coordinadora general</h4>
                    <p>Encargada de organizar clases, instructora, organizadora de eventos</p>
                </div>
                <div className='lautaro'>
                    <img src="img/nosotros/lautaro.jpg" alt="Lautaro"></img>
                    <h3>Lautaro Gallardo</h3>
                    <h4>Encargado de cabañas</h4>
                    <p>Atencion al publico, coordinador de personal, manejo de proveedores</p>
                </div>
                <div className='teresa'>
                    <img src="img/teresa.jpg" alt="Teresa"></img>
                    <h3>Teresa Spadone</h3>
                    <h4>Instructora</h4>
                    <p>Campeona de sky, instructora de nivel superior, mas de 10 años de experincia</p>
                </div>
             </div>
        </div>
    </main>
    

    );
} 
export default Nosotros;
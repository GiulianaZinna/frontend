import React from 'react';
import '../../src/estilos/paginas/Novedades.css';

const Novedades = (props) => {
    return (
        <main className="holder">
        <div className="novedades">
            <h3>Promociones de clases</h3>
            <h4>2X1</h4>
            <p>Durante los meses de Julio, Agosto y Septiembre en las clases de nivel inicial podran aprender 2 personas por el precio de 1.</p>
            <h3>Restaurant</h3>
            <h4>Comidas tradicionales</h4>
            <p>10% de descuento en chivito con tarjeta roja</p>
            <h3>Cabañas</h3>
            <h4>Combo premium</h4>
            <p>Para las personas que participen de las claes y se hospeden en Winter, se les regalara un dia extra en la cabaña sin costo.</p>
        </div>
    </main>
    

    );
} 
export default Novedades;
import React from 'react';
import '../../estilos/paginas/Contacto.css';

const Contacto = (props) => {
    return (
        <main class="holder contacto">
        <div>
            <h3>Contacto Rapido</h3>
            <form action="" method="" className='formulario'>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type= "submit"
                value="Enviar"></input>
                </p>
            </form>
        </div>
        <div className="datos">
            <h3>Otros medios de comunicacion</h3>
            <ul>
                <li>Telefono: 011 333333333</li>
                <li>Email: centrowinter@winter.com</li>
                <li>Facebook:Centro Winter</li>
            </ul>

        </div>
    </main>
    

    );
} 
export default Contacto;
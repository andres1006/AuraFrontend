import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [ urlPdf , seturlPdf ] = useState([])

  useEffect(() => {
    window.fetch('http://localhost:8000/api/azure')
        .then(res => res.json())
        .then(response => {
          seturlPdf(response.data)
        })
  }, [])
  console.log(urlPdf);
  return (
    <div className="App">



      <div>
        <div>
          <h1>Logo</h1>
        </div>
        <div><a href='/'>Inicio</a></div>
        <div><a href='/'>Reportes</a></div>
        <div><a href='/'>Configuracion</a></div>
      </div>



      <div>
        <div>
          <div>Logo Hospital</div>
          <div>Usuario</div>
          <div>Hospital</div>
        </div>
        <div>
          <input placeholder='Buscar'></input>
        </div>
        <div>
          <button>Buscar</button>
        </div>
        <div>
          <a href='/'> Cerrar Sesion</a>
        </div>
      </div>



      <div>
        <form action="" method="post">
          <div>
            <div>
              <input placeholder='Label'></input>
            </div>
            <div>
              <input placeholder='Hospital'></input>
            </div>
            <div>
              <button>Consultar</button>
            </div>
          </div>


        
        <h1>Todas las pruebas</h1>
          <div>
            <table class="egt">
              <tr>
                <td>Paciente</td>
                <td>Fecha</td>
                <td></td>
              </tr>

                {
                  urlPdf.map(pdf => 
                  <tr key={urlPdf}>
                    <td>{pdf.label}</td>
                    <td>{pdf.fecha}</td>
                    <td><a href={pdf.urlPdf}>Ver</a></td>
                    </tr>)
                }
                 
            </table>
          </div>
        </form>
      </div>




  <div>
      <h1>Respuesta de un paciente</h1>

      <div>
          <div>
            <label>Label Paciente</label>
          </div>
          <div>
            <div>
              <div>
                <table class="egt">
                  <tr>
                    <td>Paciente</td>
                    <td>Fecha</td>
                    <td>Estado</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>LABEL 1</td>
                    <td>LABLE 2</td>
                    <td>LABEL 3</td>
                    <td><button>Ver</button></td>
                  </tr>
                </table>
              </div>
            </div>  
        </div>
      
        <div>
          <h1>Informacion del Log</h1>
        </div>
      </div>

    <div>
      <form action="" method="post">
        <div>
          <div>
            <input placeholder='Email'></input>
          </div>
        </div>
        <div>
          <div>
            <button>Ver pdf</button>
          </div>
          <div>
            <button>Enviar Email</button>
          </div>
        </div>
       
      </form>
    </div>
    
  </div>

  <div>
    <button>Volver</button>
  </div>



</div>
  );

}


export default App;

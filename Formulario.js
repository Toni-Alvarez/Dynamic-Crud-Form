import React, {useState} from 'react';

     function Formulario() {    
     const [inputCorreo, cambiarInputCorreo] = useState('');
     const [inputEmpresa, cambiarInputEmpresa] = useState('');
    const [inputCalle, cambiarInputCalle] = useState('');
    const [inputNumero, cambiarInputNumero] = useState('');
    const [inputColonia, cambiarInputColonia] = useState('');
    const [InputMunicipio, cambiarInputMunicipio] = useState('');
    const [InputCp, cambiarInputCp] = useState('');
    const [InputEstado, cambiarInputEstado] = useState('');
    const [formFields, setFormFields] = useState([
        {  marca: '', modelo:'', serie: '', identificacion:'', puntos:'',referencia:'', equipo:'' },
      ])
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
      }
    
      const addFields = () => {
        let object = {
          marca: '',
          modelo: '',
          serie: '',
          identificacion: '',
          puntos: '',
          referencia: '',
          equipo: ''
        }
    
        setFormFields([...formFields, object])
      }
    
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }

    // Funcion que se encargara de validar los datos y enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Comprobamos validacion del formulario ...
        // Si todo es correcto enviamos el formulario

        console.log('Formulario Enviado!');
    }

    
    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputCorreo = (e) => {
        cambiarInputCorreo(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputNombre
    const handleInputEmpresa = (e) => {
        cambiarInputEmpresa(e.target.value);
    }

    const handleInputCalle = (e) => {
        cambiarInputCalle(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputNumero = (e) => {
        cambiarInputNumero(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputColonia = (e) => {
        cambiarInputColonia(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputMunicipio = (e) => {
        cambiarInputMunicipio(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputCp = (e) => {
        cambiarInputCp(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputEstado = (e) => {
        cambiarInputEstado(e.target.value);
    }
    // Funcion que se encarga de cambiar el estado del inputCorreo

    return (
        <>   
            <form action="" onSubmit={handleSubmit} className="formulario" >
                <div class="title">INFORMACIÓN PARA EL CERTIFICADO DE CALIBRACIÓN </div>
                <br/>
                    
                <div>
                    <label htmlFor="correo">Correo electronico: </label>
                    <input
                        type="text"
                        name="correo"
                        placeholder="micorreo@gmail.com"
                        id="correo"
                        value={inputCorreo}
                        onChange={handleInputCorreo}
                    />
                </div>
                <div>
                    <label htmlFor="empresa">Empresa o razón social:</label>
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Ingrese el Nombre de su empresa o razón social"
                        id="empresa"
                        value={inputEmpresa}
                        onChange={handleInputEmpresa}
                    />
                </div>
                <h2>Dirección: </h2>
                <br/>
                <div>
                    <label htmlFor="calle">Calle:</label>
                    <input
                        type="text"
                        name="calle"
                        placeholder="Ingrese la calle de la dirección de su empresa"
                        id="calle"
                        value={inputCalle}
                        onChange={handleInputCalle}
                    />
                </div>
                <div>
                    <label htmlFor="numero">Número:</label>
                    <input
                        type="text"
                        name="numero"
                        placeholder="Ingrese el número de su dirección de empresa, ejemplo: #327"
                        id="numero"
                        value={inputNumero}
                        onChange={handleInputNumero}
                    />
                </div>
                <div>
                    <label htmlFor="colonia">Colonia:</label>
                    <input
                        type="text"
                        name="colonia"
                        placeholder="Ingrese la colonia de su empresa"
                        id="colonia"
                        value={inputColonia}
                        onChange={handleInputColonia}
                    />
                </div>
                <div>
                    <label htmlFor="municipio">Municipio:</label>
                    <input
                        type="text"
                        name="municipio"
                        placeholder="Ingrese el municipio de su empresa"
                        id="municipio"
                        value={InputMunicipio}
                        onChange={handleInputMunicipio}
                    />
                </div>
                <div>
                    <label htmlFor="cp">Código Postal:</label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="Ingrese el código postal de su empresa"
                        id="cp"
                        value={InputCp}
                        onChange={handleInputCp}
                    />
                </div>
                <div>
                    <label htmlFor="estado">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        placeholder="Ingrese el Estado de la ubicación dónde se encuentra su empresa"
                        id="estado"
                        value={InputEstado}
                        onChange={handleInputEstado}
                    />
                </div>
                <h2>Agregar Instrumentos </h2>
                <br/>
                <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='equipo'
                placeholder='Equipo o Instrumento'
                onChange={event => handleFormChange(event, index)}
                value={form.equipo}
              />
              <input
                name='marca'
                placeholder='Marca'
                onChange={event => handleFormChange(event, index)}
                value={form.marca}
              />
              <input
                name='modelo'
                placeholder='Modelo'
                onChange={event => handleFormChange(event, index)}
                value={form.modelo}
              />
              <input
                name='serie'
                placeholder='Serie'
                onChange={event => handleFormChange(event, index)}
                value={form.serie}
              />
              <input
                name='identificacion'
                placeholder='No. De inventario ó identificación'
                onChange={event => handleFormChange(event, index)}
                value={form.identificacion}
              />
              <input
                name='puntos'
                placeholder='Puntos a calibrar'
                onChange={event => handleFormChange(event, index)}
                value={form.puntos}
              />
              <input
                name='referencia'
                placeholder='Referencia con la que declarará conformidad'
                onChange={event => handleFormChange(event, index)}
                value={form.referencia}
               />
              <button onClick={() => removeFields(index)}>Eliminar</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Agregar Nuevo Instrumento.</button>
    </div>
                
                
                <button type="submit">Enviar</button>
            </form> 
        
       </>
    );
}
 
export default Formulario;

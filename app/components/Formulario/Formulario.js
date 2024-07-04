import './Formulario.css';


function Formulario({setCitas, citas, name, name1, fecha, hora, sintomas, tipo, tipo1}) {

    let ir;
    
    const crearCita = (e) => {
        e.preventDefault();
        const confirmBoton = window.confirm('¿Deseas agregar la cita?')
        if(confirmBoton)
        {
            setCitas([
                ...citas,
                {
                    id: Date.now(),
                    nombre: e.target.nombre.value,
                    nombreDueño: e.target.nombreDueño.value,
                    fecha: e.target.fecha.value,
                    hora: e.target.hora.value,
                    sintomas: e.target.sintomas.value
                }
            ])
            e.target.reset();
        }
        
    }
   
    if(tipo==='Date'){
        ir = crearCita
    }

    return (
        <form name="form" onSubmit={ir}>
            <label>{name}</label>
            <input type="text" name="nombre" placeholder="Nombre mascota" required></input>
            <label>{name1}</label>
            <input type="text" name="nombreDueño" resource='' placeholder="Nombre dueño de la mascota" required></input>
            <label>{fecha}</label>
            <input type={tipo} name="fecha" required></input>
            <label>{hora}</label>
            <input type={tipo1} name="hora" required></input>
            <label>{sintomas}</label>
            <textarea name="sintomas" required></textarea>
            <button type="submit">AGREGAR CITA</button>
        </form>
        
    )

}


export default Formulario;
import { useState } from "react";
import { Mensaje } from "./Mensaje";

export const NewBudget = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (!presupuesto || presupuesto < 0) {
            setMensaje('Presupuesto no valido')

            return
        }

        setMensaje('')

        setIsValidPresupuesto(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form
                className='formulario'
                onSubmit={handlePresupuesto}
            >
                <div className='campo'>
                    <label>Definir Presupuesto</label>

                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value='Añadir' />

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

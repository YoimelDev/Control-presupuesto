import React from 'react'
import { ControlPresupuesto } from './ControlPresupuesto'
import { NewBudget } from './NewBudget'

export const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    gastos,
    setGastos
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto
                ?
                (<ControlPresupuesto
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />)
                :
                (<NewBudget
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />)
            }

        </header>
    )
}

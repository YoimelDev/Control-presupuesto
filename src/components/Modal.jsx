import CerrarBtn from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar button"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        type="text"
                        placeholder='Añade el nombre del gasto'
                        name=""
                        id=""
                    />
                </div>
            </form>
        </div>
    )
}

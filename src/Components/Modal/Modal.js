import React from 'react'
import { StyledModal } from './Modal.styles';


const Modal = ({showModal, closeModal, children}) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    return (
        <StyledModal>
         <div className={showHideClassName}>
            <section className="modal-main">
            {children}
            <button type="button" onClick={closeModal}>
                Close
            </button>
            </section>
        </div>
      </StyledModal>
    )
}

export default Modal
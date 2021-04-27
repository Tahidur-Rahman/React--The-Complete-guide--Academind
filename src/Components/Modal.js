import React from 'react'
import './Modal.css'

function Modal({modalText,closeModal}) {
    return (
        <div className="modal">
        <div className="modal-content">
        <span className="close" onClick={() =>closeModal(false)}>&times;</span>
        <p>{modalText}</p>
      </div>
      </div>
    )
}

export default Modal

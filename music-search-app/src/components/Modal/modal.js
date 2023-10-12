import React from 'react';

import './modal.css';

import { AiOutlineCloseCircle } from 'react-icons/ai';

function Modal({ setIsModalOpen, children }) {
  
  return (
    <>
      <div className="modal-content card my-5" style={{maxWidth: 360 + 'px'}}>
          <div className="card-body">
              <div className="content-align">
                  <button className="close" onClick={() => setIsModalOpen(false)}><AiOutlineCloseCircle /></button>
                  <span>{children}</span>
                  {/* <audio src="" autoPlay controls></audio> */}
              </div>
          </div>
      </div>
    </>
  );
}

export default Modal;
import React from 'react';

import './modal.css';

import { AiOutlineCloseCircle } from 'react-icons/ai';

function Modal({ setIsModalOpen, children, setAudioSrc }) {
  
  return (
    <>
      <div className="modal-content card my-5" style={{maxWidth: 360 + 'px'}}>
          <div className="card-body">
              <div className="content-align">
                  <button className="close" onClick={() => {
                    setIsModalOpen(false);
                    setAudioSrc('');
                  }}><AiOutlineCloseCircle /></button>
                  <span>{children}</span>
              </div>
          </div>
      </div>
    </>
  );
}

export default Modal;
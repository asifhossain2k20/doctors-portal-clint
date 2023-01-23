import React from "react";

const ConformationModal = ({ handleDeleteDoctor, data, closeModal,deleteBtn,message }) => {
  return (
    <div>
      <input type="checkbox" id="conformation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{message}</h3>
          <p className="py-4">{data.name}</p>
          <div className="modal-action">
            <label
              onClick={()=>handleDeleteDoctor(data)}
              htmlFor="conformation-modal"
              className="btn"
            >
              {deleteBtn}
            </label>
            <button className="btn btn-outline" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationModal;

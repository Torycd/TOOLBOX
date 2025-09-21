import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalHelper({ children }) {
  const [showModal, setShowModal] = useState(false);
//   const handleModal = () => {
//     setShowModal(true);
//   };
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      className="!w-[90%] !max-w-md !mx-auto outline-none block"
      overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center"
    >
      {children}
    </Modal>
  );
}

export default ModalHelper;

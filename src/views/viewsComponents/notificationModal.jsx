import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { Link } from "react-router-dom";

const NotificationModal = ({
  showModal,
  toggleModal,
  title,
  message,
  pathname
}) => {
  return (
    <div>
      <Modal
        isOpen={showModal}
        // toggle={toggleModalClassic} //with this, the modal can be cancel by clicking anywhere in the website
        className="modal-notice text-center"
      >
        <ModalHeader className="justify-content-center" toggle={toggleModal}>
          {title}
        </ModalHeader>
        <ModalBody>
          <p />
          <p>{message}</p>
        </ModalBody>
        <ModalFooter className="justify-content-center">
          <Link to={pathname ? pathname : undefined}>
            <Button color="info" className="btn-round" onClick={toggleModal}>
              OK
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};

NotificationModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  pathname: PropTypes.string
};

export default NotificationModal;

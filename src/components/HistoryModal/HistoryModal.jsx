import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function HistoryModal(props) {
  const { showHistoryModal, setShowHistoryModal } = props;

  const handleClose = () => setShowHistoryModal(false);

  return (
    <>
      <Modal show={showHistoryModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Click History</Modal.Title>
        </Modal.Header>
        <Modal.Body>TBD</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowHistoryModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HistoryModal;

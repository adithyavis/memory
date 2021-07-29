import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useCards } from 'providers/CardsProvider';

function HistoryModal(props) {
  const { showHistoryModal, setShowHistoryModal } = props;

  const { cardsHistory } = useCards();

  const handleClose = () => setShowHistoryModal(false);

  return (
    <>
      <Modal show={showHistoryModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Card History</Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-history-body">
          {cardsHistory.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Modal.Body>
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

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useStateValue } from '../../StateProvider';

const Delete = () => {
  const [{ deleteModal, id }, dispatch] = useStateValue();

  const deleteBtn = () => {
    dispatch({
      type: 'DELETE_USER',
      id,
    });
  };

  return (
    <Modal show={deleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE' })}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Are you sure you want to delete the user</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={() => dispatch({ type: 'CLOSE_DELETE' })}
        >
          Cancel
        </Button>
        <Button variant='danger' onClick={deleteBtn}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Delete;

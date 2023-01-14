import React, { useState, useEffect } from 'react';
import './ModalCont.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useStateValue } from '../../StateProvider';

const ModalCont = ({ modal, user }) => {
  const [, dispatch] = useStateValue();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setWebsite(user.website);
  }, [user]);

  const updateBtn = () => {
    dispatch({
      type: 'UPDATE_USER',
      id: user.id,
      name: name,
      email: email,
      phone: phone,
      website: website,
    });
  };

  return (
    <Modal show={modal} onHide={() => dispatch({ type: 'CLOSE_MODAL' })}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='p-4'>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label column sm={2}>
              <span style={{ color: 'red' }}>*</span>
              Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3'>
            <Form.Label column sm={2}>
              <span style={{ color: 'red' }}>*</span>
              Email:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3'>
            <Form.Label column sm={2}>
              <span style={{ color: 'red' }}>*</span>
              Phone:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type='text'
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3'>
            <Form.Label column sm={2}>
              <span style={{ color: 'red' }}>*</span>
              Website:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type='text'
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          Cancel
        </Button>
        <Button variant='primary' onClick={updateBtn}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCont;

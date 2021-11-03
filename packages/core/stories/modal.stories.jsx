import React, { useState } from 'react';

import { Modal, Button } from '../src/components';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {!showModal && <Button onClick={() => toggleModal()}>Open Modal</Button>}

      {showModal && (
        <Modal maxWidth="450px">
          <Modal.Title>Lorem Ipsum</Modal.Title>
          <Modal.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500.
          </Modal.Content>
          <Modal.Footer>
            <Button skin="primary" style={{ marginRight: 10 }}>
              Ok
            </Button>
            <Button skin="danger" onClick={() => closeModal()}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

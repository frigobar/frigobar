import React from 'react';
import { render } from '../../../testUtils';

import Modal from './Modal';
import Button from '../Button';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    const Component = () => (
      <Modal maxWidth="450px">
        <Modal.Title>Lorem Ipsum</Modal.Title>
        <Modal.Content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500.
        </Modal.Content>
        <Modal.Footer>
          <Button skin="primary" style={{ marginRight: 10 }}>
            Ok
          </Button>
          <Button skin="danger">Fechar</Button>
        </Modal.Footer>
      </Modal>
    );

    it('should match snapshot', () => {
      const { container } = render(<Component />);
      expect(container).toMatchSnapshot();
    });
  });
});

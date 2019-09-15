import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components';

storiesOf('Button', module)
  .add('Neutral', () => <Button>Hello Button </Button>)
  .add('Primary', () => <Button skin="primary">Primary Button</Button>)
  .add('Info', () => <Button skin="info">Info Button</Button>)
  .add('Success', () => <Button skin="success">Success Button</Button>)
  .add('Warning', () => <Button skin="warning">Warning Button</Button>)
  .add('Danger', () => <Button skin="danger">Danger Button</Button>);

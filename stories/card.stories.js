import React from 'react';

import { storiesOf } from '@storybook/react';
import { Card } from '../src/components';

storiesOf('Card', module)
  .add('Default', () => <Card>Card</Card>);

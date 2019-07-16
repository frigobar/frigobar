import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('História do Button', module)
  .add('Com um texto de Hello Button', () => (
    <Button onClick={action('HelloButton clicked')}>Hello Button</Button>
  ))
  .add('Com alguns emojis', () => (
    <Button onClick={action('EmojiButton clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

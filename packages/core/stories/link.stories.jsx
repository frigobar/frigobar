import React from 'react';

import { Link } from '../src/components';

export default {
  title: 'Link',
  component: Link,
};

export const Default = () => (
  <Link href="/?path=/story/link--default">Simple Link</Link>
);

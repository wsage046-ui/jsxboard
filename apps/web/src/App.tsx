import React from 'react';
import { Button } from '@my-monorepo/ui-lib';
import { capitalize } from '@my-monorepo/utils';

export const App: React.FC = () => {
  const title = capitalize('welcome to my app');

  return (
    <div>
      <h1>{title}</h1>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

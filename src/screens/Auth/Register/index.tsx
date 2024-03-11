import * as React from 'react';
import {Text} from 'react-native';

export default React.memo(() => {
  const getLogMessage = (message: string) => `## Regitser ${message}`;
  return (
    <>
      <Text>name</Text>
    </>
  );
});

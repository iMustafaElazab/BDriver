import * as React from 'react';
import {Text} from 'react-native';

export default React.memo(() => {
  const getLogMessage = (message: string) => `## Forget ${message}`;
  return (
    <>
      <Text>name</Text>
    </>
  );
});

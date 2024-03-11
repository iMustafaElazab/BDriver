import * as React from 'react';
import Contain from './contain';
import styles from './style';
import Screen from 'src/components/Screen';
import ScrollContainer from 'src/components/ScrollContainer';

export default React.memo(() => (
  <Screen>
    <ScrollContainer
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Contain />
    </ScrollContainer>
  </Screen>
));

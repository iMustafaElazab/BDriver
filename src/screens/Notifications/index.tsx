import * as React from 'react';
import Header from './Header';
import NotificationsList from './NotificationsList';
import {Screen} from 'src/components';

export default React.memo(() => (
  <Screen>
    <Header />
    <NotificationsList />
  </Screen>
));

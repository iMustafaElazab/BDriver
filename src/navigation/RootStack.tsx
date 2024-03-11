import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import type {RootStackParamList} from 'src/navigation';

// Screens.
import {Splash, Notifications} from 'src/screens';
import ForgetPassword from 'src/screens/Auth/ForgetPassword';
import Login from 'src/screens/Auth/Login';
import Register from 'src/screens/Auth/Register';

// Navigators.
// TODO: Add navigators imports here.

// Modals.
// TODO: Add modals imports here.

const stack = createNativeStackNavigator<RootStackParamList>();

export default React.memo(() => (
  <stack.Navigator
    id="RootStack"
    initialRouteName="splash"
    screenOptions={{headerShown: false}}>
    {/* Screens */}
    <stack.Screen name="splash" component={Splash} />
    <stack.Screen name="login" component={Login} />
    <stack.Screen name="register" component={Register} />
    <stack.Screen name="forgetPassword" component={ForgetPassword} />
    <stack.Screen name="notifications" component={Notifications} />

    {/* Navigators */}
    {/* TODO: Add nested navigators here. */}

    {/* Modals */}
    <stack.Group
      screenOptions={{
        presentation: 'transparentModal',
      }}>
      <>{/* TODO: Add modals screens here. */}</>
    </stack.Group>
  </stack.Navigator>
));

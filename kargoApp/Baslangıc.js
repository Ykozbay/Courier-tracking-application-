import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import App from './App.js';
import LoginPage from './src/pages/login-page/login-page';
import SignPage from './src/pages/login-page/signup-page';
import userpage from './src/pages/hesap-page/user-page'
import delivererpage from './src/pages/hesap-page/deliverer-page'
const AppNavigator = createStackNavigator(
    {
        App: {screen : App},
        LoginPage: {screen : LoginPage},
        SignPage: {screen : SignPage},
        userpage:{screen :userpage},
        delivererpage:{screen :delivererpage}
    },
    {
        initialRouteName:'App',
        headerMode : 'none'
    }
);

export default createAppContainer(AppNavigator);
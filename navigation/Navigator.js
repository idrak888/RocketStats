import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainMenu from '../screens/MainMenu';
import Asteroids from '../screens/Asteroids';
import APOD from '../screens/APOD';
import RoverPhotos from '../screens/RoverPhotos';

const Navigator = createStackNavigator({
    MainMenu,
    Asteroids,
    APOD,
    RoverPhotos
}, {
    initialRouteName: 'MainMenu',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E5BF0A',
            shadowColor: 'transparent'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
});

export default createAppContainer(Navigator);
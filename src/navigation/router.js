import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from "../components/HomeScreen";
import MapScreen from "../components/MapScreen";

const Router = createStackNavigator({
    Home: { screen: HomeScreen },
    Map: { screen: MapScreen },
});

const MainApp = createAppContainer(Router);

export default MainApp;
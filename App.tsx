import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetailScreen} />
        <Stack.Screen name="SeatBooking" component={SeatBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

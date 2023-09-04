import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import AppStackNavigator from './src/navigation/AppStackNavigator';

// import Database from './src/database';

export default function App() {
  useEffect(() => {
    const connect = async () => {
      try {
        // const datasource = await Database.connect();
        /*
         *TODO: call only in the first launch of the app
         */
        // await datasource.synchronize(true);
      } catch (error) {
        console.log(error);
      }
    };
    connect();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <AppStackNavigator />
    </NavigationContainer>
  );
}

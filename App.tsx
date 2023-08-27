import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
  useEffect(() => {
    /* const connect = async () => {
      try {
        const datasource = await Database.connect();
        TODO: call only in the first launch of the app
        await datasource.synchronize(true);
      } catch (error) {
        console.log(error);
      }
    };
    connect();
    */
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

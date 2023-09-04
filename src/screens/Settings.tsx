import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {HomeTabScreenProps} from '../navigation/types';

const SettingsScreen: React.FC<HomeTabScreenProps<'Settings'>> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

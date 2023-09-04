import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {HomeTabScreenProps} from '../navigation/types';

const NotificationScreen: React.FC<
  HomeTabScreenProps<'Notification'>
> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

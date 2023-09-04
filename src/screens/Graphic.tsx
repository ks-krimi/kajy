import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {HomeTabScreenProps} from '../navigation/types';

const GraphicScreen: React.FC<HomeTabScreenProps<'Graphic'>> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Graphic Screen</Text>
    </View>
  );
};

export default GraphicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

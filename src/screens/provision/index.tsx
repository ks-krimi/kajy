import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {HomeTabScreenProps} from '../../navigation/types';

const ProvisionScreen: React.FC<HomeTabScreenProps<'Provision'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text>Provision Screen</Text>
      <Button
        title="Go to New Provision Screen"
        onPress={() => {
          navigation.navigate('NewProvision');
        }}
      />
    </View>
  );
};

export default ProvisionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

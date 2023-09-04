import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {RootStackScreenProps} from '../../navigation/types';

const NewProvisionScreen: React.FC<RootStackScreenProps<'NewProvision'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text>New Provision Screen</Text>
      <Button
        title="Go to Provision Screen"
        onPress={() => {
          navigation.navigate('HomeNavigator', {screen: 'Provision'});
        }}
      />
    </View>
  );
};

export default NewProvisionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

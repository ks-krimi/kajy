import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {RootStackScreenProps} from '../../navigation/types';

const NewBudgetScreen: React.FC<RootStackScreenProps<'NewBudget'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text>New Budget Screen</Text>
      <Button
        title="Go to Budget Screen"
        onPress={() => {
          navigation.navigate('HomeNavigator', {screen: 'Budget'});
        }}
      />
    </View>
  );
};

export default NewBudgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

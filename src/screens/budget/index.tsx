import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {HomeTabScreenProps} from '../../navigation/types';

const BudgetScreen: React.FC<HomeTabScreenProps<'Budget'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Budget Screen</Text>
      <Button
        title="Go to New Budget Screen"
        onPress={() => {
          navigation.navigate('NewBudget');
        }}
      />
    </View>
  );
};

export default BudgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

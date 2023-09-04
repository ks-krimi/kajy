import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import NewBudgetScreen from '../screens/budget/NewBudget';
import NewProvisionScreen from '../screens/provision/NewProvision';
import AppTabNavigator from './AppTabNavigator';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="HomeNavigator" component={AppTabNavigator} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name="NewBudget" component={NewBudgetScreen} />
        <RootStack.Screen name="NewProvision" component={NewProvisionScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default AppNavigator;

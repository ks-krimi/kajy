import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import GraphicScreen from '../screens/Graphic';
import NotificationScreen from '../screens/Notification';
import SettingsScreen from '../screens/Settings';
import BudgetScreen from '../screens/budget';
import ProvisionScreen from '../screens/provision';
import {HomeTabParamList} from './types';

const TabNavigator = createBottomTabNavigator<HomeTabParamList>();

const AppTabs: React.FC = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Budget" component={BudgetScreen} />
      <TabNavigator.Screen name="Provision" component={ProvisionScreen} />
      <TabNavigator.Screen name="Graphic" component={GraphicScreen} />
      <TabNavigator.Screen name="Notification" component={NotificationScreen} />
      <TabNavigator.Screen name="Settings" component={SettingsScreen} />
    </TabNavigator.Navigator>
  );
};

export default AppTabs;

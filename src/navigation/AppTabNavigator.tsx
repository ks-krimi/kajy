import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {
  BudgetIcon,
  GraphicIcon,
  NotificationIcon,
  ProvisionIcon,
  SettingsIcon,
} from '../components/tabsIcons';
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
      <TabNavigator.Screen
        name="Budget"
        component={BudgetScreen}
        options={{tabBarIcon: BudgetIcon}}
      />
      <TabNavigator.Screen
        name="Provision"
        component={ProvisionScreen}
        options={{tabBarIcon: ProvisionIcon}}
      />
      <TabNavigator.Screen
        name="Graphic"
        component={GraphicScreen}
        options={{tabBarIcon: GraphicIcon}}
      />
      <TabNavigator.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: NotificationIcon,
          tabBarBadge: 3,
        }}
      />
      <TabNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarIcon: SettingsIcon}}
      />
    </TabNavigator.Navigator>
  );
};

export default AppTabs;

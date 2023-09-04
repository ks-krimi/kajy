import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export const BudgetIcon: React.FC<IconProps> = ({focused, color, size}) => {
  return (
    <Ionicons
      name={focused ? 'wallet' : 'wallet-outline'}
      color={color}
      size={focused ? size * 1.2 : size}
    />
  );
};

export const ProvisionIcon: React.FC<IconProps> = ({focused, color, size}) => {
  return (
    <Ionicons
      name={focused ? 'fast-food' : 'fast-food-outline'}
      color={color}
      size={focused ? size * 1.2 : size}
    />
  );
};

export const GraphicIcon: React.FC<IconProps> = ({focused, color, size}) => {
  return (
    <Ionicons
      name={focused ? 'pie-chart' : 'pie-chart-outline'}
      color={color}
      size={focused ? size * 1.2 : size}
    />
  );
};

export const NotificationIcon: React.FC<IconProps> = ({
  focused,
  color,
  size,
}) => {
  return (
    <Ionicons
      name={focused ? 'notifications' : 'notifications-outline'}
      color={color}
      size={focused ? size * 1.2 : size}
    />
  );
};

export const SettingsIcon: React.FC<IconProps> = ({focused, color, size}) => {
  return (
    <Ionicons
      name={focused ? 'settings' : 'settings-outline'}
      color={color}
      size={focused ? size * 1.2 : size}
    />
  );
};

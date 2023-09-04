import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

/**
 * Define the types for each route param list.
 */
export type RootStackParamList = {
  HomeNavigator: NavigatorScreenParams<HomeTabParamList>;
  NewBudget: undefined;
  NewProvision: undefined;
};

/**
 * Define the types for each route prop.
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/**
 * Define the types for each tab param list.
 */
export type HomeTabParamList = {
  Budget: undefined;
  Provision: undefined;
  Graphic: undefined;
  Notification: undefined;
  Settings: undefined;
};

/**
 * Define the types for each tab prop.
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

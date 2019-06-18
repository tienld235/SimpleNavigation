import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import { Platform } from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';
import BurgerMenu from '../components/BurgerMenu';

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, StackViewTransitionConfigs, createAppContainer } from 'react-navigation';

const IOS_MODAL_ROUTES = ["OptionsScreen"];
let DynamicModalTransition = (transitionProps, prevTransitionProps) => {
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        IOS_MODAL_ROUTES.some(
            screenName =>
                screenName === transitionProps.scene.route.routeName || (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
        )
    )
}

const HomeStack = createStackNavigator({ DetailScreen, HomeScreen, OptionsScreen }, { transitionConfig: DynamicModalTransition, initialRouteName: "HomeScreen" });

HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" type="ionicon" color={tintColor} />
    ),
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={tintColor} />
}

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ tintColor }) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
  drawerLabel: "Settings",
  drawerIcon: ({ tintColor }) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
    android: createDrawerNavigator({ HomeStack, SettingsStack }, {contentComponent: BurgerMenu})
})

const RootSwitch = createSwitchNavigator({ LoadingScreen, MainNavigator }, { initialRouteName: "MainNavigator" });

export default createAppContainer(RootSwitch);
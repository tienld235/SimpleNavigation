import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import LoginScreen from '../screens/Login';
import ResetScreen from '../screens/Reset';
import RegisterScreen from '../screens/Register';

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

const HomeStack = createStackNavigator({ DetailScreen, HomeScreen, OptionsScreen },
    { transitionConfig: DynamicModalTransition, initialRouteName: "HomeScreen" }
);

HomeStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }
    return {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" type="ionicon" color={tintColor} />
        ),
        drawerLockMode,
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={tintColor} />
    }
}

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ tintColor }) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

const LoginStack = createStackNavigator({ LoginScreen, ResetScreen },
    { initialRouteName: 'LoginScreen'}
);
LoginStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarLabel: "Login",
        tabBarIcon: ({ tintColor }) => {
            let iconName = Platform.select({ ios: "ios-log-in", android: "md-log-in" });
            return <Icon name={iconName} type="ionicon" color={tintColor} />;
        },
        tabBarVisible
    };
};

const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen }, {tabBarOptions:{activeTintColor: '#1BA957'}});

const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
    android: createDrawerNavigator({ HomeStack, SettingsStack }, { contentComponent: BurgerMenu })
})

const RootSwitch = createSwitchNavigator({ LoadingScreen, MainNavigator, AuthTabs }, { initialRouteName: "AuthTabs" });

export default createAppContainer(RootSwitch);
import {
  useReducer,
  useEffect,
  useMemo,
  createContext,
  useState,
  useC,
} from 'react';
import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainStackNavigator from './app/config/navigation/MainStackNavigator';
import Label from './app/config/label';
import AsyncStorage from '@react-native-community/async-storage';
import Login from './app/views/login/LoginView';
import Splash from './app/views/splash_screen/splash';
import {transition_config} from './app/config/transition_config';
export const AuthContext = React.createContext();

const Stack = createStackNavigator();

export default function App({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      setTimeout(async () => {
        try {
          userToken = await AsyncStorage.getItem(Label.user_login_token);
        } catch (e) {
          // Restoring token failed
        }
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      }, 2000);

      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        // console.log("DATA ", data);

        await AsyncStorage.setItem(Label.user_login_token, data.userToken);
        await AsyncStorage.setItem(Label.user_type, data.usertype);
        await AsyncStorage.setItem(Label.user_no_hp, data.numberPhone);

        dispatch({type: 'SIGN_IN', token: data.userToken});
      },
      signOut: () => {
        AsyncStorage.removeItem(Label.user_login_token);
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  if (state.isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {state.userToken == null ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            // User is signed in
            <Stack.Screen
              name="MainStackNavigator"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec: {
                  open: transition_config,
                  close: transition_config,
                },
              }}
              component={MainStackNavigator}
            />
          )}
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          {/* <Stack.Screen name="IntroScreen" component={IntroNavigator}/> */}
          {/* <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

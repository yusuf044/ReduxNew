import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Image} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const icons = {
  home: require('../assets/home.png'),
  settings: require('../assets/settings.png'),
  profile: require('../assets/profile.png'),
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.home}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.settings}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.profile}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabs;

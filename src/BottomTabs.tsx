import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './screens/Products';
import Favourites from './screens/Favourites';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import CustomBottomTab from './components/BottomTabs/CustomBottomTab';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={props=><CustomBottomTab {...props}/>}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Products"
          component={Products}
          options={{tabBarLabel: 'Products'}}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{tabBarLabel: 'Favourites'}}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{tabBarLabel: 'Cart'}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{tabBarLabel: 'Profile'}}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

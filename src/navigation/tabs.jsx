import CartNavigator from "./cart";
import Ionicons from '@expo/vector-icons/Ionicons'
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { colors } from "../constants/theme/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";

const BottomTab=createBottomTabNavigator();

const TabNavigator=()=>(
    <BottomTab.Navigator 
    initialRouteName="Shop"
    screenOptions={{
        headerShown:false,
        tabBarLabelStyle:{
            fontFamily: 'Raleway-Regular',
            fontSize:12,
        },
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor:colors.secondary
    }}>
        <BottomTab.Screen 
            name ="Shop" 
            component={ShopNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name={focused ? 'home'  : 'home-outline'}
                        size={22}
                        color={colors.primary}
                    />
                )
            }} 
            />
        <BottomTab.Screen 
            name ="Orders" 
            component={OrdersNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name={focused ? 'file-tray'  : 'file-tray-outline'}
                        size={22}
                        color={colors.primary}
                    />
                )
            }}
            />
        <BottomTab.Screen 
            name ="Cart" 
            component={CartNavigator}
            options={{
                tabBarIcon:({focused}) => (
                    <Ionicons
                        name={focused ? 'cart'  : 'cart-outline'}
                        size={22}
                        color={colors.primary}
                    />
                )
            }} 
            />
    



    </BottomTab.Navigator>
)

export default TabNavigator;
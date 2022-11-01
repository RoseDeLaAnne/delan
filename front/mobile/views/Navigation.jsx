import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginView } from "../views/auth/LoginView";

import { ItemsView } from "../views/main/ItemsView";
import { ItemView } from "../views/main/ItemView";

import { CartView } from "../views/main/CartView";
import { FavouritesView } from "../views/main/FavouritesView";
import { SettingsView } from "../views/main/SettingsView";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="Items" component={ItemsView} />
                <Stack.Screen name="Item" component={ItemView} />
                <Stack.Screen name="Cart" component={CartView} />
                <Stack.Screen name="Favourites" component={FavouritesView} />
                <Stack.Screen name="Settings" component={SettingsView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

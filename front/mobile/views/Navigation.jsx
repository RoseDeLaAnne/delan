import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ItemsView } from "../views/main/ItemsView";
import { ItemView } from "../views/main/ItemView";
import { CartView } from "../views/main/CartView";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Items" component={ItemsView} />
                <Stack.Screen name="Item" component={ItemView} />
                <Stack.Screen name="Cart" component={CartView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

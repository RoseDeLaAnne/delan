import * as React from "react";

import { useNavigation } from "@react-navigation/native";

import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import Svg, { Path } from "react-native-svg";

import axios from "axios";

import { HeaderComp } from "../../components/main/HeaderComp";

import { CustomCheckbox } from "../../components/UI/main/CustomCheckbox";

export const SettingsView = () => {
    const navigation = useNavigation();

    const [items, setItems] = React.useState([]);

    const getData = () => {
        axios
            .get(`https://6356dd959243cf412f8f3208.mockapi.io/items`)
            .then(({ data }) => {
                setItems(data);
            })
            .catch((err) => {
                console.log("Error");
            });
    };

    React.useEffect(() => {
        // getData();
    }, []);

    const [fontsLoaded] = useFonts({
        "JosefinSlab-Thin": require("../../assets/fonts/JosefinSlab-Thin.ttf"),
        "JosefinSlab-ExtraLight": require("../../assets/fonts/JosefinSlab-ExtraLight.ttf"),
        "JosefinSlab-Light": require("../../assets/fonts/JosefinSlab-Light.ttf"),
        "JosefinSlab-Regular": require("../../assets/fonts/JosefinSlab-Regular.ttf"),
        "JosefinSlab-Medium": require("../../assets/fonts/JosefinSlab-Medium.ttf"),
        "JosefinSlab-SemiBold": require("../../assets/fonts/JosefinSlab-SemiBold.ttf"),
        "JosefinSlab-Bold": require("../../assets/fonts/JosefinSlab-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp viewName="settings" />

            <View style={styles.main}>
                <View style={styles.main__box1}>
                    <View style={styles.main__box11}>
                        <Text style={styles.title}>Settings</Text>
                    </View>

                    <View style={styles.main__box12}>
                        <View style={styles.main__box121}>
                            <View style={styles.itemIcon}>
                                <Svg width={24} height={24} viewBox="0 0 24 24">
                                    <Path
                                        d="M.88 14.09 4.75 18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L2.61 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24Z"
                                        fill="#8a817c"
                                    />
                                </Svg>
                            </View>
                            <Text style={styles.itemTitle}>Notifications</Text>
                        </View>

                        <View style={styles.main__item}>
                            <Text style={styles.main__itemTitle}>Sales</Text>
                            <CustomCheckbox isSelected={true} />
                        </View>
                        <View style={styles.main__item}>
                            <Text style={styles.main__itemTitle}>
                                New Arrivals
                            </Text>
                            <CustomCheckbox isSelected={true} />
                        </View>
                    </View>

                    <View style={styles.main__box12}>
                        <View style={styles.main__box121}>
                            <View style={styles.itemIcon}>
                                <Svg width={24} height={24} viewBox="0 0 24 24">
                                    <Path
                                        d="M.88 14.09 4.75 18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L2.61 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24Z"
                                        fill="#8a817c"
                                    />
                                </Svg>
                            </View>
                            <Text style={styles.itemTitle}>Accessibility</Text>
                        </View>

                        <View style={styles.main__item}>
                            <Text style={styles.main__itemTitle}>
                                Left-handed mode
                            </Text>
                            <CustomCheckbox isSelected={false} />
                        </View>
                        <View style={styles.main__item}>
                            <Text style={styles.main__itemTitle}>
                                Colour Scheme
                            </Text>
                            {/* light/dark */}
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingBottom: 32,

        flex: 1,
    },
    main: {
        flex: 1,
        flexDirection: "column",
    },
    main__box11: {
        marginBottom: 48,
        paddingRight: 32,
        paddingLeft: 32,

        flexDirection: "row",

        alignItems: "center",
    },
    main__box12: {
        marginBottom: 32,
        paddingRight: 32,
        paddingLeft: 32,
    },
    main__box121: {
        marginBottom: 32,

        flexDirection: "row",

        alignItems: "center",
    },
    title: {
        marginRight: 10,

        fontFamily: "JosefinSlab-Bold",
        fontSize: 48,
    },
    itemIcon: {
        marginRight: 16,
    },
    itemTitle: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 32,

        color: "#8a817c",
    },
    main__item: {
        marginBottom: 24,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    main__itemTitle: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 26,
    },
});

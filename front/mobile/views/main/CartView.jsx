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

import axios from "axios";

import { HeaderComp } from "../../components/main/HeaderComp";

import Svg, { Path } from "react-native-svg";

export const CartView = () => {
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
            <HeaderComp viewName="cart" />

            <View style={styles.main}>
                <View>
                    <Text>My Cart (2)</Text>
                </View>

                <View style={styles.items}>
                    <View style={styles.items__item}>
                        <View style={styles.items__itemBox1}>
                            <View style={styles.items__itemBox11}>
                                <TouchableWithoutFeedback
                                    onPress={() =>
                                        navigation.navigate("Item", {
                                            id: 2,
                                        })
                                    }
                                >
                                    <Image
                                        style={styles.items__itemImage}
                                        source={require("../../assets/images/item-1.jpg")}
                                    />
                                </TouchableWithoutFeedback>

                                <View style={styles.items__itemBox111}>
                                    <Svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 512 512"
                                    >
                                        <Path
                                            d="M480 288H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32s-14.327 32-32 32z"
                                            fill="#000"
                                        />
                                    </Svg>
                                    <Text style={styles.items__itemQuantity}>
                                        1
                                    </Text>
                                    <Svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 512 512"
                                    >
                                        <Path
                                            d="M480 224H288V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v192H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h192v192c0 17.673 14.327 32 32 32s32-14.327 32-32V288h192c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                                            fill="#000"
                                        />
                                    </Svg>
                                </View>
                                <View style={styles.items__itemBox112}>
                                    <Text style={styles.items__itemSize}>
                                        XL
                                    </Text>
                                    <Image style={styles.items__itemColor} source={require('../../assets/icons/color-1.png')} />
                                </View>
                            </View>
                            <View style={styles.items__itemBox12}>
                                <Text style={styles.items__itemName}>
                                    UO Rose Icon SweatPant
                                </Text>
                                <Text style={styles.items__itemPrice}>
                                    $59.99
                                </Text>
                            </View>
                        </View>
                        <View style={styles.items__itemBox2}>
                            {/* recycle bin here (svg) */}
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Total Price (2 items)</Text>
                    <Text>$119.98</Text>
                </View>
                <View>
                    <View>{/* select dollar or euro */}</View>
                    {/* button checkout here with svg */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
    },
    items: {
        paddingRight: 16,
        paddingLeft: 16,
    },
    items__item: {
        marginBottom: 32,
    },
    items__item_lastChild: {
        marginBottom: 0,
    },
    items__itemBox11: {
        marginBottom: 24,

        position: "relative",
    },
    items__itemBox111: {
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,

        position: "absolute",

        bottom: 16,
        left: 16,

        flexDirection: "row",

        alignItems: "center",

        backgroundColor: "#fff",

        borderRadius: 10,
    },
    items__itemBox112: {
        position: "absolute",

        right: 16,
        bottom: 16,

        flexDirection: "column"
    },
    items__itemBox12: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    items__itemImage: {
        width: "100%",
        height: 152,

        borderRadius: 20,
    },
    items__itemQuantity: {
        marginRight: 24,
        marginLeft: 24,

        fontFamily: "JosefinSlab-Bold",
        fontSize: 22,
    },
    items__itemSize: {
        width: 32,
        height: 32,

        fontFamily: "JosefinSlab-SemiBold",
        fontSize: 14,

        textAlign: "center",
        textAlignVertical: "center",

        color: "#fff",
        backgroundColor: "#000",

        borderRadius: 32 / 2,
    },
    items__itemColor: {
        marginTop: 10,

        width: 32,
        height: 32,

        borderRadius: 32 / 2,
    },
    items__itemName: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 26,

        color: "#949494",
    },
    items__itemPrice: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 26,
    },
});
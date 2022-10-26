import * as React from "react";

import { useNavigation } from "@react-navigation/native";

import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
} from "react-native";

import Svg, { Path } from "react-native-svg";

export const HeaderComp = ({ viewName }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {viewName != "items" ? (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View
                        style={[
                            styles.header__icon,
                            styles.header__icon_lastChild,
                        ]}
                    >
                        <Svg width={24} height={24} viewBox="0 0 24 24">
                            <Path
                                d="M.88 14.09 4.75 18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L2.61 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24Z"
                                fill="#000"
                            />
                        </Svg>
                    </View>
                </TouchableWithoutFeedback>
            ) : (
                <View />
            )}
            <View style={styles.header__box1}>
                <View style={styles.header__box11}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate("Cart")}
                    >
                        <View style={styles.header__icon}>
                            <Svg width={24} height={24} viewBox="0 0 24 24">
                                <Path
                                    d="M21 6h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a3 3 0 0 0-3-3Zm-9-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4Zm10 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h3v2a1 1 0 0 0 2 0V8h8v2a1 1 0 0 0 2 0V8h3a1 1 0 0 1 1 1Z"
                                    fill="#000"
                                />
                            </Svg>
                        </View>
                    </TouchableWithoutFeedback>

                    <View
                        style={[
                            styles.header__icon,
                            styles.header__icon_lastChild,
                        ]}
                    >
                        <Svg width={24} height={24} viewBox="0 0 24 24">
                            <Path
                                d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z"
                                fill="#000"
                            />
                        </Svg>
                    </View>
                </View>
                <Image
                    style={styles.header__avatar}
                    source={require("../../assets/images/item-1.jpg")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
        paddingRight: 32,
        paddingLeft: 32,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    header__box1: {
        flexDirection: "row",

        alignItems: "center",
    },
    header__box11: {
        marginRight: 32,

        flexDirection: "row",

        alignItems: "center",
    },
    header__icon: {
        marginRight: 24,
    },
    header__icon_lastChild: {
        marginRight: 0,
    },
    header__avatar: {
        width: 56,
        height: 56,

        borderRadius: 56 / 2,
    },
});

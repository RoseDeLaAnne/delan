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

export const ItemView = ({ route }) => {
    const { id } = route.params;

    const navigation = useNavigation();

    const [item, setItem] = React.useState();

    const [selectedSize, setSelectedSize] = React.useState("");
    const [selectedColor, setSelectedColor] = React.useState("");

    const getData = () => {
        axios
            .get(`https://6356dd959243cf412f8f3208.mockapi.io/items/${id}`)
            .then(({ data }) => {
                setItem(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    React.useEffect(() => {
        getData();
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

    if (!item) {
        return null;
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp viewName="item" />

            <View style={styles.item}>
                <View style={styles.item__box1}>
                    <Text style={styles.item__name}>{item.name}</Text>
                    <View style={styles.item__box11}>
                        <View style={styles.item__box111}>
                            <Text
                                style={
                                    item.feedback
                                        ? [
                                              styles.item__feedback,
                                              styles.item__feedback_positive,
                                          ]
                                        : [
                                              styles.item__feedback,
                                              styles.item__feedback_negative,
                                          ]
                                }
                            >
                                {item.feedback ? "Positive" : "Negative"}
                            </Text>
                            <Text style={styles.item__reviews}>
                                ({item.reviews})
                            </Text>
                        </View>
                        <Text style={styles.item__price}>${item.price}</Text>
                    </View>
                </View>
                <View style={styles.item__box2}>
                    <Image
                        style={styles.item__image}
                        source={require("../../assets/images/item-10.jpg")}
                    />
                    <View style={styles.item__box21}>
                        <View style={styles.item__box211}>
                            <View style={styles.item__box2111}>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedSize("S")}
                                >
                                    <Text
                                        style={
                                            selectedSize === "S" ||
                                            !selectedSize
                                                ? [
                                                      styles.item__size,
                                                      styles.item__size_active,
                                                  ]
                                                : styles.item__size
                                        }
                                    >
                                        S
                                    </Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedSize("M")}
                                >
                                    <Text
                                        style={
                                            selectedSize === "M"
                                                ? [
                                                      styles.item__size,
                                                      styles.item__size_active,
                                                  ]
                                                : styles.item__size
                                        }
                                    >
                                        M
                                    </Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedSize("L")}
                                >
                                    <Text
                                        style={
                                            selectedSize === "L"
                                                ? [
                                                      styles.item__size,
                                                      styles.item__size_active,
                                                  ]
                                                : styles.item__size
                                        }
                                    >
                                        L
                                    </Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedSize("XL")}
                                >
                                    <Text
                                        style={
                                            selectedSize === "XL"
                                                ? [
                                                      styles.item__size,
                                                      styles.item__size_active,
                                                      styles.item__size_lastChild,
                                                  ]
                                                : [
                                                      styles.item__size,
                                                      styles.item__size_lastChild,
                                                  ]
                                        }
                                    >
                                        XL
                                    </Text>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.item__box2112}>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedColor('green')}
                                >
                                    <View style={styles.item__box21121}>
                                        <Image
                                            style={styles.item__color}
                                            source={require("../../assets/icons/color-1.png")}
                                        />
                                        {selectedColor === 'green' ||
                                        !selectedColor ? (
                                            <View
                                                style={styles.item__box211211}
                                            >
                                                <View
                                                    style={
                                                        styles.item__color_after
                                                    }
                                                />
                                            </View>
                                        ) : null}
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedColor('yellow')}
                                >
                                    <View style={styles.item__box21121}>
                                        <Image
                                            style={styles.item__color}
                                            source={require("../../assets/icons/color-2.png")}
                                        />
                                        {selectedColor === 'yellow' ? (
                                            <View
                                                style={styles.item__box211211}
                                            >
                                                <View
                                                    style={
                                                        styles.item__color_after
                                                    }
                                                />
                                            </View>
                                        ) : null}
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={() => setSelectedColor('blue')}
                                >
                                    <View style={styles.item__box21121}>
                                        <Image
                                            style={styles.item__color}
                                            source={require("../../assets/icons/color-3.png")}
                                        />
                                        {selectedColor === 'blue' ? (
                                            <View
                                                style={styles.item__box211211}
                                            >
                                                <View
                                                    style={
                                                        styles.item__color_after
                                                    }
                                                />
                                            </View>
                                        ) : null}
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <TouchableWithoutFeedback>
                            <View style={styles.item__add}>
                                <Svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 512 512"
                                >
                                    <Path
                                        d="M480 224H288V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v192H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h192v192c0 17.673 14.327 32 32 32s32-14.327 32-32V288h192c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                                        fill="#fff"
                                    />
                                </Svg>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,

        flex: 1,
    },
    item: {
        flex: 1,
    },
    item__box1: {
        marginBottom: 48,
        paddingRight: 32,
        paddingLeft: 32,

        flexDirection: "column",
    },
    item__box11: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    item__box111: {
        flexDirection: "row",

        alignItems: "center",
    },
    item__box2: {
        flex: 1,

        flexDirection: "row",
    },
    item__box21: {
        paddingTop: 32,
        paddingBottom: 32,

        flex: 1,
        flexDirection: "column",

        alignItems: "center",

        justifyContent: "space-between",
    },
    item__box211: {
        // flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },
    item__box2111: {
        marginBottom: 48,
    },
    item__box21121: {
        marginBottom: 16,

        position: "relative",
    },
    item__box21121_lastChild: {
        marginBottom: 0,
    },
    item__box211211: {
        position: "absolute",

        top: 0,
        left: 0,

        width: 48,
        height: 48,

        alignItems: "center",
        justifyContent: "center",
    },
    item__name: {
        marginBottom: 16,

        fontFamily: "JosefinSlab-SemiBold",
        fontSize: 40,
    },
    item__feedback: {
        marginRight: 4,

        fontFamily: "JosefinSlab-SemiBold",
        fontSize: 26,
    },
    item__feedback_positive: {
        color: "#0C5700",
    },
    item__reviews: {
        fontFamily: "JosefinSlab-Regular",
        fontSize: 26,

        color: "#868484",
    },
    item__price: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 32,
    },
    item__image: {
        width: 312,
        height: "100%",

        borderTopRightRadius: 20,
    },
    item__size: {
        marginBottom: 16,

        width: 48,
        height: 48,

        fontFamily: "JosefinSlab-SemiBold",
        fontSize: 22,

        textAlign: "center",
        textAlignVertical: "center",

        backgroundColor: "#D9D9D9",

        borderRadius: 48 / 2,
    },
    item__size_lastChild: {
        marginBottom: 0,
    },
    item__size_active: {
        color: "#fff",
        backgroundColor: "#000",
    },
    item__color: {
        width: 48,
        height: 48,

        borderRadius: 48 / 2,
    },
    item__color_after: {
        width: 20,
        height: 20,

        backgroundColor: "#fff",

        borderRadius: 20 / 2,
    },
    item__add: {
        width: 48,
        height: 48,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#000",

        borderRadius: 48 / 2,
    },
});

import * as React from "react";

import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    SectionList,
    TouchableWithoutFeedback,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import Svg, { Path } from "react-native-svg";

import axios from "axios";

import { HeaderComp } from "../../components/main/HeaderComp";

export const ItemsView = ({ navigation }) => {
    const token = "5357792608:AAEOhInjL8D4E3Ml8EKrv9AA04t4DokAsbs";

    const [items, setItems] = React.useState([]);
    const [telegramResult, setTelegramResult] = React.useState([]);

    const [selectedColors, setSelectedColors] = React.useState({});

    const getData = () => {
        axios
            .get(`https://6356dd959243cf412f8f3208.mockapi.io/items`)
            .then(({ data }) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const telegramGetUpdates = () => {
        axios
            .get(
                `https://api.telegram.org/bot5357792608:AAEOhInjL8D4E3Ml8EKrv9AA04t4DokAsbs/getUpdates`
            )
            .then(({ data }) => {
                setTelegramResult(data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const telegramSendMessage = (text) => {
        axios.get(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${telegramResult[0].message.chat.id}&text=${text}`
        );
    };

    React.useEffect(() => {
        getData();
        telegramGetUpdates();
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
            <HeaderComp viewName="items" />

            <View style={styles.main}>
                <View style={styles.items}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={items}
                        ListHeaderComponent={() => (
                            <View style={styles.main__box1}>
                                <TouchableWithoutFeedback
                                    onPress={() => telegramSendMessage('Ahaha, what did you say to me?')}
                                >
                                    <View style={styles.main__box11}>
                                        <Text
                                            style={[
                                                styles.title,
                                                styles.title1,
                                            ]}
                                        >
                                            New
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <View style={styles.main__box12}>
                                    <Text style={[styles.title, styles.title2]}>
                                        Arrivals
                                    </Text>
                                    <Svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 512 512"
                                    >
                                        <Path
                                            d="M480 288H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32s-14.327 32-32 32z"
                                            fill="#949494"
                                        />
                                    </Svg>
                                </View>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.items__item}>
                                <TouchableWithoutFeedback
                                    onPress={() =>
                                        navigation.navigate("Item", {
                                            id: item.id,
                                        })
                                    }
                                >
                                    <Image
                                        style={styles.items__itemImage}
                                        source={require("../../assets/images/item-6.jpg")}
                                    />
                                </TouchableWithoutFeedback>
                                <View style={styles.items__itemBox1}>
                                    <View style={styles.items__itemBox11}>
                                        <Text style={styles.items__itemPrice}>
                                            ${item.price}
                                        </Text>
                                        <View style={styles.items__itemBox111}>
                                            <TouchableWithoutFeedback
                                                onPress={() =>
                                                    setSelectedColors(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            [`${item.id}`]: `color_1`,
                                                        })
                                                    )
                                                }
                                            >
                                                <View
                                                    style={
                                                        styles.items__itemBox1111
                                                    }
                                                >
                                                    <Image
                                                        style={
                                                            styles.items__itemColor
                                                        }
                                                        source={require("../../assets/icons/color-1.png")}
                                                    />
                                                    {selectedColors[
                                                        `${item.id}`
                                                    ] === `color_1` ||
                                                    !selectedColors[
                                                        `${item.id}`
                                                    ] ? (
                                                        <View
                                                            style={
                                                                styles.items__itemBox11111
                                                            }
                                                        >
                                                            <View
                                                                style={
                                                                    styles.items__itemColor_after
                                                                }
                                                            />
                                                        </View>
                                                    ) : null}
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <TouchableWithoutFeedback
                                                onPress={() =>
                                                    setSelectedColors(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            [`${item.id}`]: `color_2`,
                                                        })
                                                    )
                                                }
                                            >
                                                <View
                                                    style={
                                                        styles.items__itemBox1111
                                                    }
                                                >
                                                    <Image
                                                        style={
                                                            styles.items__itemColor
                                                        }
                                                        source={require("../../assets/icons/color-2.png")}
                                                    />
                                                    {selectedColors[
                                                        `${item.id}`
                                                    ] === `color_2` ? (
                                                        <View
                                                            style={
                                                                styles.items__itemBox11111
                                                            }
                                                        >
                                                            <View
                                                                style={
                                                                    styles.items__itemColor_after
                                                                }
                                                            />
                                                        </View>
                                                    ) : null}
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <TouchableWithoutFeedback
                                                onPress={() =>
                                                    setSelectedColors(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            [`${item.id}`]: `color_3`,
                                                        })
                                                    )
                                                }
                                            >
                                                <View
                                                    style={[
                                                        styles.items__itemBox1111,
                                                        styles.items__itemBox1111_lastChild,
                                                    ]}
                                                >
                                                    <Image
                                                        style={
                                                            styles.items__itemColor
                                                        }
                                                        source={require("../../assets/icons/color-3.png")}
                                                    />
                                                    {selectedColors[
                                                        `${item.id}`
                                                    ] === `color_3` ? (
                                                        <View
                                                            style={
                                                                styles.items__itemBox11111
                                                            }
                                                        >
                                                            <View
                                                                style={
                                                                    styles.items__itemColor_after
                                                                }
                                                            />
                                                        </View>
                                                    ) : null}
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View>
                                    </View>
                                    <Text style={styles.items__itemName}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
    },
    main__box1: {
        marginBottom: 48,
        paddingRight: 16,
        paddingLeft: 16,

        flexDirection: "column",
    },
    main__box11: {
        marginBottom: 8,
    },
    main__box12: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 48,
    },
    title2: {
        color: "#949494",
    },
    items: {
        paddingRight: 16,
        paddingLeft: 16,

        flexDirection: "column",
    },
    items__item: {
        marginBottom: 32,
    },
    items__itemBox1: {
        paddingRight: 16,
        paddingLeft: 16,

        flexDirection: "column",
    },
    items__itemBox11: {
        marginBottom: 8,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    items__itemBox111: {
        flexDirection: "row",
    },
    items__itemBox1111: {
        marginRight: 16,

        position: "relative",
    },
    items__itemBox1111_lastChild: {
        marginRight: 0,
    },
    items__itemBox11111: {
        position: "absolute",

        width: 32,
        height: 32,

        alignItems: "center",
        justifyContent: "center",
    },
    items__itemImage: {
        marginBottom: 24,

        width: "100%",
        height: 320,

        borderRadius: 20,
    },
    items__itemColor: {
        width: 32,
        height: 32,

        borderRadius: 32 / 2,
    },
    items__itemColor_after: {
        width: 14,
        height: 14,

        backgroundColor: "#fff",

        borderRadius: 14 / 2,
    },
    items__itemColor_last: {
        marginRight: 0,
    },
    items__itemPrice: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 32,
    },
    items__itemName: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 26,

        color: "#949494",
    },
});

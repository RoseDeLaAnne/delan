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

export const CartView = () => {
    const navigation = useNavigation();

    const token = "5357792608:AAEOhInjL8D4E3Ml8EKrv9AA04t4DokAsbs";

    const [items, setItems] = React.useState([
        {
            imageUrl:
                "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            name: "item 1",
            price: 59.99,
            quantity: 1,
            size: "XL",
            color: {
                name: "Green",
                url: "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            },
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            name: "item 2",
            price: 29.99,
            quantity: 2,
            size: "XL",
            color: {
                name: "Yellow",
                url: "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            },
        },
    ]);
    const [telegramResult, setTelegramResult] = React.useState([]);

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

    const telegramSendMessage = () => {
        // var text = "";
        // var photosUrl = [];

        // items.map((item) => {
        // photosUrl.push({
        //     type: "photo",
        //     media: item.itemImageUrl,
        // });
        //     text =
        //         text +
        //         `<b>Name:</b>   ${item.itemName}%0A<b>Quantity:</b>  ${item.itemQuantity}%0A<b>Size:</b>   ${item.itemSize}%0A<b>Color:</b>  ${item.itemColor}%0A<b>Price:</b>  $${item.itemPrice}%0A%0A`;
        // });

        // var photos = [
        //     {
        //         type: "photo",
        //         media: "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        //     },
        //     {
        //         type: "photo",
        //         media: "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        //     },
        // ];

        // console.log(photos);

        // axios.get(
        //     `https://api.telegram.org/bot${token}/sendMediaGroup?chat_id=${telegramResult[0].message.chat.id}&media=${photos}`
        // );

        // axios.get(
        //     `https://api.telegram.org/bot${token}/sendMessage?chat_id=${telegramResult[0].message.chat.id}&text=${text}&parse_mode=HTML`
        // );

        setItems(items.reverse())

        var photo = "";
        var caption = "";

        items.map((item) => {
            photo = item.imageUrl;
            caption = `<b>Name:</b>   ${item.name}%0A<b>Quantity:</b>  ${item.quantity}%0A<b>Size:</b>   ${item.size}%0A<b>Color:</b>  ${item.color.name}%0A<b>Price:</b>  $${item.price}`;

            axios.get(
                `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${telegramResult[0].message.chat.id}&photo=${photo}&caption=${caption}&parse_mode=HTML`
            );
        });
    };

    React.useEffect(() => {
        // getData();
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
            <HeaderComp viewName="cart" />

            <View style={styles.main}>
                <View style={styles.main__box1}>
                    <View style={styles.main__box11}>
                        <Text style={styles.title}>My Cart</Text>
                        <Text style={styles.titleQuantity}>(2)</Text>
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
                                            source={require("../../assets/images/item-6.jpg")}
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
                                        <Text
                                            style={styles.items__itemQuantity}
                                        >
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
                                        <Image
                                            style={styles.items__itemColor}
                                            source={require("../../assets/icons/color-1.png")}
                                        />
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
                                <Svg width={24} height={24} viewBox="0 0 24 24">
                                    <Path
                                        d="M21 4h-3.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2ZM11 2h2a3.006 3.006 0 0 1 2.829 2H8.171A3.006 3.006 0 0 1 11 2Zm7 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6h12Z"
                                        fill="#D02020"
                                    />
                                    <Path
                                        d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM14 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                        fill="#D02020"
                                    />
                                </Svg>
                            </View>
                        </View>
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
                                            source={require("../../assets/images/item-6.jpg")}
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
                                        <Text
                                            style={styles.items__itemQuantity}
                                        >
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
                                        <Image
                                            style={styles.items__itemColor}
                                            source={require("../../assets/icons/color-1.png")}
                                        />
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
                                <Svg width={24} height={24} viewBox="0 0 24 24">
                                    <Path
                                        d="M21 4h-3.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2ZM11 2h2a3.006 3.006 0 0 1 2.829 2H8.171A3.006 3.006 0 0 1 11 2Zm7 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6h12Z"
                                        fill="#D02020"
                                    />
                                    <Path
                                        d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM14 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                        fill="#D02020"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.main__box2}>
                    <View style={styles.totalPrice}>
                        <Text style={styles.totalPrice__text}>
                            Total Price (2 items)
                        </Text>
                        <Text style={styles.totalPrice__value}>$119.98</Text>
                    </View>
                    <View style={styles.main__box21}>
                        <TouchableWithoutFeedback
                            onPress={() => telegramSendMessage("text")}
                        >
                            <View style={styles.checkout}>
                                <Text style={styles.checkout__text}>
                                    Checkout
                                </Text>
                                <Svg width={24} height={24} viewBox="0 0 24 24">
                                    <Path
                                        d="M.88 14.09 4.75 18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L2.61 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24Z"
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
        paddingBottom: 32,

        flex: 1,
    },
    main: {
        flex: 1,
        flexDirection: "column",

        justifyContent: "space-between",
    },
    main__box11: {
        marginBottom: 48,
        paddingRight: 32,
        paddingLeft: 32,

        flexDirection: "row",

        alignItems: "center",
    },
    main__box2: {
        flexDirection: "column",
    },
    main__box21: {
        paddingRight: 32,
        paddingLeft: 32,
    },
    title: {
        marginRight: 10,

        fontFamily: "JosefinSlab-Bold",
        fontSize: 48,
    },
    titleQuantity: {
        fontFamily: "JosefinSlab-SemiBold",
        fontSize: 32,

        color: "#868484",
    },
    items: {
        paddingRight: 16,
        paddingLeft: 16,
    },
    items__item: {
        marginBottom: 32,

        flexDirection: "row",
    },
    items__item_lastChild: {
        marginBottom: 0,
    },
    items__itemBox1: {
        marginRight: 24,

        width: "100%",

        flexDirection: "column",
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

        flexDirection: "column",
    },
    items__itemBox12: {
        paddingRight: 16,
        paddingLeft: 16,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    items__itemBox2: {
        width: 96,
        height: 152,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#FEE2E2",

        borderRadius: 20,
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
    totalPrice: {
        marginBottom: 32,
        paddingRight: 32,
        paddingLeft: 32,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
    },
    totalPrice__text: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 26,

        color: "#949494",
    },
    totalPrice__value: {
        fontFamily: "JosefinSlab-Bold",
        fontSize: 32,
    },
    checkout: {
        height: 72,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#000",

        borderRadius: 20,
    },
    checkout__text: {
        marginRight: 20,

        fontFamily: "JosefinSlab-Bold",
        fontSize: 22,

        color: "#fff",
    },
});

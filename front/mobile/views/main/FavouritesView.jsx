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

export const FavouritesView = ({ navigation }) => {
    const itemsData = [
        {
            id: 0,
            name: "Name 1",
            rating: 4.3,
            reviews: 52,
            price: 27.42,
            images: [
                {
                    id: 1,
                    colorId: 1,
                    urls: [
                        "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        "https://images.unsplash.com/photo-1521567097888-2c5fc40a8660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                    ],
                },
                {
                    id: 2,
                    colorId: 2,
                    urls: [
                        "https://images.unsplash.com/photo-1578681994827-a9776963799c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN3ZWF0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                    ],
                },
                {
                    id: 3,
                    colorId: 3,
                    urls: [
                        "https://images.unsplash.com/photo-1606081430924-b6480765d470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                    ],
                },
            ],
            colors: [
                {
                    id: 1,
                    displayName: "Green",
                    imageUrl:
                        "https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                },
                {
                    id: 2,
                    displayName: "Yellow",
                    imageUrl:
                        "https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                },
                {
                    id: 3,
                    displayName: "Blue",
                    imageUrl:
                        "https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                },
            ],
            sizes: [
                {
                    id: 1,
                    displayName: "S",
                },
                {
                    id: 2,
                    displayName: "M",
                },
                {
                    id: 3,
                    displayName: "L",
                },
                {
                    id: 4,
                    displayName: "XL",
                },
            ],
        },
    ];

    const [items, setItems] = React.useState([]);

    const [selectedColors, setSelectedColors] = React.useState({});

    const getData = () => {
        axios
            .get(`https://6356dd959243cf412f8f3208.mockapi.io/items/`)
            .then(({ data }) => {
                itemsData.map((item) => {
                    setSelectedColors((prevState) => ({
                        ...prevState,
                        [item.id]: 1,
                    }));
                });

                setItems(itemsData);
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

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp viewName="favourites" />

            <View style={styles.main}>
                <View style={styles.items}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={items}
                        ListHeaderComponent={() => (
                            <View style={styles.main__box1}>
                                <View style={styles.main__box11}>
                                    <Text style={styles.title}>Favourites</Text>
                                </View>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.items__item}>
                                <View style={styles.items__itemBox1}>
                                    <TouchableWithoutFeedback
                                        onPress={() =>
                                            navigation.navigate("Item", {
                                                id: item.id,
                                            })
                                        }
                                    >
                                        <Image
                                            style={styles.items__itemImage}
                                            source={{
                                                uri: item.images[
                                                    selectedColors[item.id]
                                                ].urls[0],
                                            }}
                                        />
                                    </TouchableWithoutFeedback>
                                    <View style={styles.items__itemBox11}>
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                        >
                                            <Path
                                                d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z"
                                                fill="#fff"
                                            />
                                        </Svg>
                                    </View>
                                    <View style={styles.items__itemBox12}>
                                        {/* animation bar */}
                                    </View>
                                    <View style={styles.items__itemBox13}>
                                        <View style={styles.items__itemDots}>
                                            <View
                                                style={styles.items__itemDot}
                                            />
                                            <View
                                                style={[
                                                    styles.items__itemDot,
                                                    styles.items__itemDot_center,
                                                ]}
                                            />
                                            <View
                                                style={[
                                                    styles.items__itemDot,
                                                    styles.items__itemDot_lastChild,
                                                ]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.items__itemBox2}>
                                    <View style={styles.items__itemBox21}>
                                        <Text style={styles.items__itemPrice}>
                                            ${item.price}
                                        </Text>
                                        <View style={styles.items__itemBox211}>
                                            {item.colors.map((color) => (
                                                <TouchableWithoutFeedback
                                                    key={color.id}
                                                    onPress={() =>
                                                        setSelectedColors(
                                                            (prevState) => ({
                                                                ...prevState,
                                                                [item.id]:
                                                                    color.id,
                                                            })
                                                        )
                                                    }
                                                >
                                                    <View
                                                        style={
                                                            color.id ===
                                                            items[item.id]
                                                                .colors.length
                                                                ? [
                                                                      styles.items__itemBox2111,
                                                                      styles.items__itemBox2111_lastChild,
                                                                  ]
                                                                : [
                                                                      styles.items__itemBox2111,
                                                                  ]
                                                        }
                                                    >
                                                        <Image
                                                            style={
                                                                styles.items__itemColor
                                                            }
                                                            source={{
                                                                uri: color.imageUrl,
                                                            }}
                                                        />
                                                        {selectedColors[
                                                            item.id
                                                        ] === color.id ? (
                                                            <View
                                                                style={
                                                                    styles.items__itemBox21111
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
                                            ))}
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
        marginBottom: 24,

        position: "relative",
    },
    items__itemBox11: {
        position: "absolute",

        left: 32,
        bottom: 32,
    },
    items__itemBox12: {
        position: "absolute",

        left: 0,
        bottom: 0,

        width: "100%",
        height: 2,

        backgroundColor: "#fff",
    },
    items__itemBox13: {
        position: "absolute",

        bottom: "45%",
        right: 16,
    },
    items__itemBox2: {
        paddingRight: 16,
        paddingLeft: 16,

        flexDirection: "column",
    },
    items__itemBox21: {
        marginBottom: 8,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    items__itemBox211: {
        flexDirection: "row",
    },
    items__itemBox2111: {
        marginRight: 16,

        position: "relative",
    },
    items__itemBox2111_lastChild: {
        marginRight: 0,
    },
    items__itemBox21111: {
        position: "absolute",

        width: 32,
        height: 32,

        alignItems: "center",
        justifyContent: "center",
    },
    items__itemImage: {
        width: "100%",
        height: 320,

        borderRadius: 20,
    },
    items__itemDots: {
        flexDirection: "column",
    },
    items__itemDot: {
        marginBottom: 6,

        width: 8,
        height: 8,

        backgroundColor: "rgba(255, 255, 255, 0.75)",

        borderRadius: 8 / 2,
    },
    items__itemDot_center: {
        // marginTop: 6,
        // marginBottom: 6,
    },
    items__itemDot_lastChild: {
        marginBottom: 0,
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

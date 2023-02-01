import * as React from "react";

import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native";

export const CustomCheckbox = ({ isSelected, onPressEvent, name }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onPressEvent(isSelected, name)}>
            <View
                style={
                    isSelected
                        ? [styles.customCheckbox, styles.customCheckbox_active]
                        : styles.customCheckbox
                }
            >
                <View style={styles.customCheckbox__circle}></View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    customCheckbox: {
        paddingRight: 4,
        paddingLeft: 4,

        width: 56,
        height: 32,

        alignItems: "flex-start",
        justifyContent: "center",

        backgroundColor: "#e5e5e5",

        borderRadius: 64 / 2,
    },
    customCheckbox_active: {
        alignItems: "flex-end",

        backgroundColor: "#000",
    },
    customCheckbox__circle: {
        width: 24,
        height: 24,

        backgroundColor: "#fff",

        borderRadius: 56 / 2,
    },
});

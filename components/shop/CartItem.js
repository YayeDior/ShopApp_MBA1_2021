import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const CartItem = props => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </View>
            <View style={styles.itemData}>
                {props.deletable && <TouchableOpacity style={styles.deleteButton} onPress={props.onRemove}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="black"
                    />
                </TouchableOpacity>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: '#808080',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontFamily: 'open-sans',
        color: 'black',
        fontSize: 16
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CartItem
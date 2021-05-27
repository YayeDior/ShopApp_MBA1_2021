import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";
import Card from "../UI/Card";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button color={Colors.primary} title={showDetails ? "Details cachés" :  "Montrer les détails"} onPress={() => {setShowDetails(prevState => !prevState)}} />
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(item => <CartItem key={item.productId} quantity={item.quantity} amount={item.sum} title={item.productTitle}/>)}
                </View>
            )}
        </Card>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    amount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        color: '#808080'
    },
    detailItems: {
        width: '100%'
    }
});

export default OrderItem
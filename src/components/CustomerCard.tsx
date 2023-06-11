// ** react and react-native imports
import React from "react";
import { View, Text } from "react-native";

type TCustomerCard = {
    userId: string;
    name: string;
    email: string;
};

export default function CustomerCard({ email, userId, name }: TCustomerCard) {
    return (
        <View>
            <Text>CustomerCard</Text>
        </View>
    );
}

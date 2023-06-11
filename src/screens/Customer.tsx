import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTailwind } from "tailwind-rn";

import { BottomTabParamList } from "navigator/TabNavigator";
import { RootStackParamList } from "navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, "Customers">,
    NativeStackNavigationProp<RootStackParamList>
>;

export default function Customer() {
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    // ** state
    const [input, setInput] = useState<string>("");

    const tailwind = useTailwind();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView style={tailwind("bg-[#59C1CC]")}>
            <Image
                containerStyle={tailwind("w-full h-64")}
                source={{ uri: "https://links.papareact.com/3jc" }}
                PlaceholderContent={<ActivityIndicator />}
            />

            <Input
                containerStyle={tailwind("bg-white pt-5 pb-0 px-10")}
                placeholder="Search by Customer"
                value={input}
                onChangeText={setInput}
            />
        </ScrollView>
    );
}

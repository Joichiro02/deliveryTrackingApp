// ** react and react-native imports
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

// ** libraries imports
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native";
import { Image, Input } from "@rneui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useQuery } from "@apollo/client";
import { useTailwind } from "tailwind-rn";

// ** local imports
import { BottomTabParamList } from "navigator/TabNavigator";
import { RootStackParamList } from "navigator/RootNavigator";
import { GET_CUSTOMERS } from "../../graphql/queries";
import CustomerCard from "components/CustomerCard";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, "Customers">,
    NativeStackNavigationProp<RootStackParamList>
>;

export default function Customer() {
    // ** navigation hook
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    // ** state
    const [input, setInput] = useState<string>("");
    // ** tailwind hook
    const tailwind = useTailwind();
    // ** apollo/cliet hook
    const { data, loading, error } = useQuery(GET_CUSTOMERS);

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

            {/* {data?.getCustomers.map(
                ({ name: Id, value: { email, name } }: CustomerResponse) => (
                    <CustomerCard
                        key={Id}
                        name={name}
                        email={email}
                        userId={Id}
                    />
                )
            )} */}
        </ScrollView>
    );
}

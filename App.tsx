// ** libraries imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";

// ** local imports
import utilities from "./tailwind.json";
import RootNavigator from "navigator/RootNavigator";

const client = new ApolloClient({
    uri: "http://localhost:5001/api/early-hedgehog",
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        //@ts-ignore - TailwindProvider is missing a type definition
        <TailwindProvider utilities={utilities} colorScheme="dark">
            <ApolloProvider client={client}>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </ApolloProvider>
        </TailwindProvider>
    );
}

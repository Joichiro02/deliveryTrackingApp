import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
    query MyQuery {
        getCustomers {
            name
            value {
                email
                name
            }
        }
    }
`;

export const GET_ORDERS = gql`
    query GetOrders {
        getOrders {
            value {
                Address
                City
                Lat
                Lng
                carrier
                createAt
                shippingCost
                trackingId
                trackingItems {
                    customer_id
                    items {
                        item_id
                        name
                        price
                        quantity
                    }
                }
            }
        }
    }
`;

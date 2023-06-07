import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../graphql/queries";

export default function useCustomerOrders(userId: string) {
    // ** lib methods
    const { data, error, loading } = useQuery(GET_CUSTOMERS);

    // ** state
    const [order, setOrder] = useState<Order[]>([]);

    useEffect(() => {
        if (!data) return;

        const orders: Order[] = data.getOrders.map(
            ({ value }: OrderResponse) => ({
                carrier: value.carrier,
                createdAt: value.createdAt,
                shippingCost: value.shippingCost,
                trackingId: value.trackingId,
                trackingItems: value.trackingItems,
                Address: value.Address,
                City: value.City,
                Lat: value.Lat,
                Lng: value.Lng,
            })
        );

        const customerOrders = orders.filter(
            (order) => order.trackingItems.customer_id === userId
        );

        setOrder(customerOrders);
    }, [data, userId]);

    return { error, loading, order };
}

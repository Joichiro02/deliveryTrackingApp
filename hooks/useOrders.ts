import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

import { GET_ORDERS } from "../graphql/queries";

export default function useOrders() {
    // ** lib methods
    const { data, error, loading } = useQuery(GET_ORDERS);

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

        setOrder(orders);
    }, [data]);

    return { error, loading, order };
}

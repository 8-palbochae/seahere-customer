const inventoryMockup = {
    products: [
        {
            productId: 1,
            productName: "광어",
            country: "국산",
            category: "활어",
            natural: "Yes",
            totalQuantity: 100,
            page: 1,
            size: 10,
            totalPage: 1,
            totalCount: 1,
            latestIncoming: "2023-07-20",
            detailData: [
                {
                    inventoryId: 101,
                    inventoryQuantity: 50,
                    price: 1000,
                },
                {
                    inventoryId: 102,
                    inventoryQuantity: 50,
                    price: 1000,
                }
            ]
        },
        {
            productId: 2,
            productName: "Orange",
            country: "Spain",
            category: "Fruit",
            natural: "Yes",
            totalQuantity: 150,
            page: 1,
            size: 10,
            totalPage: 1,
            totalCount: 1,
            latestIncoming: "2023-07-22",
            detailData: [
                {
                    inventoryId: 201,
                    inventoryQuantity: 75,
                    price: 800,
                },
                {
                    inventoryId: 202,
                    inventoryQuantity: 75,
                    price: 800,
                }
            ]
        },
        {
            productId: 3,
            productName: "Banana",
            country: "Ecuador",
            category: "Fruit",
            natural: "Yes",
            totalQuantity: 200,
            page: 1,
            size: 10,
            totalPage: 1,
            totalCount: 1,
            latestIncoming: "2023-07-25",
            detailData: [
                {
                    inventoryId: 301,
                    inventoryQuantity: 100,
                    price: 500,
                },
                {
                    inventoryId: 302,
                    inventoryQuantity: 100,
                    price: 500,
                }
            ]
        }
    ]
};

export default inventoryMockup;

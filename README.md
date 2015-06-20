# Order Service

This simple in-memory service stores details of orders placed.

# Group Orders APIs

# List Orders [/orders]

## /orders [GET]

List current order items

+ Response 200 (application/json)
    + Body
    {
      "orders": [
        {
          "id": "6367c48dd193d56ea7b0baad25b19455e529f5ee",
          "barcode": "7622210141132",
          "productname": "Cadbury Wispa Gold Hot Chocolate Drink",
          "imagebase64": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEB..."
          "price": "11.59",
          "currency": "USD"
          "quantity": "1",
          "total": "11.59"
        },
        {
          "id": "a0312f777960e1dae7d3d0c8df6f0b43f91352d5",
          "barcode": "886742322705",
          "productname": "Lucky Women's Fastt Gladiator Sandal, Black, 6.5 M US",
          "imageurl": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQF...",
          "price": "68.95",
          "currency": "USD",
          "quantity": "2",
          "total": "137.90"
        }
      ],
      "total" : "149.49";
    }

# Add Order [/orders]

## /orders [POST]

Add an Item to the Order


+ Request (application/json)
    + Body
            {
              "barcode": "9780201896831",
              "quantity" : 2
            }

+ Response 200 (application/json)
    + Body
            {
              "id": "a0312f777960e1dae7d3d0c8df6f0b43f91352d5",
              "barcode": "9780201896831",
              "quantity": "2",
              "total": "137.90"
            }

+ Response 400 (application/json)
    + Body
            {"Invalid Barcode Id"}

# Update Order [/orders/{id}]

## /orders/{id} [PUT]

Update Item Quantity

+ Request (application/json)
    + Body
            {
              "id": "a0312f777960e1dae7d3d0c8df6f0b43f91352d5",
              "quantity": 2
            }

+ Response 200 (application/json)
    + Body
            {
              "id": "a0312f777960e1dae7d3d0c8df6f0b43f91352d5",
              "barcode": "9780201896831",
              "quantity": "2",
              "total": "137.90"
            }

+ Response 400 (application/json)
    + Body
            {"Invalid Order Id"}


# Remove Order [/orders/{id}]

## /orders/{id} [DELETE]

Remove an Item from the Order

+ Request (application/json)
    + Body
            {
              "id": "a0312f777960e1dae7d3d0c8df6f0b43f91352d5"
            }

+ Response 200 (application/json)
    + Body
            {}

+ Response 400 (application/json)
    + Body
            {"Invalid Order Id"}

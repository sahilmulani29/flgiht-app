import { Filters, FlightsType, RootContext } from "../constant/types"

export const APIResponse: FlightsType[] = [
    {
        "id": 1,
        "origin": "Delhi",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 2,
        "origin": "Delhi",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 3,
        "origin": "Delhi",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 4,
        "origin": "Delhi",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 5,
        "origin": "Delhi",
        "destination": "New York",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 6,
        "origin": "Delhi",
        "destination": "New York",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 7,
        "origin": "Delhi",
        "destination": "New York",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 8,
        "origin": "Delhi",
        "destination": "New York",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 9,
        "origin": "Delhi",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 10,
        "origin": "Delhi",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 11,
        "origin": "Delhi",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 12,
        "origin": "Delhi",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 13,
        "origin": "Delhi",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 14,
        "origin": "Delhi",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 15,
        "origin": "Delhi",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 16,
        "origin": "Delhi",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },













    {
        "id": 17,
        "origin": "New York",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 18,
        "origin": "New York",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 19,
        "origin": "New York",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 20,
        "origin": "New York",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 21,
        "origin": "New York",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 22,
        "origin": "New York",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 23,
        "origin": "New York",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 24,
        "origin": "New York",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 25,
        "origin": "New York",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 26,
        "origin": "New York",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 27,
        "origin": "New York",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 28,
        "origin": "New York",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 29,
        "origin": "New York",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 30,
        "origin": "New York",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 31,
        "origin": "New York",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 32,
        "origin": "New York",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },














    {
        "id": 33,
        "origin": "Berlin",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 34,
        "origin": "Berlin",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 35,
        "origin": "Berlin",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 36,
        "origin": "Berlin",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 37,
        "origin": "Berlin",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 38,
        "origin": "Berlin",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 39,
        "origin": "Berlin",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 40,
        "origin": "Berlin",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 41,
        "origin": "Berlin",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 42,
        "origin": "Berlin",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 43,
        "origin": "Berlin",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 44,
        "origin": "Berlin",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 45,
        "origin": "Berlin",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 46,
        "origin": "Berlin",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 47,
        "origin": "Berlin",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 48,
        "origin": "Berlin",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },














    {
        "id": 49,
        "origin": "London",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 50,
        "origin": "London",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 51,
        "origin": "London",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 52,
        "origin": "London",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 53,
        "origin": "London",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 54,
        "origin": "London",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 55,
        "origin": "London",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 56,
        "origin": "London",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 57,
        "origin": "London",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 58,
        "origin": "London",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 59,
        "origin": "London",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 60,
        "origin": "London",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 61,
        "origin": "London",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 62,
        "origin": "London",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 63,
        "origin": "London",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 64,
        "origin": "London",
        "destination": "Sydney",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },














    {
        "id": 65,
        "origin": "Sedney",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 66,
        "origin": "Sedney",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 67,
        "origin": "Sedney",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 68,
        "origin": "Sedney",
        "destination": "Delhi",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 69,
        "origin": "Sedney",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 70,
        "origin": "Sedney",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 71,
        "origin": "Sedney",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 72,
        "origin": "Sedney",
        "destination": "New york",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 73,
        "origin": "Sedney",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 74,
        "origin": "Sedney",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 75,
        "origin": "Sedney",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 76,
        "origin": "Sedney",
        "destination": "Berlin",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    },
    {
        "id": 77,
        "origin": "Sedney",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 15,
        "price": {
            "amount": 50,
            "currency": "EUR"
        },
        "service": "India",
        "time": 6
    },
    {
        "id": 78,
        "origin": "Sedney",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 1,
        "price": {
            "amount": 100,
            "currency": "EUR"
        },
        "service": "India",
        "time": 2
    },
    {
        "id": 79,
        "origin": "Sedney",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 5,
        "price": {
            "amount": 200,
            "currency": "EUR"
        },
        "service": "Emirates",
        "time": 2
    },
    {
        "id": 80,
        "origin": "Sedney",
        "destination": "London",
        "departureDate": "2023-02-12",
        "returnDate": "2023-02-12",
        "seatAvailability": 3,
        "price": {
            "amount": 300,
            "currency": "EUR"
        },
        "service": "Singapore",
        "time": 2
    }
]

export const filteredFlights: any = new Map(
    JSON.parse(
        JSON.stringify(Array.from([
            [
                "India",
                [
                    {
                        "id": 1,
                        "origin": "Delhi",
                        "destination": "Berlin",
                        "departureDate": "2023-02-12",
                        "returnDate": "2023-02-12",
                        "seatAvailability": "15",
                        "price": {
                            "amount": 50,
                            "currency": "EUR"
                        },
                        "service": "India",
                        "time": "6"
                    },
                    {
                        "id": 2,
                        "origin": "Delhi",
                        "destination": "Berlin",
                        "departureDate": "2023-02-12",
                        "returnDate": "2023-02-12",
                        "seatAvailability": "1",
                        "price": {
                            "amount": 100,
                            "currency": "EUR"
                        },
                        "service": "India",
                        "time": 2
                    }
                ]
            ],
            [
                "Emirates",
                [
                    {
                        "id": 3,
                        "origin": "Delhi",
                        "destination": "Berlin",
                        "departureDate": "2023-02-12",
                        "returnDate": "2023-02-12",
                        "seatAvailability": "5",
                        "price": {
                            "amount": 200,
                            "currency": "EUR"
                        },
                        "service": "Emirates",
                        "time": 2
                    }
                ]
            ],
            [
                "Singapore",
                [
                    {
                        "id": 4,
                        "origin": "Delhi",
                        "destination": "Berlin",
                        "departureDate": "2023-02-12",
                        "returnDate": "2023-02-12",
                        "seatAvailability": "3",
                        "price": {
                            "amount": 300,
                            "currency": "EUR"
                        },
                        "service": "Singapore",
                        "time": 2
                    }
                ]
            ]
        ]))
    )
);

export const appliedFilters: Filters = {
    source: '',
    destination: '',
    departDate: '',
    seats: 75,
    advancedFilter: 'Fastest'
}

export const appliedFiltersCitySame: Filters = {
    source: 'Delhi',
    destination: 'Delhi',
    departDate: '',
    seats: 1,
    advancedFilter: 'Best'
}

export const mockRootState: RootContext = {
    flights: APIResponse,
    filteredFlights: filteredFlights,
    error: {
        isError: false,
        message: ''
    },
    isLoading: false,
    appliedFilters: appliedFilters,
}


export const mockFetch = (response: any) =>
    jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(response)
        })
    ) as jest.Mock


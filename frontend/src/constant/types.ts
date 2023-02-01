export interface Price {
    amount: number,
    currency: string
}

export interface FlightsType {
    id: string
    origin: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    seatAvailability: number,
    price: Price,
    service: string,
    time: number
}

export interface Error {
    isError: boolean,
    message: string
}

export interface Filters {
    source: string,
    destination: string,
    departDate: string,
    seats: number,
    advancedFilter?: string
}

export interface RootContext {
    flights: FlightsType[],
    filteredFlights: Map<string, FlightsType[]>,
    error?: Error | null,
    isLoading?: boolean,
    appliedFilters?: Filters
}
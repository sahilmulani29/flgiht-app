import { Filters, FlightsType } from "../constant/types";

export const getSearchResult = (filters: Filters, originalData: FlightsType[]) => {
    const filterData = new Map<string, FlightsType | []>();
    getfilteredData(filterData, filters, originalData)
    return filterData;
}

export const getfilteredData = (filterData: any, filters: Filters, originalData: FlightsType[]) => {
    let totalFlightsTime = 0;
    let TotalFlightsMoney = 0;
    let records = 0;
    for (let i = 0; i < originalData.length; i++) {
        if (originalData[i].origin === filters.source &&
            originalData[i].destination === filters.destination &&
            filters.departDate === originalData[i].departureDate &&
            filters.seats <= originalData[i].seatAvailability) {
            const temp = filterData.get(originalData[i].service)
            if (!temp) {
                filterData.set(originalData[i].service, [...[originalData[i]]])
            } else {
                temp.push(originalData[i])
                filterData.set(originalData[i].service, temp)
            }
            totalFlightsTime = totalFlightsTime + Number(originalData[i].time);
            TotalFlightsMoney = TotalFlightsMoney + originalData[i].price.amount;
            records++;
        }
    }

    if (filters.advancedFilter !== 'Best') {
        for (let key of filterData.keys()) {
            const data = filterData.get(key);
            filterData.set(key, data.filter((item: any) => {
                if (filters.advancedFilter === 'Cheapest') {
                    return item.price.amount <= (TotalFlightsMoney / records)
                } else {
                    return item.time <= (totalFlightsTime / records)
                }

            }))
        }
    }
}
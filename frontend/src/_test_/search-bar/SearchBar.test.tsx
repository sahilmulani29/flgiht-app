import { AppContext } from '../../context/app-context'
import React from 'react'
import { APIResponse, mockFetch, mockRootState } from '../mock'
import { RootContext } from '../../constant/types';
import { fireEvent, screen, render } from '@testing-library/react'
import { SearchBar } from '../../components/search-bar/SearchBar';


// To mock fetch
global.fetch = mockFetch(APIResponse)

// Mock context
const mockAppComponent = (rootState: RootContext) => {
    return (
        <AppContext.Provider
            value={{
                rootState,
                setRootStateHandler: jest.fn()
            }}
        >
            <SearchBar/>
        </AppContext.Provider>
    )
}

describe('Home component test cases', () => {

    test("Render SearchBar -> API success, If From & To (City) is Same", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        const fromCity = screen.getByLabelText('from-city')
        const toCity = screen.getByLabelText('to-city')
        const depart = screen.getByLabelText('depart')
        const seats = screen.getByLabelText('seats')
        fireEvent.change(fromCity)
        fireEvent.change(toCity)
        fireEvent.change(depart)
        fireEvent.change(seats)
    })

    test("Render SearchBar -> On Change of Dapart & City", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        const depart = screen.getByLabelText('depart')
        const seats = screen.getByLabelText('seats')
        fireEvent.change(depart)
        fireEvent.change(seats)
    })


})

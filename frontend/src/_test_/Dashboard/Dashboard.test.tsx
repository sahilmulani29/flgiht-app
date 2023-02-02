import { AppContext } from '../../context/app-context'
import React from 'react'
import { APIResponse, mockFetch, mockRootState } from '../mock'
import { RootContext } from '../../constant/types';
import { Home } from '../../components/Dashboard/Dashboard';
import { fireEvent, screen, render } from '@testing-library/react'
import { act } from 'react-test-renderer';


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
            <Home/>
        </AppContext.Provider>
    )
}

describe('Home component test cases', () => {

    test("Render Home -> On Search Bar Filter", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        act(() => {
            jest.runAllTimers();
        });
        const btn = screen.getByLabelText('search-btn')
        //Add click fireevent on search button
        fireEvent.click(btn)
    })

    test("Render Home -> On From & To city select", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        const fromCity = screen.getByLabelText('from-city')
        const toCity = screen.getByLabelText('to-city')
        //Add change event on city change
        fireEvent.change(fromCity)
        fireEvent.change(toCity)
    })

    test("Render Home -> onAdvanced Best Filter", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        const btn = screen.getByLabelText('Best')
        //Add click fireevent on best button
        fireEvent.click(btn)
    })

    test("Render Home -> onAdvanced cheapest Filter", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        const btn = screen.getByLabelText('Cheapest')
        //Add click fireevent on cheapest button
        fireEvent.click(btn)
    })

    test("Render Home -> onAdvanced fastest Filter", () => {
        render(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
        const btn = screen.getByLabelText('Fastest')
        //Add click fireevent on fastest button
        fireEvent.click(btn)
    })


})

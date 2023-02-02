import App from '../App'
import { AppContext, initialContext } from '../context/app-context'
import React from 'react'
import { APIResponse, mockFetch, mockRootState } from './mock'
import renderer from 'react-test-renderer'
import { RootContext } from '../constant/types';


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
            <App />
        </AppContext.Provider>
    )
}

describe('App component test cases', () => {

    test("Should call useFetch -> API success", () => {
        renderer.create(mockAppComponent({...mockRootState, error: {
            isError: false,
            message: ''
        }}))
    })

    test('Should call useFetch -> Loading state', () => {
        renderer.create(mockAppComponent({ ...initialContext, isLoading: true}))
    })

    test('Should call useFetch -> API fail', () => {
        renderer.create(mockAppComponent({
            ...initialContext, error: {
                isError: true,
                message: 'Something went wrong'
            }
        }))
    })

})

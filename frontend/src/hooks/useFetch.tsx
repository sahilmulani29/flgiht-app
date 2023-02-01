import { AppContext } from './../context/app-context';
import { useContext, useEffect, useState } from "react";
import { API_POINT } from '../constant/key-constant';

const useFetch = () => {

    const appCtx = useContext(AppContext);

    useEffect(() => {
            appCtx.setRootStateHandler({ ...appCtx.rootState, isLoading: true })
            console.log('hdf')
            fetch(API_POINT).then(res=>res.json())
            .then(res => {
                appCtx.setRootStateHandler({
                    isLoading: false,
                    error: {
                        isError: false,
                        message: ''
                    },
                    flights: res,
                    filteredFlights: res
                })
            })
                .catch(error => {
                    appCtx.setRootStateHandler({
                        ...appCtx.rootState,
                        isLoading: false,
                        error: {
                            isError: true,
                            message: 'Something went wrong'
                        },
                    })
                })
    }, [])

}

export default useFetch;
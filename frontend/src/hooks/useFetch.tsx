import { AppContext } from './../context/app-context';
import { useContext, useEffect} from "react";
import { API_POINT } from '../constant/key-constant';
import { get } from '../api/request';

const useFetch = () => {

    const appCtx = useContext(AppContext);

    useEffect(() => {
        async function fetchData() {
            console.log('sdasfdsfsd')
            const response = await get(API_POINT)
            if(response.success) {
                appCtx.setRootStateHandler({
                    error: {
                        isError: false,
                        message: ''
                    },
                    flights: response.data,
                    filteredFlights: response.data
                })
            } else {
                appCtx.setRootStateHandler({
                    ...appCtx.rootState,
                    error: {
                        isError: true,
                        message: 'Something went wrong'
                    },
                })
            }        
        }

        fetchData();
    }, [])

}

export default useFetch;
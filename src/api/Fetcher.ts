import api from '../services/api'
import useSWR from 'swr'

export default function fetcher<Data = any, Error = any>(url: string) {
    const { data, error } = useSWR<Data, Error>(url, async url => {
        const response = await api.get(url)
        const data = await response.data;

        return data
    }, {
        revalidateOnReconnect: true
    })

    return { data, error }
}
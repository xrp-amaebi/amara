import { useEffect, useState } from "react";
import { collective } from "../utils/build.functions";

let { fetchItemCount, fetchData } = collective

export default function useItemFetch(page){
    const [fetchCount, setFetchCount] = useState(0)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchItemCount({ setFetchCount })
    }, [])

    useEffect(() => {
        fetchData({ page, setItems, setLoading, setError })
    }, [fetchCount, page])

    // console.log({ fetchCount })
    return { items, count: items.length, fetchCount, loading, error }
}
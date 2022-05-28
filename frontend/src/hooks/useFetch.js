import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json();

                console.log(json)

                if (json) {
                    setData(json.data)
                    setError(json.error)
                } else {
                    setData([]);
                }

                setLoading(false)
            } catch (error) {
                setData([]);
                setError(error)
                setLoading(false)
            }
        }

        fetchData();
    }, [url])

    return {loading, error, data}
}

export default useFetch
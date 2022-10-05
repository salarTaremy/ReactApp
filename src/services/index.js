import { useEffect } from "react"
import axios from axios
import {api,url}from 'common/imports'

const useFetch = url => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        api.get(url.GET_CITY)
        .then((response) => {
          response.value.map((item) => {
            item.label = item.value;
          })
          SetCities(response.value)
        }, (error) => {
          console.error(error);
        });



        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};
import { useState, useEffect, useCallback } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        const controller = new AbortController();
        const { signal } = controller;

        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(url, { signal });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const json = await response.json();
            setData(json);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message);
            }
        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }

        return () => controller.abort();
    }, [url]);

    useEffect(() => {
        const cancelFetch = fetchData();
        return () => {
            cancelFetch.then(abort => abort && abort());
        };
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}
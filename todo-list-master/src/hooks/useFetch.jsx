import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [datafromapi, setdatafromapi] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const request = async () => {
            setIsLoading(true);
            try {
                const req = await fetch(url);
                if (!req.ok) {
                    setIsLoading(false);
                    throw new Error(req.statusText);
                }
                const data = await req.json();
                console.log(data);
                setdatafromapi(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.massage);
                console.log(err.massage);
            }
        };
        request();
    }, [url]);

    return { datafromapi, isLoading, error };
};

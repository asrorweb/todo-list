import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Request = () => {
    let API = "https://jsonplaceholder.typicode.com/todos/1";
    const [api, setApi] = useState(API);
    const { datafromapi, isLoading, error } = useFetch(api);
    return <div></div>;
};

export default Request;

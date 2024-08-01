// src/components/FetchComponent.js
import React from 'react';

import useFetch from '../hooks/useFetch'; 

import { apiUrl } from '../common/comon';

const FetchComponent = ({render}) => {
    const{ data, loading, error } = useFetch(apiUrl.categories, { method: 'GET' }); 
    console.log("data ",data,loading,error);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return render(data);
};

export default FetchComponent;

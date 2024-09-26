import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                setLoading(false);
            })
    }, [])
    return [doctors, loading]
};

export default useDoctors;
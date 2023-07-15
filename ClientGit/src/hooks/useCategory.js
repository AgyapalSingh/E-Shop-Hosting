import { useState, useEffect } from "react";
import axios from "axios";
const url = process.env.REACT_APP_API;

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    //get cat
    const getCategories = async () => {
        try {
            const { data } = await axios.get(`${url}/api/v1/category/get-category`);
            setCategories(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return categories;
}

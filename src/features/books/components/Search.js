import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";

import {
    filterBookList,
} from '../booksSlice';

export default function Search()
{
    const dispatch = useDispatch();
    const ref = useRef()
    const [query, setQuery] = useState('');

    const onChange = e => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        dispatch(filterBookList(query))
    }, [query]);
    useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, []);

    return <>
        <input
            placeholder='Search library'
            onChange={onChange}
            value={query}
            ref={ref}
        />
    </>
}

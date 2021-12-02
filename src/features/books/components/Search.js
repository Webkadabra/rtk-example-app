/** @jsxImportSource @emotion/react */
import 'twin.macro'
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";

import {
    filterBookList,
} from '../booksSlice';
import {SearchInput} from "./SearchInput";

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
    }, [query, dispatch]);
    useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, []);

    return <div tw='p-2 w-full box-border'>
        <SearchInput
            onChange={onChange}
            value={query}
            ref={ref}
        />
    </div>
}

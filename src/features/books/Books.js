import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    fetchBooksLibrary,
    selectBooks,
    selectBooksFiltered,
    selectBooksSearchQuery,
} from './booksSlice';
import List from './components/List';
import {useParams} from "react-router-dom";

export function Books() {
    let params = useParams();
    const library = useSelector(selectBooks);
    const filteredLibrary = useSelector(selectBooksFiltered);
    const searchQuery = useSelector(selectBooksSearchQuery);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksLibrary(params.authorName))
    }, [
        params.authorName,
    ]);

    return <List books={searchQuery ? filteredLibrary : library}/>;
}

/** @jsxImportSource @emotion/react */
import 'twin.macro'

import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookDetails, resetBookDetails, selectBookDetails, selectStatus, Status} from "./booksSlice";
import React, {useEffect} from "react";
import {Loader} from "../layout/components";


export default function BookDetails()
{
    const {bookTitle} = useParams();

    const book = useSelector(selectBookDetails);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBookDetails(bookTitle))
        return () => {
            dispatch(resetBookDetails())
        }
    }, [bookTitle, dispatch]);

    if (!book.title || Status.loading === status) {
        return <Loader />
    }

    return <div tw='shadow-xl border-l border-gray-800 max-w-xl mx-auto mt-10 p-4'>
        <nav tw={'text-sm'}>
            &larr; <Link  to='/'>Library</Link>
        </nav>
        <h2 tw='text-3xl'>{book.title}</h2>
        <dl>
            <dt>Year</dt>
            <dd>{book.year}</dd>
            <dt>Pages</dt>
            <dd>{book.pages}</dd>
            <dt>Author</dt>
            <dd>
                <Link to={`/author/${encodeURI(book.author)}`}>
                    {book.author}
                </Link>
            </dd>
        </dl>
    </div>
}

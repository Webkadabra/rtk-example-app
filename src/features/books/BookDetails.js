import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookDetails, selectBookDetails, selectStatus, Status} from "./booksSlice";
import React, {useEffect, useState} from "react";
import {Loader} from "../layout/components";


export default function BookDetails({id})
{
    let params = useParams();

    const book = useSelector(selectBookDetails);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBookDetails(params.bookTitle))
    }, [params]);

    if (! book || Status.loading === status) {
        return <Loader />
    }

    return <>
        <nav>
            <Link  to='/'>Books</Link> &rarr; Book details
        </nav>
        <h2>{book.title}</h2>
        <dl>
            <dt>Year</dt>
            <dd>{book.year}</dd>
            <dt>Pages</dt>
            <dd>{book.pages}</dd>
            <dt>Author</dt>
            <dd>
                <Link to={`/author/${encodeURI(book.author)}`}
                      key={id}>
                    {book.author}
                </Link>
            </dd>
        </dl>
    </>
}

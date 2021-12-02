import ListItem from "./ListItem";
import Search from "./Search";
import { Loader } from "../../layout/components";

import {useSelector} from "react-redux";
import {selectStatus, Status} from "../booksSlice";
import React from "react";

export default function List({books})
{
    const status = useSelector(selectStatus);

    return <div>
        <Search />
        {Status.loading === status && (
            <Loader />
        )}
        {Status.idle === status && (
            books.map(({title, author, link, pages, year}, index) =>
                <ListItem
                    title={title}
                    author={author}
                    link={link}
                    pages={pages}
                    year={year}
                    key={`book_${index}`}
                />
            )
        )}

    </div>
}

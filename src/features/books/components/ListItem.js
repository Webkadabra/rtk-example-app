import {Link} from "react-router-dom";
import React from "react";

export default function ListItem({id, title, author, pages, year}) {
    return (
        <div style={{
            border: '1px solid #cfcfcf',
            borderWidth: '1px 1px 0 1px',
            margin: 0,
            padding: '1.5em'
        }}>
            <Link to={`/book/${encodeURI(title)}`}>
                <h3 style={{margin: 0, padding:2}}>{title}</h3>
            </Link>
        </div>
    );
}

import {Link} from "react-router-dom";
import React from "react";

export default function Error404() {
    return <>
        <h2>404 - Page not found</h2>
        <p>We couldn't find a page you're looking for.</p>
        <p>You should check out <Link to="/">the whole library</Link>.</p>
</>
}

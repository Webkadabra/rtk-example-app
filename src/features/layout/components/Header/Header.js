import React from "react";
import logo from '../../../../logo.svg';
import {Link} from "react-router-dom";

export default function Header()
{
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            { /* <Counter /> */ }

            <nav>
                <Link to="/">Library</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/no-route">[error]</Link>
            </nav>

        </header>
    );
}

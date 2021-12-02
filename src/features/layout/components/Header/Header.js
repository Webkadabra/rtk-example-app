/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from "react";

import logo from '../../../../logo.svg';
import {NavItem} from "../NavItem";

export default function Header()
{
    return (
        <div tw="relative bg-gray-200">
            <div tw="relative z-20 shadow">
                <header tw="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                    <img src={logo} tw="h-8 w-auto sm:h-10 mr-4" alt="logo" />
                    <div tw="flex-1 flex items-center justify-between">
                        <nav tw="flex space-x-10">
                            <NavItem to="/" >Library</NavItem>
                            <NavItem to="/about" >About</NavItem>
                            <NavItem to="/no-route">[error]</NavItem>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
}

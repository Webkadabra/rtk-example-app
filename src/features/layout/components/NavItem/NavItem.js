import {Link} from "react-router-dom";
import React from "react";

export function NavItem({children, to})
{
    return <Link to={to} tw={'text-black no-underline'}>{children}</Link>;
}

/** @jsxImportSource @emotion/react */
import 'twin.macro'
import * as React from "react";

export const SearchInput = React.forwardRef(({value, onChange}, ref) => (
    <>
        <input
            placeholder='Search library'
            onChange={onChange}
            value={value}
            ref={ref}
            tw='box-border w-full md:w-80 text-lg rounded p-1.5 border border-gray-400'
        />
    </>
));

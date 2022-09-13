import React from 'react';

const Button = ({children}) => {
    return (
        <button class="btn btn-secondary text-white font-semibold">{children}</button>
    );
};

export default Button;
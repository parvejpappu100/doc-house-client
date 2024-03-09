import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "bg-[#F7A582] text-white rounded-none font-semibold hover:bg-[#F7A582]" : "hover:bg-[#07332F] hover:text-[#F7A582] "
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
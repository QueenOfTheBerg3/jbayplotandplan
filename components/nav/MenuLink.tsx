// A link displayed in the menu on desktop devices

import { ClassAttributes, HTMLAttributes } from 'react';

const MenuLink = ({
    children,
    anchor,
    to,
    openOutside,
    onClick,
}: {
    children: any;
    onClick?: (e) => void;
    anchor?: boolean;
    to?: string;
    openOutside?: boolean;
}) => {
    const classes: string =
        'font-bold text-white text-md shadow bg-secondary bg-opacity-20 focus:ring-4 text-gray-50 p-1 pl-5 pr-5 w-auto m-1 mt-2 mb-2 text-right';

    if (anchor) {
        return (
            <a className={classes} href={to} target={openOutside && '_blank'}>
                {children}
            </a>
        );
    } else {
        return (
            <a className={classes} href="#" onClick={onClick}>
                {children}
            </a>
        );
    }
};

export default MenuLink;

// Displays a dropdown list of menu items
// =------------------------------------=

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faChevronCircleRight,
    faChevronRight,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { MenuButton } from '../buttons';

const MenuDropdown = ({
    children,
    label,
}: {
    children: any;
    label: string;
}) => {
    const classes: string =
        'font-bold text-white text-lg shadow bg-white bg-opacity-10 p-1 w-auto focus:ring-4 focus:outline-none';
    const [open, setOpen] = useState(false);

    const ToggleOpen = (e) => {
        setOpen(!open);
    };

    return (
        <div className="relative flex-1 flex flex-col bg-opacity-50 z-30">
            <button className={classes} onClick={ToggleOpen}>
                <div className="flex z-20 w-full relative justify-between text-white">
                    <div>
                        <FontAwesomeIcon
                            className={`ml-2 left-0 absolute top-0 right-0 bottom-0 h-full transform transition duration-200 ${
                                open ? ' rotate-90' : ' rotate-0'
                            }`}
                            icon={faChevronRight}
                        />
                    </div>
                    <div className="flex flex-col">{label}</div>
                </div>
            </button>

            <div
                className={`absolute z-20 flex flex-col shadow-xl w-full top-full bg-primary text-white p-2 ${
                    open ? '' : 'hidden'
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default MenuDropdown;

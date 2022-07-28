import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import isMobile from '../../../util/isMobile';

const PhoneButton = ({ phoneNumber }: { phoneNumber: string }) => {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        setHidden(!isMobile());
    }, []);

    const href = `tel:${phoneNumber}`;

    return (
        <a
            href={href}
            target="_blank"
            className={`${
                hidden ? 'hidden' : ''
            } text-3xl border-primary border p-1 m-1 w-10 rounded shadow block focus:ring-2`}
        >
            <FontAwesomeIcon icon={faPhone} />
        </a>
    );
};

export default PhoneButton;

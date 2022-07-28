import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import isMobile from '../../../util/isMobile';

const WhatsAppButton = ({ href }: { href: string }) => {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        setHidden(!isMobile());
    }, []);

    return (
        <a
            href={href}
            className={`${
                hidden ? 'hidden' : ''
            } text-3xl border-primary border p-1 m-1 w-10 rounded shadow block focus:ring-2`}
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
};
export default WhatsAppButton;

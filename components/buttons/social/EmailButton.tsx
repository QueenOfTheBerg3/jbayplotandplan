import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EmailButton = ({ email }: { email: string }) => (
    <a
        href={`mailto:${email}`}
        className="text-3xl border-primary border p-1 m-1 w-10 rounded shadow block focus:ring-2"
    >
        <FontAwesomeIcon icon={faEnvelope} />
    </a>
);

export default EmailButton;

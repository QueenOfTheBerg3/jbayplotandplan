// Shows a "feature": Sided content on Desktop, stacked on mobile.
// Usually used to display an image on one half and text on the other.

import React from 'react';

const Feature = ({
    left,
    right,
    id = undefined,
}: {
    left: React.ReactNode;
    right: React.ReactNode;
    id?: string;
}) => (
    <section
        id={id}
        className="flex flex-col w-full p-2 md:flex-row md:justify-between md:place-items-center"
    >
        <div className={`w-full lg:w-1/2 p-2 lg:m-2`}>{left}</div>
        <div className="w-full lg:w-1/2 lg:m-2 p-2">{right}</div>
    </section>
);

export default Feature;

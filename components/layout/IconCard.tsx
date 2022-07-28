import { faDAndDBeyond } from '@fortawesome/free-brands-svg-icons';
import {
    faSmile,
    faSmileBeam,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNodeArray } from 'react';
import { Heading, Text } from '../typography';

const IconCardRow = ({ children }: { children: any }) => {
    return (
        <div className="flex flex-col flex-wrap md:flex-row justify-evenly">
            {children}
        </div>
    );
};

const IconCard = ({
    title,
    icon,
    children,
    shadow = false,
}: {
    title: string;
    icon: IconDefinition;
    children: React.ReactNode;
    shadow?: boolean;
}) => {
    return (
        <section
            className={`flex flex-col p-4 text-center lg:w-64 sm:m-2 mt-4 ${
                shadow && 'shadow'
            }`}
        >
            <FontAwesomeIcon
                className="text-primary w-24 h-24 mx-auto"
                icon={icon}
                size="5x"
            />
            <Heading>{title}</Heading>
            <br />
            <div className="flex flex-col text-center align-center align-middle">
                {children}
            </div>
        </section>
    );
};

IconCard.Row = IconCardRow;

export default IconCard;

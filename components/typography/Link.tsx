import NextLink from 'next/link';

const Link = ({ children, href }) => (
    <NextLink href={href}>
        <a className="text-secondary font-bold cursor-pointer focus:ring-2 hover:underline transition">
            {children}
        </a>
    </NextLink>
);

export default Link;

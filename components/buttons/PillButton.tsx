const PillButton = ({
    onClick,
    label,
    primary = false,
    link = false,
    to = '',
}: {
    onClick?: (e) => void;
    primary?: boolean;
    label: string;
    link?: boolean;
    to?: string;
}) => {
    const style = `shadow-sm text-center m-1 p-2 text-md font-bold rounded-full transition focus:outline-none focus:ring-4 ${
        primary
            ? 'bg-secondary text-white border border-indigo-500 hover:shadow'
            : 'bg-white border border-black text-black hover:bg-indigo-100 hover:shadow'
    }`;
    return link ? (
        <a href={to} className={style}>
            {label}
        </a>
    ) : (
        <button className={style} onClick={onClick}>
            {label}
        </button>
    );
};

export default PillButton;

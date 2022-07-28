const MenuButton = ({
    onClick,
    isOpen = false,
    mini = false,
}: {
    onClick?: (e) => void;
    isOpen: boolean;
    mini?: boolean;
}) => {
    const burger_styles = {
        line1: {
            strokeDasharray: '17 60',
            strokeDashoffset: '0',
        },
        line2: {
            strokeDasharray: '18 60',
            strokeDashoffset: '0',
        },
        line3: {
            strokeDasharray: '17 60',
            strokeDashoffset: '0',
        },
    };

    const x_styles = {
        line1: {
            strokeDasharray: '20 60',
            strokeDashoffset: '-37.9',
        },
        line2: {
            strokeDasharray: '18 60',
            strokeDashoffset: '18',
            color: 'transparent',
        },
        line3: {
            strokeDasharray: '20 60',
            strokeDashoffset: '-37.9',
        },
    };

    const style = mini ? {} : { width: 56, height: 56 };

    return (
        <button
            className="block bg-transparent relative p-2"
            style={{ width: 56, height: 56 }}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.5 26.5">
                <path
                    d="M4.9 14.3H21.6"
                    className="stroke-2 stroke-current"
                    style={{
                        transition: '0.5s ease-in-out',
                        fill: 'none',
                        ...(isOpen ? x_styles.line2 : burger_styles.line2),
                    }}
                />
                <path
                    d="M4.9 6.5H21.6c0 0 2 0.8 3 4.9 0.6 2.6 1.9 11.2-1.3 11.4C21.3 22.9 20 21.5 20 21.5l-13-16"
                    className="stroke-2 stroke-current"
                    style={{
                        transition: '0.5s ease-in-out',
                        fill: 'none',
                        ...(isOpen ? x_styles.line1 : burger_styles.line1),
                    }}
                />
                <path
                    d="M4.9 22H21.6c0 0 2-0.8 3-4.9 0.6-2.6 1.9-11.2-1.3-11.4C21.3 5.6 20 7.1 20 7.1l-13 16"
                    className="stroke-2 stroke-current"
                    style={{
                        transition: '0.5s ease-in-out',
                        fill: 'none',
                        ...(isOpen ? x_styles.line3 : burger_styles.line3),
                    }}
                />
            </svg>
        </button>
    );
};

export default MenuButton;

const TinyHeading = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <h3 className={'text-md font-bold mt-4 ' + className}>{children}</h3>;

const SmallHeading = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <h3 className={'text-xl font-bold mt-4 ' + className}>{children}</h3>;

const LargeHeading = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <h1 className={'text-3xl font-bold mt-4 ' + className}>{children}</h1>;

const Heading = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <h2 className={'text-2xl font-bold mt-4 ' + className}>{children}</h2>;

Heading.Large = LargeHeading;
Heading.Small = SmallHeading;
Heading.Tiny = TinyHeading;

export default Heading;

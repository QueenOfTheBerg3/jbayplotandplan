// Normal text paragraph

const commonStyle = 'mb-4';

const BoldText = ({ children }) => (
    <strong className={commonStyle}>{children}</strong>
);
const ItalicText = ({ children }) => (
    <em className={commonStyle}>{children}</em>
);
const BoldItalicText = ({ children }) => (
    <BoldText>
        <ItalicText>{children}</ItalicText>
    </BoldText>
);

const Text = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <p className={`${commonStyle} ${className}`}>{children}</p>;

Text.Bold = BoldText;
Text.Italic = ItalicText;
Text.BoldItalic = BoldItalicText;

export default Text;

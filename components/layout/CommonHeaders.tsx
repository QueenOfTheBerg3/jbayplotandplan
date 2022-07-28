const CommonHeaders = ({ url, title }: { url: string; title: string }) => {
    return (
        <>
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content={`Jeffreys Bay Plot and Plan - ${title}`}
            />
            <meta property="og:description" content="Your master builders" />
            <meta
                property="description"
                content="Your master builders - whatever your needs, big or small, we are here to help!"
            />
            <meta
                property="og:image"
                content="https://jbayplotandplan.co.za/images/full_logo2_contrast2.png"
            />
        </>
    );
};

export default CommonHeaders;

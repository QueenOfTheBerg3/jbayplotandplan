// Represents a photo in the site layout (Including lightbox features)

import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type PhotoType = {
    src: string;
    src_thumb?: string;
    width?: number;
    height?: number;
    alt?: string;
};

const Photo = ({
    src,
    src_thumb,
    width,
    height,
    alt,
    zoomable = false,
    hoverEffects = false,
    onClick,
    outline = false,
}: {
    src: string;
    src_thumb?: string;
    width?: number;
    height?: number;
    alt?: string;
    zoomable?: boolean;
    hoverEffects?: boolean;
    onClick?: (e) => void;
    outline?: boolean;
}) => {
    const imageSource = src_thumb || src;
    const [open, setOpen] = useState(false);

    const openLightbox = (e) => {
        if (zoomable && !onClick) {
            setOpen(true);
        }
        if (onClick) {
            onClick(e);
        }
    };

    const classNames = `flex flex-col justify-center w-content h-content transform scale-100 transition-transform origin-center ${
        (hoverEffects || zoomable) &&
        'hover:ring cursor-pointer hover:scale-105'
    } ${outline && 'border border-gray-400'}`;

    if (src_thumb) {
        return (
            <div onClick={openLightbox} className={classNames}>
                <LazyLoadImage
                    src={imageSource}
                    width={width}
                    height={height}
                    alt={alt}
                    effect="opacity"
                />
                {open && (
                    <Lightbox
                        mainSrc={src}
                        onCloseRequest={() => setOpen(false)}
                    />
                )}
            </div>
        );
    } else {
        return (
            <div onClick={openLightbox} className={classNames}>
                <img
                    src={imageSource}
                    alt={alt}
                    width={width}
                    height={height}
                />
                {open && (
                    <Lightbox
                        mainSrc={imageSource}
                        onCloseRequest={() => setOpen(false)}
                    />
                )}
            </div>
        );
    }
};

export default Photo;

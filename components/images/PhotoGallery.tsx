// Photo Gallery Layout - Masonry Layout?
import { faImages } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Photo, { PhotoType } from './Photo';

const PhotoGallery = ({ photos }: { photos: PhotoType[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const ClickHandler = (key) => (e) => {
        // Do thing with click
        setCurrentIndex(key);
        setIsOpen(true);
    };

    const Close = () => {
        setIsOpen(false);
    };

    const Next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    const Prev = () => {
        setCurrentIndex((currentIndex + photos.length - 1) % photos.length);
    };

    return (
        <section className="grid p-2 grid-flow-row gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mx-auto">
            {photos &&
                photos.map((photo, idex) => {
                    return (
                        <Photo
                            {...photo}
                            key={idex}
                            hoverEffects={true}
                            onClick={ClickHandler(idex)}
                        />
                    );
                })}
            {isOpen && (
                <Lightbox
                    mainSrc={photos[currentIndex].src}
                    nextSrc={photos[(currentIndex + 1) % photos.length].src}
                    prevSrc={
                        photos[
                            (currentIndex + photos.length - 1) % photos.length
                        ].src
                    }
                    onCloseRequest={Close}
                    onMoveNextRequest={Next}
                    onMovePrevRequest={Prev}
                />
            )}
        </section>
    );
};

export default PhotoGallery;

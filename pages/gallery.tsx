import Head from 'next/head';
import React from 'react';
import { PhotoGallery } from '../components/images';
import { PhotoType } from '../components/images/Photo';
import CommonHeaders from '../components/layout/CommonHeaders';
import FooterFinal from '../components/layout/FooterFinal';
import { NavBar } from '../components/nav';
import { Heading, Text } from '../components/typography';

const PhotoData = (src: string, thumb: string, alt?: string) => ({
    src_thumb: thumb,
    src: src,
    alt: alt,
});

export default function Gallery() {
    const photoList: PhotoType[] = [
        PhotoData(
            '/images/2021/20180315_164411.jpg',
            '/images/2021/20180315_164411_scaled.jpg',
            'Photo of a house under construction'
        ),
        PhotoData(
            '/images/2021/20180709_140955.jpg',
            '/images/2021/20180709_140955_scaled.jpg',
            'Photo of a house under construction'
        ),
        PhotoData(
            '/images/2021/20180709_162841.jpg',
            '/images/2021/20180709_162841_scaled.jpg',
            'Photo of a house under construction'
        ),
        PhotoData(
            '/images/2021/20180731_165111.jpg',
            '/images/2021/20180731_165111_scaled.jpg',
            'Photo of a completed house'
        ),
        PhotoData(
            '/images/2021/20180803_132440.jpg',
            '/images/2021/20180803_132440_scaled.jpg',
            'Photo of a wall being painted'
        ),
        PhotoData(
            '/images/2021/20180821_093716.jpg',
            '/images/2021/20180821_093716_scaled.jpg',
            'Photo of a garden path'
        ),
        PhotoData(
            '/images/2021/house_painting.jpg',
            '/images/2021/house_painting_scaled.jpg',
            'Photo of a painted house'
        ),
        PhotoData(
            '/images/original-photos/001.jpg',
            '/images/original-photos/001-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/002.jpg',
            '/images/original-photos/002-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/003.jpg',
            '/images/original-photos/003-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/004.jpg',
            '/images/original-photos/004-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/005.jpg',
            '/images/original-photos/005-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/006.jpg',
            '/images/original-photos/006-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/007.jpg',
            '/images/original-photos/007-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/008.jpg',
            '/images/original-photos/008-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/009.jpg',
            '/images/original-photos/009-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/010.jpg',
            '/images/original-photos/010-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/011.jpg',
            '/images/original-photos/011-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/012.jpg',
            '/images/original-photos/012-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/013.jpg',
            '/images/original-photos/013-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/014.jpg',
            '/images/original-photos/014-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/015.jpg',
            '/images/original-photos/015-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/017.jpg',
            '/images/original-photos/017-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/018.jpg',
            '/images/original-photos/018-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/019.jpg',
            '/images/original-photos/019-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/020.jpg',
            '/images/original-photos/020-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/021.jpg',
            '/images/original-photos/021-scaled.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/01.jpg',
            '/images/original-photos/01.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/02.jpg',
            '/images/original-photos/02.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/03.jpg',
            '/images/original-photos/03.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/04.jpg',
            '/images/original-photos/04.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/05.jpg',
            '/images/original-photos/05.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/06.jpg',
            '/images/original-photos/06.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/07.jpg',
            '/images/original-photos/07.jpg',
            'Photo'
        ),
        PhotoData(
            '/images/original-photos/08.jpg',
            '/images/original-photos/08.jpg',
            'Photo'
        ),
    ];

    return (
        <div
            className="relative w-full h-screen"
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '56px 1fr',
            }}
        >
            <header>
                <Head>
                    <title>Component Library</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <NavBar showGallery={false} showHome={true} />
                <CommonHeaders
                    url="https://jbayplotandplan/gallery"
                    title="Photo Gallery"
                />
            </header>
            <main className="container w-full sm:w-2/3 mx-auto text-center">
                <section>
                    <Heading>Photo Gallery</Heading>
                    <Text>Tap or Click to view photos</Text>
                </section>
                <PhotoGallery photos={photoList} />
            </main>

            <FooterFinal />
        </div>
    );
}

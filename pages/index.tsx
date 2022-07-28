import {
    faHome,
    faLock,
    faPaintBrush,
    faPaintRoller,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
    faSmile,
    faFileAlt,
    faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import Head from 'next/head';
import React, { useState } from 'react';
import FeatureBox from '../components/featurebox/FeatureBox';
import { Feature, IconCard, Tab } from '../components/layout';
import FooterFinal from '../components/layout/FooterFinal';
import { NavBar } from '../components/nav';
import { Heading, Link, Text } from '../components/typography';
import { Photo } from '../components/images';
import { PillButton } from '../components/buttons';
import { FacebookButton, TwitterButton } from '../components/buttons/social';
import CommonHeaders from '../components/layout/CommonHeaders';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import SiteData from '../components/globals';

export default function Home() {
    const [selectedServiceTab, setSelectedServiceTab] = useState(0);

    const selectServiceTab = (tab: number) => () => {
        setSelectedServiceTab(tab);
    };

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
                    <title>Home - Jeffreys Bay Plot and Plan</title>
                    <link rel="icon" href="/favicon.ico" />
                    <CommonHeaders
                        url="https://jbayplotandplan/"
                        title="Home"
                    />
                </Head>

                <NavBar />
            </header>

            <main>
                <section id="content">
                    {/*Primary Feature Box*/}
                    <FeatureBox bgImage="/images/back_cover_2021.jpg" />

                    {/*Accolades*/}
                    <section
                        id="content-prolist"
                        className="flex flex-col flex-wrap sm:mx-auto sm:grid sm:grid-cols-4 xl:flex xl:flex-row justify-center justify-items-center"
                    >
                        <IconCard shadow icon={faShieldAlt} title="Trusted">
                            <Text>
                                <Text.Bold>
                                    Jeffreys Bay Plot &amp; Plan
                                </Text.Bold>{' '}
                                has a long and distinguished history of
                                delivering best-value building services since
                                1992.
                            </Text>
                        </IconCard>
                        <IconCard
                            shadow
                            icon={faFileAlt}
                            title="NHBRC Registered"
                        >
                            <Text>
                                The NHBRC certifies builders who meet prescribed
                                criteria in terms of technical competence,
                                experience and financial capability.
                            </Text>
                        </IconCard>
                        <IconCard
                            shadow
                            icon={faUserCircle}
                            title="Owner Managed"
                        >
                            <Text>
                                No more headaches and nasty surprises dealing
                                with the absent contractor. Brent is hands-on
                                and manages all operations.
                            </Text>
                        </IconCard>
                        <IconCard shadow icon={faSmile} title="Peace of Mind">
                            <Text>
                                <Text.Bold>
                                    Jeffreys Bay Plot &amp; Plan
                                </Text.Bold>{' '}
                                works to bring exceptional value, quality
                                workmanship and peace of mind for you, the
                                client.
                            </Text>
                        </IconCard>
                    </section>

                    {/* About Feature */}
                    <Feature
                        left={
                            <div className="flex justify-center  p-4">
                                <Photo
                                    width={480}
                                    src="/images/full_logo2.png"
                                />
                            </div>
                        }
                        right={
                            <section>
                                <Text>
                                    <Text.BoldItalic>
                                        What's the most important step in
                                        renovation or a new build?
                                    </Text.BoldItalic>
                                </Text>
                                <Text>
                                    Many say it's choosing the right builder.
                                    Any construction project is a huge
                                    undertaking, so it's important to find a
                                    builder that you can trust to bring your
                                    vision to life, as well as keep the process
                                    under control from start to finish.
                                </Text>
                                <Text>
                                    Although a construction job is never without
                                    surprises and challenges, a builder who is a
                                    good fit for your specific project will make
                                    these far easier to handle.
                                </Text>
                            </section>
                        }
                    />

                    {/* Paint Section Added November 2021 */}
                    <section id="paint-section" className="text-center mt-4">
                    <div className="flex justify-center">
                        <Photo
                            width={880}
                            zoomable
                            src="/photos/old/painting-1280x1278.jpg"
                        />
                        
                    </div>
                    <p className="text-center mt-4"> <br></br> </p>
                </section>

                    {/* Service Tabs */}
                    <section id="service-tabs" className="mt-4">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-center">
                                <PillButton
                                    primary={selectedServiceTab === 0}
                                    onClick={selectServiceTab(0)}
                                    label="Construction"
                                />
                                <PillButton
                                    primary={selectedServiceTab === 1}
                                    onClick={selectServiceTab(1)}
                                    label="Painting"
                                />
                                <PillButton
                                    primary={selectedServiceTab === 2}
                                    onClick={selectServiceTab(2)}
                                    label="Security"
                                />
                            </div>
                            <div className="p-4 flex flex-col place-items-center justify-center">
                                <Tab.Container
                                    tabList={[
                                        <IconCard
                                            icon={faHome}
                                            title="CONSTRUCTION"
                                        >
                                            <ul className="list-disc list-inside">
                                                <li>All Building Works</li>
                                            </ul>
                                        </IconCard>,
                                        <IconCard
                                            icon={faPaintRoller}
                                            title="PAINTING"
                                        >
                                            <ul className="list-disc list-inside">
                                                <li>Interior painting</li>
                                                <li>Exterior painting</li>
                                                <li>
                                                    Allied trades e.g.: Tiling,
                                                    Plastering, Carpentry,
                                                    etc...
                                                </li>
                                            </ul>
                                        </IconCard>,
                                        <IconCard
                                            icon={faLock}
                                            title="SECURITY"
                                        >
                                            <Text>
                                                <Text.Bold>
                                                    SECURITY GATES &amp; BURGLAR
                                                    BARS
                                                </Text.Bold>
                                            </Text>
                                            <ul className="list-disc list-inside">
                                                <li>
                                                    Trellis Slam-lock Security
                                                    Gates
                                                </li>
                                                <li>
                                                    Gates manufactured from
                                                    Alloyed Aluminium especially
                                                    for coastal conditions
                                                </li>
                                                <li>
                                                    Manufactured to fit all size
                                                    openings
                                                </li>
                                                <li>
                                                    Slam-lock expandable gates
                                                </li>
                                                <li>Burglar bars</li>
                                            </ul>
                                        </IconCard>,
                                        ,
                                    ]}
                                    currentTab={selectedServiceTab}
                                />

                                <div className="text-center p-4">
                                    <Text>
                                        <Text.Bold>
                                            <Link href="/contact">
                                                GET A QUOTE!
                                            </Link>
                                        </Text.Bold>
                                    </Text>
                                    <Text>
                                        <Text.Bold>
                                            Or call us at{' '}
                                            <Link
                                                href={`tel:${SiteData.phone1}`}
                                            >
                                                084 469 7558
                                            </Link>{' '}
                                            or{' '}
                                            <Link
                                                href={`tel:${SiteData.phone2}`}
                                            >
                                                079 383 2044
                                            </Link>
                                        </Text.Bold>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature 2 */}
                    <Feature
                        left={
                            <div className="flex justify-center">
                                <Photo
                                    width={320}
                                    zoomable
                                    src="/photos/old/feature2.jpg"
                                />
                            </div>
                        }
                        right={
                            <section
                                id="about-section"
                                className="text-center sm:text-left"
                            >
                                <Heading>
                                    Jeffreys Bay Plot &amp; Plan: Your Master
                                    Builder
                                </Heading>
                                <Heading.Tiny className="uppercase text-gray-500">
                                    We work to ensure a process that is as
                                    smooth as possible
                                </Heading.Tiny>
                                <div className="p-2 pl-4">
                                    <Text>
                                        <Text.BoldItalic>
                                            Your local neighbourhood building
                                            expert on call!
                                        </Text.BoldItalic>
                                    </Text>
                                    <Text>
                                        At Jeffreys Bay Plot &amp; Plan, the job
                                        starts well before the first brick is
                                        laid. We guide and advise so that you
                                        can make the best decisions to get the
                                        most value.
                                    </Text>
                                    <Text>
                                        We also obtain the necessary permits and
                                        have skills that go far beyond
                                        construction.
                                    </Text>
                                </div>
                                <div className="p-2 pl-4">
                                    <Text>
                                        <Text.Bold>
                                            Whatever your needs, big or small,
                                            we are are here to help
                                        </Text.Bold>
                                    </Text>

                                    <Text>
                                        We keep tabs on local zoning
                                        regulations, building codes and other
                                        legalities, inspect work for problems
                                        along the way and perform dozens of
                                        other roles that are essential in giving
                                        you a quality and durable building.
                                    </Text>
                                    <Text>
                                        We ensure that you are happy and 100%
                                        satisfied with the quality of our work.
                                        No matter how complicated or difficult
                                        the job, we are here to help.
                                    </Text>
                                </div>
                                <div>
                                    <Text>
                                        <Text.Bold>
                                            Talk to us! Complete our{' '}
                                            <Link href="/contact">
                                                Contact Form
                                            </Link>{' '}
                                            or phone us at either{' '}
                                            <Link
                                                href={`tel:${SiteData.phone1}`}
                                            >
                                                084 469 7558
                                            </Link>{' '}
                                            or{' '}
                                            <Link
                                                href={`tel:${SiteData.phone2}`}
                                            >
                                                079 383 2044
                                            </Link>
                                        </Text.Bold>
                                    </Text>
                                </div>
                            </section>
                        }
                    />
                </section>

                <section id="social-shares" className="text-center mt-4">
                    <Heading.Small>SHARE THIS PAGE:</Heading.Small>
                    <span className="flex flex-row justify-center text-primary">
                        <FacebookShareButton url="https://jbayplotandplan.co.za">
                            <FacebookButton />
                        </FacebookShareButton>
                        <TwitterShareButton url="https://jbayplotandplan.co.za">
                            <TwitterButton />
                        </TwitterShareButton>
                    </span>
                </section>

                <FooterFinal />
            </main>
        </div>
    );
}

import React from 'react';
import {
    EmailButton,
    FacebookButton,
    PhoneButton,
    WhatsAppButton,
} from '../buttons/social';
import SiteData from '../globals';
import { Heading, Text, Link } from '../typography';
import Footer from './Footer';

const FooterFinal = () => {
    return (
        <Footer>
            <div className="w-full flex flex-col sm:flex-row-reverse sm:justify-between">
                <section className="text-center">
                    <Heading.Tiny>Contact Us:</Heading.Tiny>
                    <span className="flex flex-row justify-evenly">
                        <EmailButton email={SiteData.email} />
                        <PhoneButton phoneNumber="" />
                    </span>
                </section>
                <section className="text-center sm:text-left">
                    <Heading.Tiny>Jeffreys Bay Plot &amp; Plan</Heading.Tiny>
                    <Text>
                        25 Magnolia Circle, Wavecrest, Jeffreys Bay, 6330, South
                        Africa
                    </Text>
                    <Text>
                        <Text.Italic>
                            © Copyright 2020 Jeffreys Bay Plot &amp; Plan - All
                            Rights Reserved
                        </Text.Italic>
                    </Text>
                    <Text>
                        <Text.Italic>
                            Contact us at{' '}
                            <Link href={`tel:${SiteData.phone1}`}>
                                084 469 7558
                            </Link>{' '}
                            ,{' '}
                            <Link href={`tel:${SiteData.phone2}`}>
                                079 383 2044
                            </Link>{' '}
                            or email us at{' '}
                            <Link href={`mailto:${SiteData.email}`}>
                                admin@jbayplotandplan.co.za
                            </Link>
                        </Text.Italic>
                    </Text>
                </section>
            </div>
        </Footer>
    );
};

export default FooterFinal;

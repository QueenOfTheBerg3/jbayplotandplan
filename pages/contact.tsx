import Head from 'next/head';
import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Button } from '../components/buttons';
import FooterFinal from '../components/layout/FooterFinal';
import { NavBar } from '../components/nav';
import { Heading, Link, Text } from '../components/typography';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import CommonHeaders from '../components/layout/CommonHeaders';
import LoadingSpinner from '../components/LoadingSpinner';
import SiteData from '../components/globals';

export default function Contact() {
    const textInputStyle = 'p-2 border border-gray-500 rounded';
    const labelStyle = 'text-sm font-bold w-full text-left mt-4 mb-1';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [fieldsValid, setFieldsValid] = useState(false);
    const [captchaValue, setCaptchaValue] = useState('');

    const [busy, setBusy] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(null);

    const captchaRef = useRef();
    const formRef = useRef();

    const onCaptchaChange = (value: string) => {
        setCaptchaValue(value);
    };

    useEffect(() => {
        if (name.length > 0 && email.length > 0 && message.length > 0) {
            setFieldsValid(true);
        } else {
            setFieldsValid(false);
        }
    }, [name, email, phone, message]);

    const formSubmitOverride = (ev: FormEvent) => {
        ev.preventDefault();
        handleSendClick(ev);
    };

    const doSubmit = (captchaToken: string) => {
        const endpoint = `/api/contact.php`;

        setBusy(true);
        axios
            .post(endpoint, {
                fname: name,
                email: email,
                fphone: phone,
                message: message,
                token: captchaToken,
            })
            .then((res) => {
                if (!res.data[0]?.sent) {
                    setError(true);
                    console.error(res.data);
                }
                setDone(true);
                setBusy(false);
            })
            .catch((err) => {
                setDone(true);
                setBusy(false);
                setError(true);
                console.error(err);
            });
    };

    const handleChanges = (name: string) => (
        ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        switch (name) {
            case 'name':
                setName(ev.target.value);
                break;
            case 'email':
                setEmail(ev.target.value);
                break;
            case 'phone':
                setPhone(ev.target.value);
                break;
            case 'message':
                setMessage(ev.target.value);
                break;
            default:
                break;
        }
    };

    // reCaptcha implementation - hacky. Thanks Google.
    const SITE_KEY = '6Lc9ZykaAAAAAF_PP4lC9AXIzD6jQ96hDbuPi6xL';

    useEffect(() => {
        const loadURLScript = (id, url, callback) => {
            const doesScriptExist = document.getElementById(id);
            if (!doesScriptExist) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                script.id = id;
                script.onload = () => {
                    if (callback) {
                        callback();
                    }
                };
                document.body.appendChild(script);
            } else {
                if (callback) {
                    callback();
                }
            }
        };
        loadURLScript(
            'recaptcha-script',
            `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}&ver=2.0`,
            () => {}
        );
    }, []);

    const handleSendClick = (ev) => {
        ev.preventDefault();
        if (window['grecaptcha']) {
            const grecaptcha = window['grecaptcha'];
            setBusy(true);
            grecaptcha.execute(SITE_KEY, { action: 'submit' }).then((token) => {
                doSubmit(token);
            });
        }
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
                    <title>Contact Us</title>
                    <link rel="icon" href="/favicon.ico" />
                    <CommonHeaders
                        url="https://jbayplotandplan/contact"
                        title="Contact Us"
                    />
                </Head>

                <NavBar
                    showGallery={true}
                    showHome={true}
                    showContact={false}
                />
            </header>

            <main className="container w-full sm:w-2/3 mx-auto text-center">
                <section>
                    <Heading.Large>Contact Us</Heading.Large>
                    <Heading.Small className="text-gray-800">
                        Email us to request a quote, callback or make general
                        enquiries
                    </Heading.Small>
                    <hr />

                    {busy && (
                        <div className="w-full h-full mt-8 mb-8 sm:mb-32 sm:mt-32 flex flex-row justify-center">
                            <LoadingSpinner />
                        </div>
                    )}

                    {!busy && (
                        <section>
                            {error && (
                                <Heading.Small className="text-red-800">
                                    An Error Occurred!
                                </Heading.Small>
                            )}
                            {!error && <Heading.Small>Success!</Heading.Small>}
                            <br />
                            {error && (
                                <Text>
                                    Please try again later or email us directly
                                    at{' '}
                                    <Link href={`mailto:${SiteData.email}`}>
                                        admin@jbayplotandplan.co.za
                                    </Link>
                                </Text>
                            )}
                            {!error && (
                                <Text>
                                    We'll get back to you as soon as we are
                                    able!
                                </Text>
                            )}
                            <Text>
                                <Link href="/">Back to Home Page</Link>
                            </Text>
                        </section>
                    )}
                    {!busy && !done && (
                        <form
                            ref={formRef}
                            className="container mx-auto p-4 w-full sm:w-2/3 flex flex-col"
                            onSubmit={formSubmitOverride}
                        >
                            <label htmlFor="sender-name" className={labelStyle}>
                                Your Name:
                            </label>
                            <input
                                type="text"
                                id="sender-name"
                                className={textInputStyle}
                                placeholder="Your Name"
                                required
                                value={name}
                                onChange={handleChanges('name')}
                            ></input>

                            <label
                                htmlFor="sender-email"
                                className={labelStyle}
                            >
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="sender-email"
                                className={textInputStyle}
                                placeholder="Email Address"
                                required
                                value={email}
                                onChange={handleChanges('email')}
                            ></input>

                            <label
                                htmlFor="sender-cellphone"
                                className={labelStyle}
                            >
                                Cellphone Number (Optional):
                            </label>
                            <input
                                type="phone"
                                id="sender-cellphone"
                                className={textInputStyle}
                                placeholder="Cellphone Number"
                                value={phone}
                                onChange={handleChanges('phone')}
                            ></input>

                            <label
                                htmlFor="message-body"
                                className={labelStyle}
                            >
                                Message:
                            </label>
                            <textarea
                                id="message-body"
                                required
                                placeholder="Message"
                                rows={10}
                                className={textInputStyle}
                                value={message}
                                onChange={handleChanges('message')}
                            ></textarea>

                            <div
                                className="g-recaptcha"
                                data-sitekey="6LfFbykaAAAAAIBrjUL3cf0iAHt4Yg-DSkCLYWRG"
                            />

                            <Button
                                label="Send"
                                onClick={handleSendClick}
                                primary={fieldsValid}
                            />
                        </form>
                    )}
                </section>
            </main>

            <FooterFinal />
        </div>
    );
}

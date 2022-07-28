import { Photo } from '../images';
import { Heading, Text } from '../typography';

const FeatureBox = ({ bgImage }: { bgImage: string }) => {
    const image_style = { backgroundImage: `url("${bgImage}")` };

    return (
        <div className="w-full relative flex-1 ">
            <section className="relative flex flex-row justify-center">
                <div
                    className="block bg-fixed bg-cover absolute left-0 right-0 top-0 bottom-0"
                    style={image_style}
                ></div>
                <div className="block bg-black bg-opacity-50 bg-fixed absolute left-0 right-0 top-0 bottom-0"></div>
                <div className="relative rounded flex flex-col lg:flex-row md:justify-evenly md:place-items-center container w-full md:p-5">
                    <span className="text-white bg-secondary border-primary border-2 bg-opacity-60 md:w-1/2 md:mx-auto p-1 text-center">
                        <img
                            className="w-3/4 mx-auto md:place-center"
                            src="/images/full_logo2_contrast.png"
                        />
                        <br />
                        <span className="mt-1 mb-2">
                            <Text.BoldItalic>
                                Over 30 years of experience constructing and
                                altering homes, with loads of reliable
                                references and qualified artisans.
                            </Text.BoldItalic>
                        </span>
                        <br />
                        <span>
                            <Heading.Small>Services:</Heading.Small>
                            <ul>
                                <li>
                                    Construction of new homes as per approved
                                    plans
                                </li>
                                <li>Trellis Gates</li>
                            </ul>
                        </span>
                    </span>
                    <div className="p-4">
                        <Photo
                            width={500}
                            zoomable
                            src="/images/allinone-1014x1014.png"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureBox;

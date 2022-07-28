import { useEffect, useState } from 'react';
import { MenuButton, Button, PillButton } from '../buttons';
import { Heading, Link } from '../typography';
import MenuDropdown from './MenuDropdown';
import MenuLink from './MenuLink';

const MobileNavMenu = ({
    open,
    onClose,
    showHome = false,
    showGallery = true,
    showContact = true,
}: {
    open: boolean;
    onClose: (e: MouseEvent) => void;
    showHome?: boolean;
    showGallery?: boolean;
    showContact?: boolean;
}) => (
    <div
        className={`fixed w-full p-5 md:w-1/2 lg:hidden h-full right-0 lg:h-normal-nav top-mobile-nav lg:top-normal-nav text-white flex flex-col overflow-auto transition duration-300 ease-out transform ${
            open ? 'translate-x-0 bg-primary bg-opacity-90' : 'translate-x-full'
        }`}
    >
        {showHome && <Button link to="/" label="Home" />}
        <Button link to="/#service-tabs" onClick={onClose} label="Services" />
        <Button link to="/#about-section" onClick={onClose} label="About" />
        {showGallery && <Button link to="/gallery" label="Gallery" />}
        <Button link to="https://bsecure.net.za" label="Trellis Gates" />
        {showContact && <Button link to="/contact" label="Request a Quote" />}
    </div>
);

const NavBar = ({
    showHome = false,
    showGallery = true,
    showContact = true,
}: {
    showHome?: boolean;
    showGallery?: boolean;
    showContact?: boolean;
}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const ToggleNavBar = (e: MouseEvent) => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className="fixed pl-4 pr-4 z-10 w-full bg-primary h-mobile-nav text-white flex flex-row justify-between items-center">
            <div className="h-full text-lg flex-1">
                <img
                    className="w-auto h-full p-1"
                    src="/images/full_logo2_contrast2.png"
                />
            </div>
            <span className="hidden md:flex flex-row flex-wrap">
                {showHome && (
                    <MenuLink anchor to="/">
                        Home
                    </MenuLink>
                )}
                <MenuLink anchor to="/#service-tabs">
                    Services
                </MenuLink>
                <MenuLink anchor to="/#paint-section">
                    Painting
                </MenuLink>
                <MenuLink anchor to="/#about-section">
                    About
                </MenuLink>
                {showGallery && (
                    <MenuLink to="/gallery" anchor>
                        Gallery
                    </MenuLink>
                )}
                <MenuLink anchor to="https://bsecure.net.za">
                    Trellis Gates
                </MenuLink>
            </span>

            {showContact && (
                <span className="hidden md:block">
                    <PillButton
                        link
                        to="/contact"
                        label="Request a Callback"
                        primary
                    />
                </span>
            )}
            <span className="md:hidden">
                <MenuButton isOpen={navbarOpen} onClick={ToggleNavBar} />
            </span>
            <MobileNavMenu
                showHome={showHome}
                showGallery={showGallery}
                showContact={showContact}
                open={navbarOpen}
                onClose={ToggleNavBar}
            />
        </nav>
    );
};

export default NavBar;

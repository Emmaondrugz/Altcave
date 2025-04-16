'use client';
import Ticker from "./Ticker";
import { NavigationMenuDemo } from "./NavMenu"; // Adjust the import path accordingly

export default function Header({ sideNav, setSideNav, navState, setNavState }) {


    // This function handles the side nav state
    const displaySideNav = () => {
        setSideNav(!sideNav);

        // Toggle body scroll and pointer events
        if (!sideNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        console.log('nav button was clicked');
    }


    return (
        <div className="flex flex-col w-full gap-y-3 text-white">
            {/* Ticker */}
            <div>
                <Ticker />
            </div>

            {/* Logo and Navigation Menu */}
            <div className="flex w-full items-center relative z-30 justify-between flex-row px-6 lg:px-20">
                <div className="flex gap-x-10 items-center lg:justify-normal justify-between lg:w-fit w-full flex-row">
                    <img
                        src="/main-logo-removebg-preview.png"
                        alt="Logo"
                        className="md:w-28 w-24"
                    />

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex">
                        <NavigationMenuDemo />
                    </div>

                    <div className="lg:hidden flex flex-col mt-5 rounded-full items-end gap-2 w-10 h-10"
                        onClick={displaySideNav}
                    >
                        <div className="bg-black h-1 w-full rounded-full"></div>
                        <div className="bg-black h-1 w-1/2 rounded-full"></div>
                    </div>
                </div>


                <div className="text-black lg:flex gap-x-5 hidden">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1.5 shadow-lg px-6 rounded-full"> Sign up</button>
                </div>
            </div>
        </div >
    );
}
import { useMemo } from "react"

export default function Sidenav({ sideNav, setSideNav }) {
    const sideNavContent = useMemo(() => (
        <div className={`fixed w-full top-0 ${sideNav ? 'left-0' : 'left-[-100%]'} transition-all duration-200 h-svh bg-white z-20 overflow-y-hidden`}>
            <div className="w-full h-full justify-between flex py-3 px-6 flex-col ">
                <div className="flex-grow pt-32">
                    <div>
                        <ol className="flex flex-col gap-3">
                            <li className="text-xl">Marketplace</li>
                            <li className="text-xl">Trade View</li>
                            <li className="text-xl">Smart Invest</li>
                            <li className="text-xl">Web 3</li>
                        </ol>
                    </div>
                </div>

                <div className="flex list-none text-sm flex-col gap-2 text-gray-400 mb-10">
                    <li className="text-sm">Reach out - +234 8029 8866 73</li>
                    <li className="text-sm">Credit Ekwere Emmanuel</li>
                    <li className="text-sm">@ Altcave 2025 - One of One.</li>
                </div>

                {/* bottom section */}
                <div className="flex w-full pb-3 gap-3">
                    <button className="bg-blue-600 w-full py-2.5 text-white rounded-full">Sign up</button>
                    <button className="bg-white border-2 text-blue-600 border-blue-500 w-full py-2.5 rounded-full">Contact us</button>
                </div>
            </div>
        </div>
    ), [sideNav]);

    return sideNavContent;
}

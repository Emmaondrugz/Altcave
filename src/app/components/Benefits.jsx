import BenefitsOne from './BenefitsOne'
import BenefitsTwo from './BenefitsTwo'

export default function Benefits() {
    return (
        <div className="w-full bg-white py-20 px-0 md:p-20">
            <div className="flex w-full flex-col">

                <div className="w-full flex flex-col gap-12">
                    <BenefitsOne />
                    <BenefitsTwo />
                </div>
            </div>
        </div>
    );
}
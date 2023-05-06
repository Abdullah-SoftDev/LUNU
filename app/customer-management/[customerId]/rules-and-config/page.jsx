import Navbar from "@/app/customer-management/components/PrimaryNavigation";
import SecondaryNavigation from "@/app/customer-management/components/SecondaryNavigation";
import UserDataLabel from "@/app/customer-management/components/UserDataLabel";

function Limit({ subheading }) {
    return (
        <div className="mt-[18px] flex mr-[9px]">
            <div className='w-[280px] h-[77px]'>
                <h1 className='h-[18px] font-normal text-sm leading-4'>{subheading}</h1>
                <div className='mt-[14px] w-[280px] h-[45px] border border-black rounded-lg flex justify-center items-center mx-auto bg-white'>
                    <h1 className=' ml-[25px] w-[158px] mr-[9px]'>0</h1>
                    <h1 className='w-[63px] font-bold text-sm leading-4'>EUR</h1>
                </div>
            </div>
        </div>
    );
}

function LimitCard({ heading }) {
    return (
        <div className="w-[912px] h-[240px] shadow-md rounded-md  bg-[#FAFAFA]">
            <div className='ml-[24px]  pt-[24px]'>
                <h1 className='h-[24px] font-bold text-base leading-6'>{heading}</h1>
                <div className='flex'>
                    <Limit subheading="Daily" />
                    <Limit subheading="Weekly" />
                    <Limit subheading="Monthly" />
                </div>
            </div>
        </div>
    )
}


export default function RulesLimit() {
    return (
        <>
            {/* First Portion */}
            <div className="mt-[68px]">
                <UserDataLabel />
            </div>
            {/* Second Portion */}
            <div className="mt-[40px]">
                <Navbar />
            </div>

            {/* Third Portion */}
            <div className="mt-[33px]">
                <SecondaryNavigation />
            </div>

            {/* Fourth Portion */}
            <div>
                <div className='mt-[20px]'>
                    <LimitCard heading="General limits" />
                </div>
                <div className='mt-[10px]'>
                    <LimitCard heading="KYC 0 Limits" />
                </div>
                <div className='mt-[10px]'>
                    <LimitCard heading="KYC 01 Limits" />
                </div>
                <div className='mt-[10px]'>
                    <LimitCard heading="KYC 02 Limits" />
                </div>
                <div className='mt-[10px]'>
                    <LimitCard heading="KYC 03 Limits" />
                </div>
            </div>

            {/* Fifth Portion */}
            <div className='flex h-[60px] mt-[60px] mb-[100px]'>
                <button class="w-[268px] mr-[54px] text-white bg-[#5B47FF]  font-normal text-base leading-5">SAVE CONFIGURATION</button>
                <button class="w-[268px] mr-[54px] text-[#5B47FF] border border-blue-700  font-normal text-base leading-5">RESET TO GLOBAL</button>
                <button class="w-[268px] text-[#5B47FF] border border-blue-700  font-normal text-base leading-5">RESET TO RISK LIMIT</button>
            </div>
        </>
    )
}

import Navbar from "@/app/customer-management/components/PrimaryNavigation";
import NavbarBelow from "@/app/customer-management/components/SecondaryNavigation";
import ToggelButton from "@/app/utils/ToggelButton";

export default function RulesNotification() {
    return (
        <>
            {/* First Portion */}
            <div className="flex w-[913px] h-[34px] mt-[68px]">
                <div className="w-[699px] h-[45px]  flex">
                    <h1 className="w-[135px] h-[34px] font-bold text-2xl leading-8">Tom Morris</h1>
                    <h1 className="h-[45px] w-[464px] ml-[28px] text-sm leading-5 mt-2">Pending clearance balance: <strong>12 000 / 7.09 ETH</strong></h1>
                </div>
            </div>

            {/* Second Portion */}
            <div className="mt-[40px]">
                <Navbar />
            </div>

            {/* Third Portion */}
            <div className="mt-[33px]">
                <NavbarBelow />
            </div>

            {/* Fourth Portion */}
            <div className='mt-[33px] w-[911px] h-[194px] '>
                <h1 className="w-[455px] h-[24px] font-bold text-base leading-6">TRANSACTION NOTIFCATION</h1>
                <div className="flex">
                    <div className="w-[407px] mt-[26px] h-[144px]  mr-[78px]">
                        <ToggelButton />
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>  </div>
                    <div className="w-[407px] mt-[26px] h-[144px]  ">
                        <ToggelButton />
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Portion */}
            <div className='mt-[53px] w-[911px] h-[194px] '>
                <h1 className="w-[455px] h-[24px] font-bold text-base leading-6">ACCOUNT NOTIFICATION</h1>
                <div className="flex">
                    <div className="w-[407px] mt-[26px] h-[144px]  mr-[78px]">
                        <ToggelButton />
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>  </div>
                    <div className="w-[407px] mt-[26px] h-[144px] ">
                        <ToggelButton />
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>
                        <div className="mt-[24px]">
                            <ToggelButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sixth Portion */}
            <div className='mb-[56px] mt-[26px] w-[911px] h-[82px]'>
                <h1 className="w-[455px] h-[24px] font-bold text-base leading-6">PROMOTIONAL AND MARKETING</h1>
                <div className="w-[911px] mt-[26px] h-[32px]  mr-[78px]">
                    <ToggelButton />
                </div>
            </div>

            {/* Seventh Portion */}
            <div className='mt-[22px] w-[912px] h-[76px] bg-[#FAFAFA] justify-between rounded-lg shadow-md flex'>
                <div className=' ml-[24px]'>
                    <h1 className='pt-[28px] mr-[78px]  mt-[4px]   h-[18px] font-bold text-sm leading-4'>SET TO DEFAULT NOTIFICATION PROFILE</h1>
                </div>
                <div>
                    <button class="w-[152px] mr-[24px] h-[45px] mt-[16px] text-white bg-[#2C2D30]   rounded-lg  font-bold text-xs leading-4">Reset</button>
                </div>

            </div>

            {/* Eight Portion */}
            <div className='flex h-[60px] mt-[60px] mb-[100px]'>
                <button class="w-[268px] mr-[54px] text-white bg-[#5B47FF]  font-normal text-base leading-5">SAVE CONFIGURATION</button>
                <button class="w-[268px] mr-[54px] text-[#5B47FF] border border-blue-700  font-normal text-base leading-5">RESET TO GLOBAL</button>
            </div>
        </>
    )
}

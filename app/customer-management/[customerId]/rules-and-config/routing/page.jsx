import Navbar from "@/app/customer-management/components/PrimaryNavigation";
import RoutingProfile from "@/app/customer-management/components/RoutingProfile";
import NavbarBelow from "@/app/customer-management/components/SecondaryNavigation";
import UserDataLabel from "@/app/customer-management/components/UserDataLabel";

export default function Routing() {
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
                <NavbarBelow />
            </div>

            {/* Fourth Portion */}
            <div className='mt-[22px] w-[912px] h-[76px] bg-[#FAFAFA] rounded-lg shadow-md flex'>
                <div className=' ml-[24px]'>
                    <h1 className='pt-[28px] mr-[78px]  mt-[6px] w-[130px]  h-[18px] font-bold text-xs leading-4'>DEFAULT CURRENCY</h1>
                </div>
                <div class="relative w-[200px] h-[45px] mt-[14px] mr-[36px] border bg-white border-black rounded-lg">
                    <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                        <option value="" selected disabled>EUR</option>
                        <option value="Smith">Smith</option>
                        <option value="Johnson">Johnson</option>
                        <option value="Williams">Williams</option>
                        <option value="Jones">Jones</option>
                        <option value="Brown">Brown</option>
                    </select>
                    <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                </div>
                <h1 className='w-[215px] pt-[28px] mr-[41px] mb-[30px] font-bold text-xs leading-4 uppercase'>Set to Default Routing Profile</h1>
                <button class="w-[152px] mr-[24px] h-[45px] mt-[16px] text-white bg-[#2C2D30]   rounded-lg  font-bold text-xs leading-4">Reset</button>
            </div>

            {/* Fifth Portion */}
            <RoutingProfile />

            {/* Sixth Portion */}
            <div className='flex h-[60px] mt-[60px] mb-[100px]'>
                <button class="w-[268px] mr-[54px] text-white bg-[#5B47FF]  font-normal text-base leading-5">SAVE CONFIGURATION</button>
                <button class="w-[268px] mr-[54px] text-[#5B47FF] border border-blue-700  font-normal text-base leading-5">RESET TO GLOBAL</button>
            </div>
        </>
    )
}

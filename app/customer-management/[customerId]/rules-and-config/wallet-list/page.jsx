'use client'
import Navbar from "@/app/customer-management/components/PrimaryNavigation";
import NavbarBelow from "@/app/customer-management/components/SecondaryNavigation";
import UserDataLabel from "@/app/customer-management/components/UserDataLabel";
import { useCloseModal } from "@/app/contexts/closeModal";
import AddNewWalletModal from "@/app/utils/modal/AddNewWalletModal";

const data = [
    {
        id: 0, coin: "BTC", newtwork: "BTC", address: "mk122...kkw2", mappedto: "Self",
    },
    {
        id: 1, coin: "BTC", newtwork: "BTC", address: "mk122...kkw2", mappedto: "Self",
    },
    {
        id: 2, coin: "BTC", newtwork: "BTC", address: "mk122...kkw2", mappedto: "Self",
    },
    {
        id: 3, coin: "BTC", newtwork: "BTC", address: "mk122...kkw2", mappedto: "Self",
    },
    {
        id: 4, coin: "BTC", newtwork: "BTC", address: "mk122...kkw2", mappedto: "Self",
    },
];

export default function WalletList() {
    const { open, setOpen } = useCloseModal()
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
            <div className='mt-[22px] w-[912px]'>
                <div className="flex items-center">
                    <h1 className='font-bold text-base leading-6 w-[316px]  mr-[443px]'>WALLET LIST</h1>
                    <div>
                        <button onClick={() => setOpen(true)} class="bg-[#2C2D30]  text-white rounded-lg w-[152px] h-[45px] flex items-center justify-center">
                            <h1 className="w-[126px] text-center font-bold text-xs leading-4">Add Wallet</h1>
                            <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-[20px]  h-full">
                    <StripedTable data={data} />
                </div>
            </div>

            {/* fifth Portion */}
            <div className='flex h-[60px] mt-[60px] mb-[100px]'>
                <button class="w-[268px] mr-[54px] text-white bg-[#5B47FF]  font-normal text-base leading-5">SAVE CONFIGURATION</button>
                <button class="w-[268px] mr-[54px] text-[#5B47FF] border border-blue-700  font-normal text-base leading-5">RESET TO GLOBAL</button>
            </div>

            <AddNewWalletModal />
        </>
    )
}

const StripedTable = ({ data }) => {
    return (
        <div className="w-[913px] h-full overflow-hidden rounded-t-lg mt-[20px]">
            <table>
                {/* Tabel Headings */}
                <thead class="bg-[#3E4044] h-[45px]">
                    <tr>
                        <th scope="col" class="w-[227px] border-gray-500 border-r font-bold text-xs leading-4 text-white">Coin</th>
                        <th scope="col" class="w-[228px] border-gray-500 border-r font-bold text-xs leading-4  text-white ">Network</th>
                        <th scope="col" class="w-[228px] border-gray-500 border-r font-bold text-xs leading-4  text-white ">Address</th>
                        <th scope="col" class="w-[228px]  text-white  font-bold text-xs leading-4 ">Mappedto</th>
                    </tr>
                </thead>
                {/* Tabel Values */}
                <tbody>
                    {data.map((row) => (
                        <TableRow key={row.id} row={row} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableRow = ({ row }) => {
    const bgColor = (row.id % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]");
    return (
        <tr className={`w-[912px] h-[60px] ${bgColor}`}>
            <td class="w-[228px]  text-center font-bold text-xs leading-4">{row.coin}</td>
            <td class="w-[228px] font-bold text-xs leading-4 text-center">{row.newtwork}</td>
            <td class="w-[228px]  text-center font-bold text-sm leading-5">{row.address}</td>
            <td class="w-[228px] text-center font-bold text-sm leading-5 flex justify-center">
                <div class="  w-[228px] h-[45px] flex items-center mt-2 justify-center">
                    <h1 className="w-[208px] font-bold text-xs leading-4 text-center">{row.mappedto}</h1>
                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>
            </td>
        </tr>
    );
};

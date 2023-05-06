import PrimaryNavigation from "@/app/customer-management/components/PrimaryNavigation";
import UserDataLabel from "@/app/customer-management/components/UserDataLabel";
import Link from "next/link";

const data = [
    {
        id: 0, internal_transaction_ID: "LUV_001", retailer: "ZARA_R01", date_and_time
            : "12 march 2023 12.12.12 PM", payment_method: "Card", type: "Buy"
    },
    {
        id: 1, internal_transaction_ID: "LUV_001", retailer: "ZARA_R01", date_and_time
            : "12 march 2023 12.12.12 PM", payment_method: "Card", type: "Buy"
    },
    {
        id: 2, internal_transaction_ID: "LUV_001", retailer: "ZARA_R01", date_and_time
            : "12 march 2023 12.12.12 PM", payment_method: "Card", type: "Buy"
    },
    {
        id: 3, internal_transaction_ID: "LUV_001", retailer: "ZARA_R01", date_and_time
            : "12 march 2023 12.12.12 PM", payment_method: "Card", type: "Buy"
    },
];


export default function MainPaymentHistory() {
    return (
        <>
            {/* First Portion */}
            <div className="mt-[68px]">
                <UserDataLabel />
            </div>

            {/* Second Portion */}
            <div className="mt-[40px]">
                <PrimaryNavigation />
            </div>

            {/* Third Portion */}
            <div className="flex">
                <div className="mt-[30px] w-[855px] h-[45px]  flex mr-[9px]">
                    {/* First part */}
                    <div className="w-[380px] h-[45px] mr-[9px] border border-solid border-gray-700 rounded-md flex">
                        <div className="w-[76px] h-[43px] flex items-center  justify-center border-r border-black">
                            <p className="text-center text-sm font-normal">1 DAY</p>
                        </div>
                        <div className="w-[75px] h-[43px] flex items-center  justify-center border-r border-black">
                            <p className="text-center text-sm font-normal">WEEK</p>
                        </div>
                        <div className="w-[76px] h-[43px] flex items-center bg-[#3E4044] text-white justify-center border-r border-black">
                            <p className="text-center text-sm font-normal">MONTH</p>
                        </div>
                        <div className="w-[76px] h-[43px] flex items-center  justify-center border-r border-black">
                            <p className="text-center text-sm font-normal">YEAR</p>
                        </div>
                        <div className="w-[75px] h-[43px] flex items-center  justify-center">
                            <p className="text-center text-sm font-normal">ALL TIME</p>
                        </div>
                    </div>
                    {/* Second part */}
                    <div className=" w-[180px] h-[45px] mr-[9px] border border-solid border-gray-700 rounded-md flex items-center justify-center">
                        <p className="text-center w-[86px] h-[43px]  flex items-center justify-center">12.12.12</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <p className="text-center w-[86px] h-[43px] flex items-center justify-center">12.12.12</p>
                    </div>
                    {/* Thrid part */}
                    <div className="w-[277px] h-[45px] border border-solid border-gray-700 rounded-md flex items-center">
                        <input type="text" className="w-full bg-transparent text-[#3E4044] font-semibold px-4 outline-none" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="h-6 w-6 text-black mr-4 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                </div>
                {/* Fourth part */}
                <div class="flex-col justify-center rounded-md border border-solid border-gray-700 w-[48px] h-[45px] mt-[30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-[12px] h-[12px] mt-[9px] ml-[18px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <h1 className="text-xs text-center">PDF</h1>
                </div>
            </div>

            {/* Fourth Portion */}
            <StripedTable data={data} />
        </>
    )
}

const StripedTable = ({ data }) => {
    return (
        <div className="w-[920px] rounded-t-lg py-[20px]">
            <table>
                {/* Tabel Headings */}
                <thead class="bg-[#3E4044] h-[46px] w-[920px]">
                    <tr>
                        <th scope="col" class="w-[151px] h-[45px] items-center border-gray-500 border-r font-bold text-xs leading-4  text-white text-center rounded-tl-lg">
                            Internal Transaction ID
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r font-bold text-xs leading-4  text-white ">
                            Retailer
                        </th>

                        <th scope="col" class="w-[152px] border-gray-500 border-r  font-bold text-xs leading-4  text-white ">
                            <div className="flex  justify-between items-center">
                                <h1 className="w-[126px]">Date and Time</h1>
                                <div className="w-[26px] h-[45px] flex justify-center items-center bg-[#2C2D30]  text-white text-lg font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#73757A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                    </svg>

                                </div>
                            </div>
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r  font-bold text-xs leading-4  text-white ">
                            <div className="flex  justify-between items-center">
                                <h1 className="w-[126px]">Amount</h1>
                                <div className="w-[26px] h-[45px] flex justify-center items-center bg-[#2C2D30]  text-white text-lg font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#73757A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                    </svg>

                                </div>
                            </div>
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r  font-bold text-xs leading-4  text-white ">
                            Payment Method
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500   font-bold text-xs leading-4  text-white rounded-tr-lg">
                            Type
                        </th>
                    </tr>
                </thead>
                {/* Tabel Values */}
                <tbody className="">
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
        <tr className={`${bgColor} w-[912px] h-[60px]`}>
            <Link href="/customer-management/1/payment-history/1">
                <td class="w-[151px] cursor-pointer items-center h-[60px] flex justify-center whitespace-nowrap text-center font-bold text-xs leading-4">
                    {row.internal_transaction_ID}
                </td></Link>
            <td class="w-[152px] items-center h-[60px]  justify-center whitespace-nowrap text-center font-bold text-xs leading-4">
                {row.retailer}
            </td>

            <td class="w-[100px]  text-center font-normal text-xs  ">
                <p className="w-[100px] ml-[26px] font-normal text-xs leading-4">{row.date_and_time}</p>
            </td>
            <td class="w-[100px]  text-center font-bold text-xs leading-4">
                <p className="w-[100px] ml-[26px] font-semibold">120 EUR</p>
                <p className="w-[100px] ml-[26px]">0.012 BTC</p>
            </td>
            <td class="w-[152px] items-center h-[60px]  justify-center whitespace-nowrap text-center font-bold text-xs leading-4">
                {row.payment_method}
            </td>
            <td class="w-[152px] items-center h-[60px]  justify-center whitespace-nowrap text-center font-bold text-xs leading-4">
                {row.type}
            </td>
        </tr>
    );
};

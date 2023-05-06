import Link from "next/link";
const data = [
    { id: 0, customer_name: "Abdullah", email: "abdullah@gmail.com", kyc_stage: "Level 1", created_on: "16 Mar, 2023 05:45:12 PM", customer_status: "Active", pending_clearance_balance: "1000 USD" },
    { id: 1, customer_name: "Abbas", email: "abbas@gmail.com", kyc_stage: "Level 2", created_on: "03 Mar, 2023 05:45:12 PM", customer_status: "Active", pending_clearance_balance: "1500 EUR" },
    { id: 2, customer_name: "Ammar", email: "ammar@gmail.com", kyc_stage: "Level 1", created_on: "11 Mar, 2023 05:45:12 PM", customer_status: "Pending", pending_clearance_balance: "3000 INR" },
    { id: 3, customer_name: "Ammar", email: "ammar@gmail.com", kyc_stage: "Level 1", created_on: "11 Mar, 2023 05:45:12 PM", customer_status: "Pending", pending_clearance_balance: "3000 INR" },
    { id: 4, customer_name: "Ammar", email: "ammar@gmail.com", kyc_stage: "Level 1", created_on: "11 Mar, 2023 05:45:12 PM", customer_status: "Pending", pending_clearance_balance: "3000 INR" },
    { id: 5, customer_name: "Ammar", email: "ammar@gmail.com", kyc_stage: "Level 1", created_on: "11 Mar, 2023 05:45:12 PM", customer_status: "Pending", pending_clearance_balance: "3000 INR" },
    { id: 6, customer_name: "Ammar", email: "ammar@gmail.com", kyc_stage: "Level 1", created_on: "11 Mar, 2023 05:45:12 PM", customer_status: "Pending", pending_clearance_balance: "3000 INR" },
];

export default function CustomerManagement() {
    return (
        <>
            {/* First Portion */}
            <div className="flex w-[913px] h-[45px] mt-[68px] items-center">
                <div className="w-[699px] h-[45px] mr-[352px] flex">
                    <h1 className="w-[135px] h-[34px] text-[#000000] not-italic font-bold text-2xl leading-8 mr-[19px]">Customers</h1>
                    <h1 className="w-[77px]  h-[45px] text-sm leading-4 mt-[12px]">Total:<strong>48</strong></h1>
                    <h1 className="w-[178px] h-[45px] text-sm leading-4 mt-[12px]">Current month:<strong>12</strong></h1>
                </div>
                <div>
                    <Link href="/new-customer" class="bg-[#2C2D30]  text-white rounded-lg w-[152px] h-[45px] flex items-center justify-center">
                        <h1 className="w-[126px] text-center not-italic font-bold text-xs leading-4">New Customer</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Second Portion */}
            <div className="flex">
                <div className="mt-[30px] w-[855px] h-[45px] flex mr-[9px]">
                    {/* 1 part */}
                    <div className="w-[380px] h-[45px] mr-[9px] border border-solid border-gray-700 rounded-lg flex">
                        <div className="w-[76px] h-[43px] flex items-center  justify-center border-r border-black">
                            <p className="font-normal text-sm leading-4">1 DAY</p>
                        </div>
                        <div className="w-[75px] h-[43px] flex items-center  justify-center border-r border-black">
                            <p className="font-normal text-sm leading-4">WEEK</p>
                        </div>
                        <div className="w-[76px] h-[43px] flex items-center bg-[#3E4044] text-white justify-center border-r border-black">
                            <p className="font-normal text-sm leading-4">MONTH</p>
                        </div>
                        <div className="w-[76px] h-[43px] flex items-center  justify-center border-r border-black">
                            <p className="font-normal text-sm leading-4">YEAR</p>
                        </div>
                        <div className="w-[75px] h-[43px] flex items-center  justify-center">
                            <p className="font-normal text-sm leading-4">ALL TIME</p>
                        </div>
                    </div>
                    {/* 2 part */}
                    <div className=" w-[180px] h-[45px] mr-[9px] border border-solid border-gray-700 rounded-lg flex items-center justify-center">
                        <p className="text-center w-[86px] h-[43px] flex items-center justify-center font-normal text-md leading-4">12.12.12</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        <p className="text-center w-[86px] h-[43px] flex items-center justify-center font-normal text-md leading-4">09.12.22</p>
                    </div>
                    {/* 3 part */}
                    <div className="w-[277px] h-[45px] border border-solid border-gray-700 rounded-lg flex items-center">
                        <input type="text" className="w-full bg-transparent text-[#3E4044] font-medium px-4 outline-none" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="h-6 w-6 text-[#73757A] mr-4 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                {/* 4 part */}
                <button class="flex justify-center items-center flex-col rounded-lg border border-solid border-gray-700 w-[48px] h-[45px] mt-[30px] outline-nonea">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4 mt-[7px] font-semibold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <h1 class="text-xs font-medium leading-4 text-center mt-[1px]">PDF</h1>
                </button>
            </div>

            {/* Third Portion */}
            <StripedTable data={data} />
        </>
    )
}

const StripedTable = ({ data }) => {
    return (
        <div className="w-[920px] overflow-hidden rounded-t-lg mt-[20px]">
            <table>
                {/* Tabel Headings */}
                <thead class="bg-[#3E4044] h-[46px] w-[920px]">
                    <tr>
                        <th scope="col" class="w-[160px] h-[45px] items-center flex border-gray-500 border-r text-xs text-white">
                            <h1 className="w-[34px]"></h1>
                            <h1 className="w-[126px]  font-bold text-xs leading-4">Customer Name</h1>
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r text-xs text-white">Email</th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r text-xs text-white">
                            <div className="flex justify-between items-center">
                                <h1 className="w-[126px] font-bold text-xs leading-4">KYC Stage</h1>
                                <div className="w-[26px] h-[45px] flex justify-center items-center bg-[#2C2D30]  text-white text-lg font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#73757A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r  text-xs text-white ">
                            <div className="flex  justify-between items-center">
                                <h1 className="w-[126px] font-bold text-xs leading-4">Created On</h1>
                                <div className="w-[26px] h-[45px] flex justify-center items-center bg-[#2C2D30]  text-white text-lg font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#73757A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r  text-xs text-white ">
                            <div className="flex  justify-between items-center">
                                <h1 className="w-[126px] font-bold text-xs leading-4">Customer Status</h1>
                                <div className="w-[26px] h-[45px] flex justify-center items-center bg-[#2C2D30]  text-white text-lg font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#73757A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th scope="col" class="w-[152px] border-gray-500 border-r  text-xs text-white ">
                            <div className="flex  justify-between items-center">
                                <h1 className="w-[126px] font-bold text-xs leading-4">Pending Clearance Balance</h1>
                                <div className="w-[30px] h-[45px] flex justify-center items-center bg-[#2C2D30]  text-white text-lg font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#73757A] ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                    </svg>
                                </div>
                            </div>
                        </th>
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
        <tr className={`${bgColor} w-[912px]`}>
            <td class="w-[160px] items-center flex">
                <div className="w-[34px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-[15px]">
                        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                    </svg>
                </div>
                <h1 className="w-[126px] text-center font-bold text-sm leading-4 mt-2">{row.customer_name}</h1>
            </td>
            <td class="w-[152px] text-center font-normal text-sm leading-4">{row.email}</td>
            <td class="w-[126px] mr-[52px] text-center font-normal text-sm leading-4">{row.kyc_stage}</td>
            <td class="w-[100px]  text-center font-normal text-xs">
                <p className="w-[100px] ml-[26px] text-center font-normal text-xs leading-4">{row.created_on}</p>
            </td>
            <td class="w-[126px] mr-[26px] not-italic font-bold text-sm leading-4 text-center">{row.customer_status}</td>
            <td class="w-[160px] items-center h-[60px]  flex text-center font-normal text-xs">
                <h1 className="w-[126px] font-bold  ml-[26px] text-xs leading-4">{row.pending_clearance_balance}</h1>
                <Link href="/customer-management/1">
                    <div className="w-[34px] cursor-pointer flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Link>
            </td>
        </tr>
    );
};
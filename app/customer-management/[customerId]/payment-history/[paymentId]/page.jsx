'use client'
import Navbar from "@/app/customer-management/components/PrimaryNavigation";
import UserDataLabel from "@/app/customer-management/components/UserDataLabel";
import { useCloseModal } from "@/app/contexts/closeModal";
import RefundModal from "@/app/utils/modal/RefundModal";

export default function PaymentHistory() {
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
            <div className="mt-[33px] w-[912px] h-[45px] flex items-center justify-between">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-[18px]">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>

                    <h1 className="w-[248px] h-[24px] text-base font-bold  leading-6">LUT_001</h1>
                </div>
                <div className="flex space-x-3">
                    <div class="flex-col justify-center rounded-md border border-solid border-gray-700 w-[48px] h-[45px]">
                        <svg class="h-4 mt-[9px] text-center items-center justify-center w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                        </svg>
                        <h1 className="font-medium leading-4 text-xs text-center">PRINT</h1>
                    </div>
                    <div class="flex-col justify-center rounded-md border border-solid border-gray-700 w-[48px] h-[45px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="h-4 mt-[9px] text-center items-center justify-center w-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <h1 className="text-xs text-center">PDF</h1>
                    </div>
                </div>
            </div>

            {/* Fifth Portion */}
            <div className="mt-[40px]  w-[912px] h-[571px] ">
                <div className="h-[86px]  flex">
                    <div className="w-[222px]  mr-[7px]">
                        <h1 className="font-bold text-base leading-6">Customer Name</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                            <p>Customer Id - <span className="font-bold text-sm">ox12we23d</span></p>
                        </div>
                    </div>
                    <div className="w-[216px]  mr-[12px]">
                        <h1 className="font-bold text-base leading-6">Retailer</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                            <p>Retailer Id - <span className="font-bold text-sm">ox12we23d</span></p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Transaction type</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Buy</p>
                        </div>
                    </div>
                    <div className="w-[219px] ">
                        <h1 className="font-bold text-base leading-6">Referral partner</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Praxis</p>
                        </div>
                    </div>
                </div>
                <hr class="border-gray-500 border-1 w-[913px] mt-[24px]" />
                <div className="h-[86px] mt-[29px] flex">
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Internal Transaction ID</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[216px]  mr-[12px]">
                        <h1 className="font-bold text-base leading-6">Retailer Order ID</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                            <p>Customer Id - <span className="font-bold text-sm">ox12we23d</span></p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Flat</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[216px]  mr-[12px]">
                        <h1 className="font-bold text-base leading-6">Crypto</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                            <p>Customer Id - <span className="font-bold text-sm">ox12we23d</span></p>
                        </div>
                    </div>
                </div>
                <div className="h-[86px] mt-[29px] flex">
                    <div className="w-[216px]  mr-[12px]">
                        <h1 className="font-bold text-base leading-6">Transaction date and time</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                            <p>Customer Id - <span className="font-bold text-sm">ox12we23d</span></p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Exchange Rate</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Destination address</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Status</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="h-[86px] mt-[29px] flex">
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Payment Method</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Transaction Hash</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Payment gateway Fee</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Lunu Fee</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="h-[86px] mt-[29px] flex">
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Spread</h1>
                        <div className="mt-[18px] h-[44px]  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-[219px]  mr-[9px]">
                        <h1 className="font-bold text-base leading-6">Partner fee</h1>
                        <div className="mt-[18px] h-[44px] underline  text-[#595B5E] font-normal text-xs leading-4">
                            <p>Image@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Portion */}
            <button onClick={() => setOpen(true)} class="mt-[29px] w-[268px] h-[60px] mb-[100px] text-white bg-[#5B47FF]  font-normal text-base leading-5">COMPLETE</button>

            <RefundModal />
        </>
    )
}

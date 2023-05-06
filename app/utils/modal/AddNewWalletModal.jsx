import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useCloseModal } from '@/app/contexts/closeModal'

export default function AddNewWalletModal() {
    const { open, setOpen } = useCloseModal()

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex justify-center items-center  mt-[210px] mb-[1144px]">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel>
                                <div className="w-[1080px] h-[464px] bg-white rounded-md">
                                    <div className='pt-[41px] w-[913px] h-[20px] ml-[58px] mr-[59px] flex'>
                                        <h1 className='w-[300px] mr-[523px] font-bold text-xl leading-8'>Add New Wallet</h1>
                                        <button onClick={() => setOpen(false)} className='flex w-[90px] h-[18px] cursor-pointer outline-none leading-8'>
                                            <h1 className='mr-[4px]'>CANCEL</h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </div>
                                    <div className="flex  mt-[53px]">
                                        {/* Left Portion */}
                                        <div className="flex flex-col mr-[58px] ml-[58px]">
                                            {/* Customer Status */}
                                            <div class="w-[428px] h-[77px] mb-[29px]">
                                                <label for="last-name" class="font-normal text-sm leading-4 h-[18px] text-gray-900">Select Cryptocurrency</label>
                                                <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-lg">
                                                    <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                                        <option value="Active">Select</option>
                                                    </select>
                                                    <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                                                </div>
                                            </div>
                                            {/* First Name */}
                                            <div class="w-[428px] h-[77px] mb-[29px]">
                                                <label for="last-name" class="font-normal text-sm leading-4 h-[18px] text-gray-900">Address</label>
                                                <div class="w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                                                    <input class="ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px]" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right Portion */}
                                        <div className="flex flex-col">
                                            {/* Country of Residence */}
                                            <div class="w-[428px] h-[77px] mb-[29px]">
                                                <label for="last-name" class="font-normal text-sm leading-4 h-[18px] text-gray-900">Select Network</label>
                                                <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                                                    <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                                        <option value="Germany">Germany</option>
                                                    </select>
                                                    <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                                                </div>
                                            </div>
                                            {/* KYC Stage */}
                                            <div class="w-[428px] h-[77px] mb-[29px]">
                                                <label for="last-name" class="font-normal text-sm leading-4 h-[18px] text-gray-900">Mapped</label>
                                                <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                                                    <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                                        <option value="Brown">Select</option>
                                                    </select>
                                                    <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' ml-[59px] mt-[54px]'>
                                        <button className='w-[268px] h-[60px] bg-[#A3A7AC] font-normal text-base leading-5 text-white'>SAVE ACCOUNT</button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
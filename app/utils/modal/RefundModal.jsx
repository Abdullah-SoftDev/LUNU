'use client'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ToggelButton from '@/app/utils/ToggelButton'
import { useCloseModal } from '@/app/contexts/closeModal'

export default function RefundModal() {
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
                    <div className="flex justify-center items-center  mt-[189px] mb-[189px]">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel>
                                <div className="w-[1030px] h-[671px] rounded-md bg-white">
                                    <div className="pt-[62px] ml-[59px] mr-[48px] items-center justify-between h-[20px] flex">
                                   <div className='flex items-center'>
                                   <p className='w-[146px] font-bold text-2xl leading-8'>Fiat Refund</p>
                                        <p className='w-[300px]  font-bold text-base leading-6'>LUT_001</p>
                                   </div>
                                        <button onClick={() => setOpen(false)} className='flex w-[90px] h-[18px] cursor-pointer outline-none'>
                                            <h1 className='mr-[4px]'>CANCEL</h1>
                                            <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </div>
                                    <div className='flex  justify-between items-center'>
                                        {/* left portion */}
                                        <div className='w-[428px]  h-[106px] mt-[53px] ml-[59px]'>
                                            <p className='h-[42px] font-normal text-sm leading-4'>
                                                Please choose how much of this payment you would like to refund. If partial, you will have to enter the amount manually
                                            </p>
                                            <p className='h-[17px] mt-[47px] font-bold text-sm leading-4'>
                                                Total Refundable Amount : 12 000 EUR
                                            </p>
                                        </div>
                                        {/* right portion */}
                                        <div className='w-[440px] h-[107px] mt-[67px]  ml-[58px] mr-[45px]'>
                                            <div className='w-[200px] h-[32px]'>
                                                <ToggelButton />
                                            </div>
                                            <div className='h-[77px] items-center justify-center w-full flex'>
                                                <div className='mt-[47px] w-[200px] h-[32px]'>
                                                    <ToggelButton />
                                                </div>
                                                <div class="w-[200px] h-[67px] ml-[55px]">
                        <label for="last-name" class="h-[18px] font-normal text-sm leading-4">Refund Amount</label>
                        <div class="w-[200px] h-[45px] mt-[14px] border-2 border-black rounded-lg">
                            <input class="ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px]" />
                        </div>
                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-[306px] ml-[59px]'>
                                        <button className='w-[268px] h-[60px] bg-[#A3A7AC] font-normal text-base leading-5 text-white'>SEND REFUND</button>
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

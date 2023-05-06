export default function CustomerDataForm() {
    return (
        <div class="w-[913px] h-[589px] mt-[26px]">
            {/* First Portion */}
            <div className="flex">
                {/* Left Portion */}
                <div className="flex flex-col mr-[58px]">
                    {/* First Name */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="h-[18px] font-normal text-sm leading-4">First Name</label>
                        <div class="w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-lg">
                            <input class="ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px]" />
                        </div>
                    </div>
                    {/* Email Address */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Email Address</label>
                        <div class="w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-lg">
                            <input class="ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px]" />
                        </div>
                    </div>
                    {/* Resedence Address */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Residence Address</label>
                        <div class="w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-lg">
                            <input class="ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px]" />
                        </div>
                    </div>
                    {/* Customer Status */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Customer Status</label>
                        <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                <option value="Active">Active</option>
                            </select>
                            <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                        </div>
                    </div>
                </div>
                {/* Right Portion */}
                <div className="flex flex-col">
                    {/* Last Name */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Last Name</label>
                        <div class="w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <input class="ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px]" />
                        </div>
                    </div>
                    {/* Country of Residence */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Country of Residence</label>
                        <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                <option value="Germany">Germany</option>
                            </select>
                            <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                        </div>
                    </div>
                    {/* KYC Stage */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">KYC Stage</label>
                        <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                <option value="Brown">Level 1</option>
                            </select>
                            <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                        </div>
                    </div>
                    {/* Approve and Reject Customer */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Approve / Reject Customer</label>
                        <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                <option value="Approve">Approve</option>
                            </select>
                            <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Portion */}
            <div className="h-[141px]  mt-[40px]">
                <h1 className="w-full h-[24px] font-bold text-base leading-6 mb-[18px]">AMLD5 QUESTIONNAIRE</h1>
                <div className="flex">
                    {/* Employement Dropdown */}
                    <div class="w-[428px] h-[77px] mb-[29px] mr-[58px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Employement</label>
                        <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                <option value="Salaried">Salaried</option>
                                <option value="Self employed">Self employed</option>
                                <option value="Buisness">Buisness</option>
                                <option value="None">None</option>

                            </select>
                            <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="/dropdownIcon.svg" />
                        </div>
                    </div>
                    {/* Source of Income */}
                    <div class="w-[428px] h-[77px] mb-[29px]">
                        <label for="last-name" class="font-normal text-sm leading-4 h-[18px]">Source of Income</label>
                        <div class="relative w-[427px] h-[45px] mt-[14px] border-2 border-black rounded-md">
                            <select class="appearance-none ml-[25px] mt-[12px] mb-[15px] outline-none bg-transparent w-[377px] h-[18px] text-sm font-semibold">
                                <option value="Smith">Salary</option>
                                <option value="Gift">Gift</option>
                                <option value="Gambling">Gambling</option>
                                <option value="Trading">Trading</option>
                                <option value="Inheritance">Inheritance</option>
                            </select>
                            <img class="w-[14px] h-[12px] absolute right-4 top-4 pointer-events-none" src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

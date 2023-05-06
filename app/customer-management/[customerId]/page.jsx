import CustomerDataForm from "@/app/customer-management/components/CustomerDataForm";
import CustomerDataTabel from "@/app/customer-management/components/CustomerDataTabel";
import PrimaryNavigation from "@/app/customer-management/components/PrimaryNavigation";
import UserDataLabel from "@/app/customer-management/components/UserDataLabel";

export default function CustomerForm() {
    return (
        <>
            {/* First Portion */}
            <div className="flex w-[913px] h-[45px] mt-[68px]">
             <UserDataLabel/>
                <div>
                    <button class="bg-[#5B47FF]  ml-[60px] text-white rounded-lg w-[152px] h-[45px] flex items-center justify-center text-center  font-bold text-xs leading-4">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Second Portion */}
            <div className="mt-[30px]">
            <PrimaryNavigation />
            </div>

            {/* Third Portion */}
            <CustomerDataForm />

            {/* Fourth Portion */}
            <CustomerDataTabel />
        </>
    )
}

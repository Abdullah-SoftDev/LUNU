import CustomerDataForm from "../customer-management/components/CustomerDataForm";
import SupportingDocuments from "../customer-management/components/SupportingDocuments";

export default function NewCustomer() {
    return (
        <>
            {/* First Portion */}
            <h1 className="w-[699px]  h-[34px] mt-[68px] font-bold text-2xl leading-8">New Customer</h1>

            {/* Second Portion */}
            <div className="mt-[32px]">
                <CustomerDataForm />
            </div>

            {/* Third Portion */}
            <SupportingDocuments />
        </>
    )
}

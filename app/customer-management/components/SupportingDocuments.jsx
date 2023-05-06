const InfoCard = ({ heading, paragraph }) => {
    return (
        <div className="w-[427px] h-[112px] mb-[18px] flex border rounded-lg border-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[46px] h-[46px] mt-[33px] ml-[24px] mr-[24px]">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            <div className="mt-[28px] w-[306px] h-[56px] max-w-xs">
                <h1 className="h-[16px] font-bold text-sm ">{heading}</h1>
                <p className="mt-[11px] font-light text-sm mr-12 leading-4 ">{paragraph}</p>
            </div>
        </div>
    );
};
export default function SupportingDocuments() {
    return (
        <>
            <div className="mt-[62px] w-[913px] h-[346px]">
                <div className="h-[86px]">
                    <h1 className="w-[427px] h-[24px] font-bold text-base leading-6">PLEASE PROVIDE US SUPPORTING DOCUMENTS</h1>
                    <div className="h-[44px] mt-[18px]">
                        <p className="text-sm">We need this document to open your account with us.</p>
                        <p className="font-normal text-xs leading-4">Accepted types - PDF, Scanned copy, Clear Photo JEGJ, JPG, PNG, and not more than 5MB each documnets.</p>
                    </div>
                </div>
                <div className="mt-[18px] flex">
                    <div className="mr-[58px]">
                        <InfoCard heading="Passport or National ID" paragraph="A passport or national ID document to verify your identity." />
                        <InfoCard heading="Passport or National ID" paragraph="A passport or national ID document to verify your identity." />
                    </div>
                    <div>
                        <InfoCard heading="Passport or National ID" paragraph="A passport or national ID document to verify your identity." />
                        <InfoCard heading="Passport or National ID" paragraph="A passport or national ID document to verify your identity." />
                    </div>
                </div>
            </div>
            <button class="mt-[50px] w-[268px] h-[60px] mb-[100px] text-white bg-[#5B47FF] font-normal text-base leading-5">COMPLETE</button>
        </>
    )
}

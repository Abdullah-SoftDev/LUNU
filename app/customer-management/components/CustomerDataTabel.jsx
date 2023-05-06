const data = [
    { id: 0, id_type: "Abdullah", document: "abdullah@gmail.com" },
    { id: 1, id_type: "Abdullah", document: "abdullah@gmail.com" },
    { id: 2, id_type: "Abdullah", document: "abdullah@gmail.com" },
    { id: 3, id_type: "Abdullah", document: "abdullah@gmail.com" },
];

export default function CustomerDataTabel() {
    return (
        <div className="w-[912px] py-[44px]">
            {/* First Portion */}
            <div className="flex items-center">
                <h1 className="w-[436px] h-[24px] mr-[324px] font-bold text-base leading-6">CUSTOMER ONBOARDING DATA</h1>
                <div>
                    <button class="bg-[#2C2D30]  text-white rounded-lg w-[152px] h-[45px] flex items-center justify-center text-center not-italic font-bold text-xs leading-4">
                        Upload KYC Data
                    </button>
                </div>
            </div>

            {/* Second Portion */}
            <StripedTable data={data} />

            {/* Button */}
            <div className="mt-[60px]">
                <button className="w-[268px] h-[60px] bg-[#5B47FF] text-white font-normal text-base leading-5">SAVE CONFIGURATION</button>
            </div>
        </div>
    )
}

const StripedTable = ({ data }) => {
    return (
        <div className="w-[920px] h-full rounded-t-lg mt-[20px]">
            <table>
                {/* Tabel Headings */}
                <thead class="bg-[#3E4044] h-[46px]">
                    <tr>
                        <th scope="col" class="w-[228px] border-gray-500 border-r font-bold text-xs leading-4 text-white uppercase rounded-tl-lg">ID Type</th>
                        <th scope="col" class="w-[229px] border-gray-500 border-r font-bold text-xs leading-4 text-white uppercase">Document</th>
                        <th scope="col" class="w-[455px]  text-white uppercase font-bold text-xs leading-4 rounded-tr-lg">Status</th>
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
        <tr className={`${bgColor} w-[912px] h-[60px]`}>
            <td class="font-normal text-sm leading-4 text-center">{row.id_type}</td>
            <td class="text-center font-normal text-sm leading-4 underline">{row.document}</td>
            <td class="text-center  text-sm leading-4">
                <div className="flex ml-[20px]">
                    <h1 className="w-[75px] mr-[40px] font-bold">Approved</h1>
                    <h1 className="w-[312px]"><strong>Note:</strong> ID Verified by Sumsub</h1>
                </div>
            </td>
        </tr>
    );
};

const SectionHeader = ({subHeader, header}) => {
    return (
        <div className="w-56 mx-auto text-center py-10">
                <h2 className="text-[#D99904]">{subHeader}</h2>
            <div className="divider m-2"></div>
            <h2 className="text-2xl">{header}</h2>
        </div>
    );
};

export default SectionHeader;
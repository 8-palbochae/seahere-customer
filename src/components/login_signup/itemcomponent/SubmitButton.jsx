const SubmitButton = ({ children }) => {
    return (
        <button type="submit" className="relative w-[271px] h-[52px] bg-blue-600 rounded-[10px] border border-solid border-black">
            <div className="w-[195px] h-[25px] top-3 left-10 text-white text-base text-center leading-[normal] absolute [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
                {children}
            </div>
        </button>
    );
};

export default SubmitButton;

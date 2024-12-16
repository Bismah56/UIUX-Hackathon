export default function Nav(){
    return(
        <div className="flex lg:w-[392px] w-fit gap-2 h-[60px] items-center text-[18px] lg:gap-[38px] mb-5 mx-auto ">
          <div className="lg:h-[60px] lg:w-[60px] bg-[#FBEBB5] rounded-[10px] flex justify-center items-center h-[40px] w-[40px]">1</div>
          <div className="lg:h-[60px] lg:w-[60px] bg-[#faf4f4] rounded-[10px] flex justify-center items-center h-[40px] w-[40px]">2</div>
          <div className="lg:h-[60px] lg:w-[60px] bg-[#faf4f4] rounded-[10px] flex justify-center items-center h-[40px] w-[40px]">3</div>
          <div className="lg:h-[60px] lg:w-[98px] bg-[#faf4f4] rounded-[10px] flex justify-center items-center h-[40px] w-[60px]">Next</div>
        </div>
    )
};
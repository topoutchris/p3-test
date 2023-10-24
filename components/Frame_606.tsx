import p3 from "./p3.svg";
import tradFirms from "./tradFirms.svg";
import rectangle_2947 from "./rectangle_2947.svg";
export const Frame_606 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="relative w-[495px] h-[449px] bg-black" style={override}>
      <div>
        <div className="absolute w-[398px] left-12 h-[376px] top-[37px] bg-[rgba(255,_255,_255,_0.1)] rounded-lg" />
        <div className="absolute w-[350px] left-[74px] h-[261px] top-[97px] bg-black rounded-lg" />
        <p className="absolute [rotate:0deg] left-[75px] top-[61px] text-white text-base font-medium">
          Time to Value
        </p>
        <div>
          <p className="opacity-50 absolute left-[236px] top-[328px] text-white text-sm font-normal">
            Time
          </p>
          <p className="opacity-50 absolute [rotate:-90deg] left-[84px] top-[235px] text-white text-sm font-normal">
            Vlaue
          </p>
          <div>
            <img
              className="absolute left-[110px] -right-[110px] w-auto top-[125px] -bottom-[124.5px] h-auto"
              src={p3.src}
            />
            <img
              className="absolute left-[192.3px] -right-[110px] w-auto top-[262.37px] -bottom-[125px] h-auto"
              src={tradFirms.src}
            />
            <img
              className="absolute w-[289px] left-[110px] h-[194px] top-[125px]"
              src={rectangle_2947.src}
            />
          </div>
        </div>
        <div className="flex items-start gap-4 absolute left-[75px] top-[374px]">
          <div className="flex items-center gap-[5px]">
            <div className="w-2.5 h-2.5 bg-[rgba(181,_233,_35,_0.2)] border-solid border-[rgb(181,_233,_35)] border rounded-[50%]" />
            <p className="text-white text-[11px] font-[Inter] font-normal">
              P3
            </p>
          </div>
          <div className="flex items-start gap-1.5">
            <div className="w-2.5 h-2.5 bg-[rgba(246,_75,_1,_0.2)] border-solid border-[rgb(246,_75,_1)] border rounded-[50%]" />
            <p className="text-white text-[11px] font-[Inter] font-normal leading-[1.2em]">
              Traditional Data Consulting Firms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

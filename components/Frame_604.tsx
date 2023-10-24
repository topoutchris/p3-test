import vector_31 from "./vector_31.svg";
import vector_32 from "./vector_32.svg";
import vector_33 from "./vector_33.svg";
export const Frame_604 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className="relative w-[495px] h-[481px] bg-black" style={override}>
      <div className="absolute w-[410px] left-[45px] h-[416px] top-8 bg-[rgba(255,_255,_255,_0.1)] rounded-lg" />
      <div className="absolute w-[410px] left-[45px] h-12 top-8 bg-[rgb(40,_40,_40)] rounded-tl-[8px] rounded-tr-[8px]" />
      <div>
        <div
          className="absolute [rotate:-90deg] w-[232px] left-[131px] h-[232px] top-[365px] rounded-[50%]"
          style={{
            background:
              "linear-gradient(-76deg, rgb(45, 133, 101) 0%, rgba(45, 133, 101, 0.00) 100%)",
          }}
        />
        <div className="absolute [rotate:-90deg] w-[232px] left-[131px] h-[232px] top-[365px] bg-[rgb(0,_202,_129)] rounded-[50%]" />
        <div className="absolute [rotate:-90deg] w-[232px] left-[131px] h-[232px] top-[365px] bg-[rgb(181,_233,_35)] rounded-[50%]" />
        <div className="absolute w-36 left-[175.06px] h-36 top-[177.06px] bg-[rgb(26,_26,_26)] rounded-[50%]" />
      </div>
      <p className="absolute left-[61px] top-11 text-white text-base font-medium leading-[1.5em]">
        Projected Membership Forecast by Type
      </p>
      <img
        className="absolute w-[26px] left-[324px] h-[11px] top-[143px]"
        src={vector_31.src}
      />
      <img
        className="absolute w-[26px] left-[191px] h-[11px] top-[127px]"
        src={vector_32.src}
        style={{
          transform: "scale(-100%, 100%)",
        }}
      />
      <img
        className="absolute w-[26px] left-[138px] h-[11px] top-[181px]"
        src={vector_33.src}
        style={{
          transform: "scale(-100%, 100%)",
        }}
      />
      <div className="flex items-start gap-5 px-3.5 py-2 rounded-[2.25rem] absolute top-[389px] bg-[rgba(255,_255,_255,_0.2)]">
        <div className="flex items-center gap-[5px]">
          <div className="w-3 h-3 bg-[rgb(181,_233,_35)] rounded-[50%]" />
          <p className="text-white text-[11px] font-[Inter] font-medium leading-[1.5em]">
            Secure
          </p>
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="w-3 h-3 bg-[rgb(0,_202,_129)] rounded-[50%]" />
          <p className="text-white text-[11px] font-[Inter] font-medium leading-[1.5em]">
            Likely
          </p>
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="w-3 h-3 bg-[rgb(45,_133,_101)] rounded-[50%]" />
          <p className="text-white text-[11px] font-[Inter] font-medium leading-[1.5em]">
            Reach
          </p>
        </div>
      </div>
      <p className="absolute left-[355px] top-[136px] text-white text-xs font-medium">
        352.82k
      </p>
      <p className="absolute left-[75px] top-[174px] text-white text-xs font-medium">
        60.3k
      </p>
      <p className="absolute left-[127px] top-[119px] text-white text-xs font-medium">
        65.6k
      </p>
    </div>
  );
};

import p3AdaptiveLogo from "./p3AdaptiveLogo.svg";
export const P3AdaptiveLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
      className="w-[350px] h-[350px]"
      src={p3AdaptiveLogo.src}
      style={override}
    />
  );
};

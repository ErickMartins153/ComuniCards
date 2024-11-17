import { IconType } from "react-icons";

export default function LoginInput(props: {
  icon: IconType;
  placeholder: string;
  style: React.CSSProperties;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex h-[45px] w-[80%] items-center rounded-xl border-2 border-[#B0ABAB] bg-white">
      <span className="px-2">
        <props.icon style={props.style} />
      </span>
      <div className="flex w-full h-full">
        <input
          type={props.type === "password" ? "password" : "text"}
          placeholder={props.placeholder}
          className="flex h-full w-full rounded-xl pb-[2px] outline-none"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

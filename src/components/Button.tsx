export default function Button(props: {text: string, function: () => void}) {
    return (
        <div className="flex w-full h-[10%] justify-center ">
            <button onClick={props.function} className="bg-[#29C5FD] w-[80%] h-full border-1 border-[#B0ABAB] text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg ">{props.text}</button>
        </div>
    );
}   
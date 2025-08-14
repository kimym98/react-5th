import tw from "@/utils/tw";

interface Props {
  type: "primary" | "secondary" | "tertiary";
  logoSrc: string;
  rate: string;
  title: string;
  company: string;
}

function Card({ type, logoSrc, rate, title, company }: Props) {
  return (
    <div className="bg-white  rounded-lg p-2">
      <div
        className={tw(
          "bg-amber-100 rounded-t-lg flex flex-col gap-8 p-4",
          type === "primary" && "bg-amber-100",
          type === "secondary" && "bg-indigo-100",
          type === "tertiary" && "bg-lime-100"
        )}
      >
        <div className="flex justify-between">
          <p className="font-medium">{rate}</p>
          <img src="/bookmark.svg" alt="북마크 아이콘" />
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">{title}</p>
          <img src="/arrow.svg" alt="화살표 아이콘" />
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <span className="inline-block outline-2 rounded-full w-0.5 h-0.5 bg-black outline-black"></span>
          <span className="inline-block outline-2 rounded-full w-0.5 h-0.5 bg-gray-400 outline-gray-400"></span>
          <span className="inline-block outline-2 rounded-full w-0.5 h-0.5 bg-gray-400 outline-gray-400"></span>
          <span className="inline-block outline-2 rounded-full w-0.5 h-0.5 bg-gray-400 outline-gray-400"></span>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex gap-3">
          <img src={logoSrc} alt="회사 이이콘" />
          <p className="font-bold">{company}</p>
        </div>
        <button
          type="button"
          className="rounded-2xl px-2 font-medium bg-black text-white"
        >
          view
        </button>
      </div>
    </div>
  );
}
export default Card;

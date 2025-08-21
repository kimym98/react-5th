import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority";
import Button from "./Button";

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardHero> & {
    title: string;
    rate: string;
    company: string;
    logoSrc: string;
    logoAlt?: string;
  };

const cardHero = cva(
  "relative min-h-[180px] rounded-xl p-6 flex flex-col justify-between p-4 m-4",
  {
    variants: {
      type: {
        primary: "bg-[#FDF4E5]",
        secondary: "bg-[#F9F7FE]",
        tertiary: "bg-[#F8FCEE]",
      },
    },
    defaultVariants: { type: "primary" },
  }
);

function Card({
  type,
  title,
  company,
  logoSrc,
  logoAlt = company,
  rate,
  className,
  ...rest
}: CardProps) {
  let iconSrc = "";
  switch (logoSrc) {
    case "facebook":
      iconSrc = "/facebook.svg";
      break;
    case "google":
      iconSrc = "/google.svg";
      break;
    case "airbnb":
      iconSrc = "/airbnb.svg";
      break;

    default:
      iconSrc = "/vite.svg";
      break;
  }
  return (
    <div
      className={tw(
        "rounded-2xl border border-slate-200 bg-white shadow-sm p-4 m-4"
      )}
      {...rest}
    >
      <div className={cardHero({ type })}>
        {/* header */}
        <div className="flex justify-between">
          <span>{rate}</span>
          <button type="button">
            <svg
              className="size-6"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.45398 18.45L12.454 16.3L17.454 18.45V5.5H7.45398V18.45ZM5.45398 21.5V5.5C5.45398 4.95 5.64998 4.479 6.04198 4.087C6.43331 3.69567 6.90398 3.5 7.45398 3.5H17.454C18.004 3.5 18.475 3.69567 18.867 4.087C19.2583 4.479 19.454 4.95 19.454 5.5V21.5L12.454 18.5L5.45398 21.5Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* title */}
        <h3 className="mt-6 text-3xl font-semibold leading-tight text-slate-900">
          {title}
        </h3>
        {/* dot */}
        <div className="mt-6 flex items-center gap-1 self-center">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
        </div>
        <button type="button" className="absolute right-4 top-2/4">
          <svg
            className="size-6"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.454 18.5L13.054 17.05L16.604 13.5H4.45398V11.5H16.604L13.054 7.95L14.454 6.5L20.454 12.5L14.454 18.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <footer className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="size-10 rounded-full" src={iconSrc} alt={logoAlt} />
          <p className="text-lg font-semibold text-slate-900">{company}</p>
        </div>
        <Button className="bg-red-500">View</Button>
      </footer>
    </div>
  );
}
export default Card;

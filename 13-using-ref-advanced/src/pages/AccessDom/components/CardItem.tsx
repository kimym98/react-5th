import type { Movie_list } from "../type";
import S from "../style.module.css";
import VanillaTilt from "vanilla-tilt";
import { TILT_CONFIG } from "./tiltConfig";
import { useRef } from "react";
interface Props {
  item: Movie_list;
  popup: boolean;
}

function CardItem({ item, popup }: Props) {
  const { href, label, images } = item;

  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const refCallback = (el: HTMLAnchorElement) => {
    VanillaTilt.init(el, TILT_CONFIG);
  };

  const cardClassNames = `${S.card} ${popup ? S.popup : ""}`.trim();

  //tailwind => twmerge
  //clsx
  //cva

  //카드에 마우스 올렸을 때 label이 보이게
  const handleEnter = () => {
    console.log(titleRef.current);
    const title = titleRef.current!;
    title.style.opacity = "1";
  };
  //카드에 마우스 떠났을 때 label이 안보이게
  const handleLeave = () => {
    const title = titleRef.current!;
    title.style.opacity = "0";
  };
  return (
    <a
      ref={refCallback}
      href={href}
      title={label}
      aria-label={label}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <figure className={cardClassNames}>
        <div className={S.wrapper}>
          <img src={images.src} alt="" />
        </div>
        <p ref={titleRef}>{label}</p>
        <img className={S.character} src={images.character} alt="" />
      </figure>
    </a>
  );
}

export default CardItem;

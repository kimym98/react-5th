import type { TiltOptions } from "vanilla-tilt";

export const TILT_CONFIG: TiltOptions = {
  reverse: true, //기울어지는 방향변경
  max: 35, // 최개 기울기(도)
  startX: 0, //x축의 시작 기울기
  startY: 0, //y축의 시작 기울기
  perspective: 1000, // 값이 낮을수록 물체와 더 가까이 보임(기울기가 심해짐)
  scale: 1.5, // enter/exit값이 커짐/작아짐
  speed: 600, // enter/exit 전환속도
  transition: true,
  axis: null, // x|y 축 활성화 (null양쪽 모두)
  easing: "cubic-bezier(.03,.98,.52,.99)",
  glare: false,
};

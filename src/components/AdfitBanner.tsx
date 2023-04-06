import { FC, useEffect } from "react";

interface AdfitBannerProps {
  className: string;
  dataAdUnit: string;
  dataAdWidth: number;
  dataAdHeight: number;
}

export const AdfitBanner: FC<AdfitBannerProps> = ({
  className,
  dataAdUnit,
  dataAdWidth,
  dataAdHeight
}) => {
  useEffect(() => {
    const ins = document.createElement("ins");
    const script = document.createElement("script");
    const adfit = document.querySelector(`.${className}`);

    ins.className = "kakao_ad_area";
    ins.setAttribute("style", "display:none;");
    ins.setAttribute("data-ad-unit", dataAdUnit);
    ins.setAttribute("data-ad-width", `${dataAdWidth}`);
    ins.setAttribute("data-ad-height", `${dataAdHeight}`);
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;

    adfit?.setAttribute(
      "style",
      "display: flex; flex-direction: column; align-items: center;"
    );
    adfit?.appendChild(ins);
    adfit?.appendChild(script);
  }, []);

  return <div className={className} />;
};

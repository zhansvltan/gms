import React from "react";

export default function PartnerComponent() {
  return (
    <div className="flex justify-center bg-white items-baseline">
      <h2
        style={{ maxWidth: "504px", width: "100%" }}
        className="text-[#030303] text-[42px] font-[500]"
      >
        Наши клиенты и партнеры
      </h2>
      <div className="flex-col pb-[130px]">
        <div className="flex justify-between">
          <div>
            <img src="lancaster.svg" alt="Lancaster" />
          </div>
          <div>
            <img src="world.svg" alt="World Bank Group" />
          </div>
        </div>
        <div className="flex justify-between pt-[30px]">
          <div>
            <img src="aifc.svg" alt="AIFC" />
          </div>
          <div>
            <img src="dubai.svg" alt="Dubai" />
          </div>
        </div>
      </div>
    </div>
  );
}

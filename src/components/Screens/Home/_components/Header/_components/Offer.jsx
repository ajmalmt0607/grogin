import React from "react";

const Offer = () => {
    return (
        <div className="bg-purple-600 text-white text-xs text-center py-2 ">
            <div className="">
                <span className="font-bold ml-2">
                    FREE delivery & 40% Discount for next 3 orders! Place your
                    1st order in.
                </span>
                <span className=" text-[10px] font-bold ml-2">
                    Until the end of the sale:{" "}
                    <span className=" text-sm"> 47 </span>
                    days <span className=" text-sm"> 06 </span> hours{" "}
                    <span className=" text-sm"> 52 </span> minutes{" "}
                    <span className=" text-sm"> 13 </span> sec.
                </span>
            </div>
        </div>
    );
};

export default Offer;

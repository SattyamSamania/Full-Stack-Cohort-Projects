import React from "react";

const RevenueCard = ({
  title,
  orderCount,
  amount,
  ispecial,
  payoutDate,
  time,
}) => {
  return (
    <>
      <section>
        <div
          className={`${
            ispecial ? "bg-[#156BAF] text-white" : "bg-white"
          } rounded-md rounded-b-none shadow-md p-10`}
        >
          <div className="flex ">
            <div>{title}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="font-semibold text-3xl">₹ {amount}</div>

            {orderCount ? (
              <div
                className={`flex underline ${
                  ispecial ? "text-white" : "text-[#146EB4]"
                }`}
              >
                <div>{orderCount} orders </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`flex justify-between  ${
            ispecial
              ? "block bg-[#0E4F82] rounded-b-md shadow-md p-2 text-white"
              : "none"
          }`}
        >
          <div>{payoutDate}</div>
          <div>{time}</div>
        </div>
      </section>
    </>
  );
};

export default RevenueCard;

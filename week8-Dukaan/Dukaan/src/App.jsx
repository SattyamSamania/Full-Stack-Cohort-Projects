import React from "react";
import RevenueCard from "./components/RevenueCard";
import OrderTable from "./components/OrderTable";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <div className="flex">
        <aside className="fixed ">
          <Dashboard />
        </aside>
        <main className=" w-full ml-60">
          <Navbar />

          <div className="mt-10 mx-10 flex justify-between text-xl">
            <h3>Overview</h3>
            <div className="flex items-center border-2 border-gray p-2 rounded">
              <button>This month </button>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1   md:grid-cols-1 lg:grid-cols-3 gap-4 mt-3 mx-10 ">
            <RevenueCard
              title={"Next payout"}
              amount={"2,312.23"}
              orderCount={23}
              className="bg-red-800"
              ispecial={true}
              payoutDate={"Next payout date:"}
              time={"Today 4:00 PM"}
            />

            <RevenueCard
              title={"Amount pending"}
              amount={"92,312.20"}
              orderCount={13}
            />
            <RevenueCard title={"Amount processed"} amount={"23,92,312.19"} />
          </div>

          <div className="m-10">
            <h2 className="font-bold ">Transactions | This Month</h2>
            <div className="">
              <button className="text-[#808080] bg-[#E6E6E6] p-2.5 rounded-full ">
                Payouts(22)
              </button>
              <button className="bg-[#146EB4]  text-white p-2.5 rounded-full ml-2">
                Refunds(6)
              </button>
            </div>

            {/* OrderTable Starts here  */}

            <div className="">
              <Heading />
              <OrderTable />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;

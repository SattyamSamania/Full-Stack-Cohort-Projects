import React, {useEffect, useRef, useState} from "react";
import RevenueCard from "./components/RevenueCard";
import OrderTable from "./components/OrderTable";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const dashboardRef = useRef(null);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const handleClickOutside = (e) => {
    if(dashboardRef.current && !dashboardRef.current.contains(e.target)){
      setShowSidebar(false);
    } 
  }

  useEffect(()  => {

    if(showSidebar){
      document.addEventListener('mousedown', handleClickOutside);
    } else{
      document.removeEventListener('mousedown', handleClickOutside)
    }


    return  () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSidebar])


  return (
    <>
      <div className="flex ">
      <div className="md:hidden m-4  cursor-pointer"  onClick={handleSidebar} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

        </div>
        <aside
        ref={dashboardRef}
        className={`fixed   ${showSidebar? '': 'hidden'}  md:block `}>
       
          <Dashboard  />
        </aside>
        <main className=" w-full md:ml-60">
          <Navbar />

          <div className="mt-10 md:mx-10 flex justify-between text-xl">
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
          <div className="grid grid-cols-1   md:grid-cols-1 lg:grid-cols-3 gap-4 mt-3 md:mx-10 ">
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

          <div className="md:m-10 my-5">
            <h2 className="font-bold text-xl">Transactions | This Month</h2>
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

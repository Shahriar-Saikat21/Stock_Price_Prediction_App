import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="w-full md:h-[620px] h-dvh bg-[#D6D0D0]">
      <div className="flex justify-center items-center">
        <h1 className="pt-[80px] font-sans md:text-3xl  text-2xl mb-5">
          Dhaka Stock Exchange
        </h1>
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;

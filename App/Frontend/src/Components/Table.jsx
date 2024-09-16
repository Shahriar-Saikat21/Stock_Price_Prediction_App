import axios from "axios";
import { useQuery } from "react-query";

const test = async () => {
  return axios.get("http://127.0.0.1:8000/api");
};

const Table = () => {
  const { data, isLoading, isError, error } = useQuery("testItem", test);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (data?.data.success == false) {
    return (
      <div>
        {console.log(data?.data)}
        <div className="flex flex-col md:px-[80px] pb-[20px]">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-y-auto rounded-lg md:h-[500px]">
                <h1 className="pt-[80px] font-sans md:text-3xl  text-2xl text-center text-red-600 font-bold">
                  {data?.data.message}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {console.log(data?.data)}
      {data?.data.result.map((i) => {
        console.log(i.today["name"]);
      })}
      <div className="flex flex-col md:px-[80px] pb-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-y-auto rounded-lg md:h-[500px]">
              <table className="min-w-full text-left text-sm font-light border-2 border-slate-20 bg-[#ebebeb]">
                <thead className="border-b font-bold text-primary ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-4">
                      High
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Low
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Value
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Volume
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Close
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Prediction
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-primary">
                  {data?.data.result.map((i) => {
                    return (
                      <tr
                        key={i}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-300 "
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-bold">
                          {i.today["name"]}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {i.today["high"]}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {i.today["low"]}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {i.today["value"]}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {i.today["volume"]}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {i.close}
                        </td>
                        <td
                          className={
                            i.result
                              ? "whitespace-nowrap px-6 py-4 text-green-700"
                              : "whitespace-nowrap px-6 py-4 text-red-600"
                          }
                        >
                          {i.result ? "Price Increase" : "Price Decline"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

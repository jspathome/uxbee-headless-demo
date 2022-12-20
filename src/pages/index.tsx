import UIPageTitle from "@components/UI/atoms/UIPageTitle";
import UISlider from "@components/UI/UISlider";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Demo 01 app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UIPageTitle title="Homepage" />     
      {/* <UISlider />  */}
      <div className="px-4 py-6 sm:px-0">
        <div className=" rounded-lg bg-gray-200 p-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">01</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">02</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">03</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">04</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">05</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">06</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">07</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">08</div>
            <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">09</div>
            {/* <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">10</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

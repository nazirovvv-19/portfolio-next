import React from "react";

function Page() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center  mt-2">Contact me</h2>
      <div className="justify-center flex flex-col items-center ">
        <div className="flex flex-col mt-5 justify-center">
          <label htmlFor="" className="text-center">Ism</label>
          <input className="border-1 w-60 px-2 py-1 rounded-md mt-2" type="text" />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-center">Email</label>
          <input className="border-1 w-60 px-2 py-1 rounded-md mt-2" type="email" />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="" className="text-center">Xabar</label>
        <textarea className="border-1 w-60 rounded-md p-2 mt-1" name="" id=""></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white ml-38 mt-3 rounded-md">Jo'natish</button>
      </div>
    </div>
  );
}

export default Page;

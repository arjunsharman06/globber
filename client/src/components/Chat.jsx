import React from "react";

const Chat = () => {
  return (
    <div className="bg-emerald-400">
      <div>
        <p className="text-8xl text-left text-yellow-900 items-center justify-center   py-5 px-5">
          Globber 🦃
        </p>
      </div>
      <div className="h-screen">
    
        <div className="flex flex-row mb-1.5 h-4/6">
          <div className="border-4 border-yellow-900 bg-emerald-100 w-1/5 mx-2 p-9 h-full">
            <h3 className="flex items-center justify-center text-xl">
              Globbers Online:
            </h3>
          </div>
          <div className="border-4 border-yellow-900 bg-emerald-100 w-4/5 mr-2 p-9 h-full">
            <h3 className="flex items-center justify-center text-xl">
              Chat placeholder
            </h3>
          </div>
        </div>
      
      <div className="bg-emerald-400">
        <form className=" border-4 border-yellow-900 bg-emerald-100 flex flex-row mx-2">
          <textarea className="w-full" placeholder="globble globble..." />
          <button className="text-white bg-yellow-900 px-6 flex items-center rounded-md hover:scale-110 duration-300 border-4 border-white">
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Chat;

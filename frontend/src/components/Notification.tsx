import React from "react";

export default function Notification() {
  return (
    <div className="flex items-center p-2 hover:bg-[#f2f3f7] bg-white rounded-lg shadow-xl ml-3 mb-2 w-[90%] relative ">
      <span className="text-xs font-bold uppercase px-2 mt-2 mr-2 text-green-900 bg-green-400 border rounded-full absolute top-0 right-0">
        New
      </span>
      <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">
        4:36 PM
      </span>
      <img
        className="h-12 w-12 rounded-full"
        alt="John Doe's avatar"
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
      />
      <div className="ml-5">
        <h4 className="text-lg font-semibold leading-tight text-gray-900">
          John Doe
        </h4>
        <p className="text-sm text-gray-600">You have a new message!</p>
      </div>
    </div>
  );
}

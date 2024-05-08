import NavProfile from "@/components/NavProfile";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-[94%] mx-auto pt-2 px-3">
        <div className="w-[20%] h-fit max-lg:hidden mr-3">
          <NavProfile selectedPage="profile" />
        </div>
        <form className="w-[80%] flex pl-3 py-4 overflow-hidden">
          <div className="grid w-2/3 gap-6 mb-2 grid-cols-1 md:grid-cols-2 pr-3 border-r-2">
            <div className="col-span-full md:col-span-1 mt-5">
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Username
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-1 mt-5">
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Phone
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-2">
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-2">
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-2">
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
          <div className="flex items-center flex-col flex-grow-0 flex-shrink-0 w-1/3">
            <img
              className="size-32 mb-4 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://steamuserimages-a.akamaihd.net/ugc/785249992934598869/D742B5B7D85A39652AF350AC7490AC5B972FFF2B/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
              alt="Bordered avatar"
            />

            <div className="mt-4">
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
  file:me-4 file:py-2 file:px-4
  file:rounded-lg file:border-0
  file:text-sm file:font-semibold
  file:bg-blue-600 file:text-white
  hover:file:bg-blue-700
  file:disabled:opacity-50 file:disabled:pointer-events-none
  dark:text-neutral-500
  dark:file:bg-blue-500
  dark:hover:file:bg-blue-400
"
                />
              </label>
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

import NavProfile from "@/components/NavProfile";
import { TeamDetail } from "@/components/TeamDetail";
import React, { useState } from "react";

export default function myTeam() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const handleCurrentPage = (page: string) => {
    setCurrentPage(page);
  };
  console.log(currentPage);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-[94%] mx-auto pt-2 px-3">
        <div className="w-[20%] h-fit max-lg:hidden mr-3">
          <NavProfile selectedPage="myteam" />
        </div>
        {currentPage !== "teamDetail" ? (
          <div className="w-[80%]  pl-3 py-4 overflow-hidden">
            <div>
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg w-80 bg-gray-50 mb-3  dark:placeholder-gray-400 dark:text-black"
                  placeholder="Tìm kiếm đội"
                />
              </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Sport
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Members
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    onClick={() => handleCurrentPage("teamDetail")}
                    className="bg-white   hover:bg-[#f2f3f7]"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap hover:text-[--primary-color]"
                    >
                      Đội Bách Khoa TP.HCM
                    </th>
                    <td className="px-6 py-4">Bóng đá</td>
                    <td className="px-6 py-4">29</td>
                    <td className="px-6 py-4">Thành viên</td>
                    <td className="flex items-center px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                      >
                        Rời đội
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <nav
                className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">1-10</span> of{" "}
                  <span className="font-semibold text-gray-900">1000</span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <div className="w-[80%]  pl-3 py-4 overflow-hidden">
            <TeamDetail backhandler={handleCurrentPage}></TeamDetail>
          </div>
        )}
      </div>
    </main>
  );
}

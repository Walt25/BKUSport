import React from "react";

export default function ScheduleList() {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-xl  shadow-md bg-clip-border sm:p-8  dark:border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-blue-gray-900">
          Lịch thi đấu
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-1">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Sân Hồng Quang
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-500">
                13h30 - 2/1/2024
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-1">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Sân Hồng Quang
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-500">
                13h30 - 2/1/2024
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-1">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Sân Hồng Quang
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-500">
                13h30 - 2/1/2024
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-1">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Sân Hồng Quang
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-500">
                13h30 - 2/1/2024
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-1">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Sân Hồng Quang
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-500">
                13h30 - 2/1/2024
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

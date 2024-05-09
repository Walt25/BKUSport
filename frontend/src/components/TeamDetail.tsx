import React from "react";
import { TeamCard } from "./TeamCard";
import MemberList from "./MemberList";
import ScheduleList from "./ScheduleList";

type TeamDetailProps = {
  backhandler: (page: string) => void;
};

export const TeamDetail: React.FC<TeamDetailProps> = (props) => {
  const { backhandler } = props;

  return (
    <div>
      <button
        onClick={() => backhandler("")}
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Quay lại
      </button>
      <div className="flex flex-col">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <TeamCard
              title="Tên đội"
              content="Đội bóng đá Bách Khoa TPHCM"
            ></TeamCard>
          </div>
          <div className="ml-2 col-span-1">
            <TeamCard title="Môn thể thao" content="Bóng đá"></TeamCard>
          </div>
          <div className="ml-2 col-span-1">
            <TeamCard
              title="Tên đội"
              content="Đội bóng đá Bách Khoa TPHCM"
            ></TeamCard>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div className="col-span-1">
            <MemberList></MemberList>
          </div>
          <div className="col-span-1">
            <ScheduleList></ScheduleList>
          </div>
        </div>
      </div>
    </div>
  );
};

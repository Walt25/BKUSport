import NavProfile from "@/components/NavProfile";
import React from "react";
import Notification from "@/components/Notification";
export default function Notifications() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-[94%] mx-auto pt-2 px-3">
        <div className="w-[20%] h-fit max-lg:hidden mr-3">
          <NavProfile selectedPage="notifications" />
        </div>
        <div className="w-[80%]  pl-1 py-4 overflow-hidden">
          <Notification></Notification>
          <Notification></Notification>
          <Notification></Notification>
          <Notification></Notification>
        </div>
      </div>
    </main>
  );
}

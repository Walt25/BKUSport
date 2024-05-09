import { Divider } from "@mui/material";
import Link from "next/link";

export type NavItem = {
  name: string;
  slug: string;
};

const items: NavItem[] = [
  {
    name: "Tài khoản",
    slug: "profile",
  },
  {
    name: "Đội",
    slug: "myteam",
  },
  {
    name: "Tìm đội",
    slug: "team",
  },
  {
    name: "Thông báo",
    slug: "notifications",
  },
];

export default function NavProfile({ selectedPage }: { selectedPage: string }) {
  return (
    <div className="flex flex-col justify-between relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
      <div className="p-3 bg-[--primary-color] text-white font-semibold text-lg rounded-tl-md rounded-tr-md">
        Danh mục
      </div>
      <Divider />
      {items.map((item, key) => (
        <Link
          href={item.slug}
          className={` cursor-pointer group flex py-3 flex-row justify-between flex-1 px-3 items-center hover:bg-[#f2f3f7] ${
            item.slug === selectedPage ? "bg-[#f2f3f7]" : ""
          } `}
          key={key}
        >
          <div className="flex flex-row items-center group-hover:text-[--primary-color] x`">
            <span className="pl-2 text-sm">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

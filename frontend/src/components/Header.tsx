"use client";

import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import {
  FaBell,
  FaShoppingCart,
  FaChevronDown,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Drawer, Menu, MenuItem } from "@mui/material";
import { CustomMenu } from "./CustomMenu/CustomMenu";
import Divider from "@mui/material/Divider";
import { MiniCart } from "./Cart/MiniCart";
import { useI18n } from "../hooks/useI18n";
import { Language } from "./Language/Language";
import { cookies } from 'next/headers'
import { UserType, useCurrentUser } from "@/contexts/userContext";

const NAVIGATION = [
    {
        title: "Trang chủ",
        link: "/",
    },
    {
        title: "Sản phẩm",
        link: "/products",
        children: [
          {
            title: "Đồng phục",
            link: "/shop",
          },
          {
            title: "Dụng cụ thể thao",
            link: "/shop",
          },
        ],
      },
  {
    title: "Tin tức",
    link: "/blog",
  },
  {
    title: "Sân thể thao",
    link: "/fields",
  },
];

export const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const {currentUser, setCurrentUser} = useCurrentUser()
  
  const route = useRouter();
  const { t, locale, changeLocale } = useI18n();

  const userRef = useRef(null);
  const cartRef = useRef(null);

  const selectedRoute =
    route.pathname === "/"
      ? "Home"
      : route.pathname.split("/")[1].charAt(0).toUpperCase() +
        route.pathname.split("/")[1].slice(1);

  const renderDropDown = (
    navigations: { title: string; link: string }[],
    level = 0
  ) => {
    return (
      <ul
        className={`dropdown-content md:absolute max-md:pl-4 hidden text-gray-700 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${
          level === 0 ? "pt-4" : ""
        }`}
        style={{ left: level * 200, zIndex: level, top: level ? 0 : undefined }}
      >
        {navigations.map((nav: any, index) => {
          return nav.children ? (
            <div className={`dropdown inline-block relative`} key={index}>
              <MenuItem
                key={index}
                className="flex items-center hover:text-[--primary-color] bg-white hover:bg-white py-2 px-4 block text-xs"
              >
                <span>{t(nav.title)}</span>
                <FaChevronRight size={10} className="ml-1" />
              </MenuItem>
              {renderDropDown(nav.children, level + 1)}
            </div>
          ) : (
            <MenuItem
              key={index}
              className="hover:text-[--primary-color] bg-white hover:bg-white py-2 px-4 block text-xs "
            >
              <Link href={nav.link}>{nav.title}</Link>
            </MenuItem>
          );
        })}
      </ul>
    );
  };

  const renderNavigation = () => {
    return NAVIGATION.map((nav, index) => (
      <div
        key={index}
        className={`hover:text-[--primary-color] ${
          selectedRoute === nav.title ? "text-[--primary-color]" : ""
        }`}
      >
        {nav.children ? (
          <div className="dropdown inline-block relative">
            <button className="flex justify-center items-center">
              <span>{t(nav.title)}</span>
              <FaChevronDown size={10} className="ml-1" />
            </button>
            {renderDropDown(nav.children)}
          </div>
        ) : (
          <Link href={nav.link}>{t(nav.title)}</Link>
        )}
      </div>
    ));
  };

  
  return (
    <div
      style={{ zIndex: 99 }}
      className="w-full px-3 bg-white/50 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
    >
      <div className="h-[52px] w-[94%] mx-auto flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center ">
          <div className="h-8 rounded flex items-center justify-center mr-6 cursor-pointer">
            <Image src={logo} alt={"logo"} className="w-[8rem]" />
          </div>
          <div className="flex flex-row gap-4 justify-evenly text-xs font-semibold max-md:hidden">
            {renderNavigation()}
          </div>
        </div>

        <div className="h-full flex flex-row items-center h-10 ">
          <div className="flex flex-row items-center h-10 w-[250px] max-sm:hidden">
            <div className="bg-[#ebedf0] h-[36px] px-2 w-10 flex justify-center items-center rounded-l-md">
              <BiSearch size={18} />
            </div>
            <input
              className="px-2 rounded-r-md outline-none w-80 border h-[36px] bg-[#ebedf0] text-sm"
              type="text"
              placeholder="Bạn đang tìm kiếm gì?"
            />
          </div>
          <div
            className="w-8 h-8 rounded flex items-center justify-center mr-2 mx-3 cursor-pointer hover:bg-[#ebedf0] max-sm:hidden"
            ref={cartRef}
          >
            <FaShoppingCart size={17} onClick={() => setShowCart(true)} />
          </div>
          <div className="w-8 h-8 rounded flex items-center justify-center mr-2 cursor-pointer hover:bg-[#ebedf0] max-md:hidden">
            <FaBell size={17} />
          </div>
          <div className="w-8 h-8 rounded flex items-center justify-center mr-2 cursor-pointer hover:bg-[#ebedf0] max-md:hidden">
            <Language />
          </div>
          {
            currentUser._id ? 
              <div
                className="h-full pl-2 flex flex-row items-center cursor-pointer hover:bg-[#ebedf0]"
                ref={userRef}
                onClick={() => setShowUserMenu(true)}
              >
                <div className="w-8 h-8 rounded mr-2">
                  <img
                    className="bg-cover bg-center rounded"
                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    alt="pic"
                  />
                </div>
              </div> :
              <div className="mx-10 ">
                <span 
                  className="cursor-pointer hover:underline hover:text-blue-500" 
                  onClick={() => {route.push("/login")}}
                >Login</span>
                <span>/</span>
                <span className="cursor-pointer hover:underline hover:text-blue-500"
                   onClick={() => {route.push("/signup")}}>Register</span>
              </div>

          }
          
          <div className="w-8 h-8 rounded flex items-center justify-center mx-2 cursor-pointer hover:bg-[#ebedf0] md:hidden">
            <FaBars
              size={17}
              onClick={() => {
                setShowDrawer(true);
              }}
            />
          </div>
        </div>
      </div>
      <CustomMenu
        anchorEl={userRef.current}
        open={showUserMenu}
        className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        onClose={() => setShowUserMenu(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem disableRipple style={{ cursor: "default" }}>
          <div className="w-8 h-8 rounded">
            <img
              className="bg-cover bg-center rounded"
              src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
              alt="pic"
            />
          </div>
          <div className="flex flex-col px-1 text-xs">
            <span className="font-semibold">{currentUser.username}</span>
            <span>{currentUser.email}</span>
          </div>
        </MenuItem>
        <MenuItem className="hover:text-[--primary-color] text-sm">
          <Link href={"/profile"}>Thông tin tài khoản</Link>{" "}
        </MenuItem>
        <MenuItem className="hover:text-[--primary-color] text-sm" onClick={() => {
          setCurrentUser({} as UserType)
          setShowUserMenu(false)
          document.cookie = 'access_token=; Max-Age=0; path=/';
          document.cookie = 'refresh_token=; Max-Age=0; path=/';
        }}>
          Đăng xuất
        </MenuItem>
      </CustomMenu>
      <CustomMenu
        anchorEl={cartRef.current}
        open={showCart}
        className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        onClose={() => setShowCart(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MiniCart onClose={() => setShowCart(false)} />
      </CustomMenu>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <Box sx={{ p: 2, width: "250px" }}>
          <div className="flex flex-row items-center pb-4">
            <div className="h-8 rounded flex items-center justify-center mr-6 cursor-pointer">
              <Image src={logo} alt={"logo"} className="w-[8rem]" />
            </div>
          </div>
          <div className="flex flex-col text-xs font-semibold gap-4">
            {renderNavigation()}
          </div>
        </Box>
        <Divider />
        <Box className="flex mt-2">
          <div className="w-8 h-8 rounded flex items-center justify-center mr-2 mx-3 cursor-pointer hover:bg-[#ebedf0]">
            <Link href="/cart">
              <FaShoppingCart size={17} />
            </Link>
          </div>
          <div className="w-8 h-8 rounded flex items-center justify-center mr-2 cursor-pointer hover:bg-[#ebedf0] ">
            <FaBell size={17} />
          </div>
        </Box>
        <MenuItem disableRipple style={{ cursor: "default" }} className="pt-4">
          <div className="w-8 h-8 rounded">
            <img
              className="bg-cover bg-center rounded"
              src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
              alt="pic"
            />
          </div>
          <div className="flex flex-col px-1 text-xs">
            <span className="font-semibold">Konstantin Veselovsky</span>
            <span>stroyka@example.com</span>
          </div>
        </MenuItem>
        <MenuItem className="hover:text-[--primary-color] text-sm">
          Logout
        </MenuItem>
      </Drawer>
    </div>
  );
};

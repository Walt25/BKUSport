import Image from "next/image";
import logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { login } from "@/Api/user";
import { useCurrentUser } from "@/contexts/userContext";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Verify() {
    return <div>hello</div>
}

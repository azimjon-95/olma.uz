import CreateProducts from "../router/admin/create-product/CreateProducts";
import ManageAdmin from "../router/admin/manage-admins/ManageAdmin";
import ManageProduct from "../router/admin/manage-product/ManageProduct";
import Order from "../router/admin/orders/Order";

import { FaDatabase } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { HiChartPie, HiUsers, HiOutlineUserCircle } from "react-icons/hi";

export const ADMINS_ROUTER = [
  {
    id: 1,
    title: "Mahsulotni yaratish",
    path: "/create-product",
    icon: <MdOutlineCreate />,
    el: <CreateProducts />,
  },
  {
    id: 2,
    title: "Mahsulotni boshqarish",
    path: "/manage-product",
    icon: <FaDatabase />,
    el: <ManageProduct />,
  },
  {
    id: 3,
    title: "Buyurtmalar",
    path: "/order",
    icon: <HiChartPie />,
    el: <Order />,
  },
  {
    id: 4,
    title: "Adminlar",
    path: "/manage-admins",
    icon: <HiUsers />,
    el: <ManageAdmin />,
  },
];

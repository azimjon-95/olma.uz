import React from "react";
import s from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={s.Container}>
      <div className="container">
        <div className={s.Container_Main}>
          <div className={s.Main_Left}>
            <NavLink to="/" className="Logo_Box">
              olma
            </NavLink>
            <p>Qo'llab-quvvatlash raqami</p>
            <h2>+998 (94) 432 445 4</h2>
            <span>
              <p>Namangan, Pop</p>
            </span>
            <span>
              <RiHomeSmile2Fill />
              <p>mamutaliyev95@gmail.com</p>
            </span>
          </div>
          <div className={s.Main_Left}>
            <b>Ma`lumot</b>
            <p>Biz haqimizda</p>
            <p>Bo'sh ish o'rinlari</p>
            <p>To‘lovni qaytarish va tovarlarni almashtirish</p>
            <p>Muddatli to’lov shartlari</p>
            <p>Yordam</p>
            <p>Yetkazib berish</p>
          </div>
          <div className={s.Main_Left}>
            <br />
            <p>Eco-friendly</p>
            <p>Bonus va aksiyalar</p>
            <p>To’lov va yetkazib berish</p>
            <p>olcha da soting</p>
            <p>Servis markazlari</p>
          </div>
        </div>
        <div className={s.Container_Bottom}>
          <div className={s.Bottom}>
            <p>© 2017-2022. ООО "Olcha store"</p>
            <p>Ommaviy oferta</p>
            <p>siyosati</p>
          </div>
          <div className={s.Bottom_link}>
            <span>
              <BsFacebook />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <TbBrandTelegram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

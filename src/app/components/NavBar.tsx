"use client";
import { useState } from "react"
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    const menuIconClasses = "md:hidden text-customBlue focus:outline-none transition-transform";
    const menuContainerClasses = `absolute top-full lg:left-32 md:relative md:flex justify-center ${
        isOpen ? "block h-screen w-screen ml-2" : "hidden"
    } md:items-center bg-white py-2 md:py-4 md:bg-transparent transition-all duration-300 w-full md:w-auto`;

    const menuItemClasses = "block md:inline-block my-2 md:my-0 md:mx-2 lg:mx-5 hover:underline transition-opacity";

    const menuButtonClasses = "rounded-lg border-[2px] border-customBlue whitespace-nowrap";

    const spanClasses = "hover:text-customBlue whitespace-nowrap";

    return (
        <nav className="relative flex flex-col md:flex-row justify-center items-center py-3 m-5  px-8 md:px-10">
            <div className="flex justify-between items-center w-full md:w-auto gap-[200px] ">
                <Link href="#" >
                    <span className="text-customBlue lg:ml-auto lg:mr-10 font-semibold text-3xl tracking-tight">Website</span>
                </Link>
                <button onClick={toggleMenu} className={menuIconClasses}>
                    {isOpen ? <img src="/CloseIcon.png" alt="" width={25} height={25} /> : <img src="/MenuIcon.svg" width={25} height={25} />}
                </button>
            </div>

            <div className={`${menuContainerClasses} sm:ml-10`}>
                <Link href="#">
                    <span className={`${spanClasses} lg:ml-2 `}>Начало</span>
                </Link>
                <Link href="#">
                    <span className={spanClasses}>За нас</span>
                </Link>
                <Link href="#">
                    <span className={spanClasses}>Услуги</span>
                </Link>
                <Link href="#">
                    <span className={spanClasses}>Цени</span>
                </Link>
                <Link href="#">
                    <span className={`${spanClasses} lg:ml-2`}>Как работим</span>
                </Link>
                <Link href="#">
                    <span className={`${spanClasses} md:mr-5 lg:mr-2`}>Контакти</span>
                </Link>
                <Link href="#" className={`${menuItemClasses} lg:ml-20 lg:mr-8 `}>
                    <span className={spanClasses}>Профил</span>
                </Link>
            </div>

            <div>
                <button className={`${menuButtonClasses} hidden lg:flex md:flex hover:bg-gray-400 p-2 lg:ml-[105px]`}>Заявка за пратка</button>
            </div>
        </nav>
    )
}

export default NavBar;

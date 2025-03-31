import { NavLink } from "react-router";
import { useState } from "react";

const navLink = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Shop",
        path: "/shop"
    },
    {
        title: "Category",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        ),
        category: [
            {
                title: "Beauty",
                path: "/beauty"
            },
            {
                title: "Fragrances",
                path: "/fragrances"
            },
            {
                title: "Furniture",
                path: "/furniture"
            },
            {
                title: "Groceries",
                path: "/groceries"
            },
        ]
    },
    {
        title: "Contact us",
        path: "/contactus"
    },
];

const ListPage = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (title) => {
        setOpenCategory(openCategory === title ? null : title);
    };

    return (
        <>
            {navLink.map((item) => (
                <li key={item.title}>
                    {item.path ? (
                        <NavLink
                            className="text-[18px] text-slate-900 font-bold transition duration-300 hover:text-[var(--color-primary-900)] hover:underline"
                            to={item.path}>{item.title}</NavLink>
                    ) : item.category ? (
                        <div className="relative group z-30">
                            <button
                                onClick={() => toggleCategory(item.title)}
                                className='cursor-pointer flex gap-[10px] items-center justify-center text-[18px] text-slate-900 font-bold transition duration-300 hover:text-[var(--color-primary-900)] hover:underline'
                            >
                                {item.title}
                                {item.icon}
                            </button>
                            <ul className={`absolute left-0 mt-2 w-40 bg-white shadow-md ${openCategory === item.title ? 'block' : 'hidden'} md:group-hover:block`}>
                                {item.category.map((subItem) => (
                                    <li key={subItem.title} className="px-4 py-2 hover:bg-gray-100 text-[18px] text-slate-900 font-bold transition duration-300 hover:text-[var(--color-primary-900)] hover:underline">
                                        <NavLink to={subItem.path}>{subItem.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </li>
            ))}
        </>
    );
};

export default ListPage;

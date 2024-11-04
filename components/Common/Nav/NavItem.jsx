import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const router = useRouter();
    const isActive = router.asPath === NavRoute;
    const className = isActive ? "rounded-xl !text-white font-bold tracking-widest" : '';

    return (
        <Link
            onClick={() => setIsOpen(false)}
            href={NavRoute}
            className={`${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl py-1.5 font-semibold space-x-4 text-base`}
        >
            {React.cloneElement(NavIcon, { color: '#9F2B68' })}
            <span>{NavText}</span>
        </Link>
    );
};

export default NavItem;

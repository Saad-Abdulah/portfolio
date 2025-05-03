import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const NavItem = ({ NavIcon, NavText, NavRoute }) => {
    const router = useRouter();
    const className = router.asPath === `${NavRoute}` ? "!text-DeepNightBlack bg-Green font-bold tracking-widest" : '';

    return (
        <Link
            href={NavRoute}
            className={`${className} transition flex items-center px-1 sm:px-3 py-1 sm:py-2 hover:bg-EveningBlack/10 text-SilverGray hover:text-SilverGray rounded-xl font-semibold space-x-1 sm:space-x-2 text-xs sm:text-base min-w-[70px] sm:min-w-[120px] justify-center`}
        >
            <span className="hidden xs:inline">{NavIcon}</span>
            <span className="whitespace-nowrap text-xs sm:text-base">{NavText}</span>
        </Link>
    )
}

export default NavItem
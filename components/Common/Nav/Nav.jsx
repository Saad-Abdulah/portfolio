import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'

const Nav = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-2 sm:py-4">
            <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 rounded-full shadow-lg">
                <NavItem NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                <NavItem NavRoute={'/portfolio'} NavIcon={<FiAward />} NavText={'Portfolio'} />
                <NavItem NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={'Background'} />
                <NavItem NavRoute={'/contact'} NavIcon={<FaHandshake />} NavText={'Contact'} />
            </div>
        </div>
    )
}

export default Nav
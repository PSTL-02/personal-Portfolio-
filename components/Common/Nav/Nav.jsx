import { ImCross, ImHome } from 'react-icons/im';
import { FiAward } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import NavItem from './NavItem';
import DrawerLayout from '../DrawerLayout';

const Nav = ({ setIsOpen, isOpen }) => {
  return (
    <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
      <div
        className="absolute z-50 flex flex-col justify-center lg:inset-y-0 -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden"
        role="navigation"
        aria-label="Sidebar Navigation"
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close Navigation"
          className="flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack"
        >
          <ImCross color="#9F2B68" />
        </button>
        <div className="flex flex-col gap-y-2 px-6 w-full transition">
          <NavItem setIsOpen={setIsOpen} NavRoute="/" NavIcon={<ImHome color="#9F2B68" />} NavText="Home" />
          <NavItem setIsOpen={setIsOpen} NavRoute="/contact" NavIcon={<FaHandshake color="#9F2B68" />} NavText="Contact" />
          <NavItem setIsOpen={setIsOpen} NavRoute="/background" NavIcon={<HiIdentification color="#9F2B68" />} NavText="Background" />
          <NavItem setIsOpen={setIsOpen} NavRoute="/portfolio" NavIcon={<FiAward color="#9F2B68" />} NavText="Portfolio" />
        </div>
      </div>
    </DrawerLayout>
  );
};

export default Nav;

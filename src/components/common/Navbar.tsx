import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { navLinks } from '../../utils/constants';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2-bg.png';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex justify-between items-center navbar'>
			<img src={logo} alt='Wephco' className='w-32' />

			<ul className='list-none sm:flex hidden justify-center items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-semibold uppercase cursor-pointer text-[16px] border border-solid border-primary px-4 py-2 rounded-full ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-gray-600 hover:text-white hover:bg-primary`}
					>
						<Link to={`/${nav.id}`}>{nav.title}</Link>
					</li>
				))}
			</ul>

			{/* Mobile View */}
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<div
					className='w-[28px] h-[28px] object-contain'
					onClick={() => setToggle((prev) => !prev)}
				>
					{toggle ? <AiFillCloseCircle /> : <BiMenu />}
				</div>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-red-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
				>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mr-0' : 'mb-5'
								} text-white`}
							>
								<Link to={`/${nav.id}`}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

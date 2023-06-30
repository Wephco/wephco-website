import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { navLinks } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src='/wephcoLogo.ico' alt='Wephco' className='w-16 h-16' />

			<ul className='list-none sm:flex hidden justify-center items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-semibold uppercase cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-gray-600 hover:text-red-400`}
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
					} p-6 bg-red-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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

import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { navLinks } from '../../utils/constants';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src='/wephcoLogo.ico' alt='Wephco' className='w-16 h-16' />

			<ul className='list-none sm:flex hidden justify-center items-center flex-1'>
				{navLinks.map((nav) => (
					<li
						key={nav.id}
						className={`font-poppins font-semibold uppercase cursor-pointer text-[16px] ml-auto mr-10 text-gray-600 hover:text-red-400`}
					>
						<Link to={nav.id} smooth duration={650}>{nav.title}</Link>
					</li>
				))}
				<li className='font-poppins font-semibold uppercase cursor-pointer text-[16px] ml-auto mr-10'>
					<button className='btn btn-active btn-neutral rounded-full'>Log in</button>
				</li>
				<li className='font-poppins font-semibold uppercase cursor-pointer text-[16px] mr-0'>
					<button className='btn btn-outline rounded-full'>Sign up</button>
				</li>
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
					} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-2xl z-10`}
				>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] mb-5 text-gray-600`}
							>
								<Link to={`/${nav.id}`}>{nav.title}</Link>
							</li>
						))}
						<li className='font-poppins font-semibold uppercase cursor-pointer text-[16px] mb-5'>
							<button className='btn btn-active btn-neutral w-full rounded-full'>Log in</button>
						</li>
						<li className='font-poppins font-semibold uppercase cursor-pointer text-[16px] mb-5'>
							<button className='btn btn-outline w-full rounded-full'>Sign up</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

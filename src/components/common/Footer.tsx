import styles from '../style';
import { footerLinks, socialMedia } from '../../utils/constants';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-bg.png';

const Footer = () => {
	return (
		<section className={`${styles.flexCenter} ${styles.paddingY} flex-col p-8 bg-black`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className='flex-1 flex flex-col justify-start mr-10'>
					<img src={logo} alt='Wephco' className='w-60 object-contain' />
					{/* <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p> */}
				</div>

				<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
					{footerLinks.map((footerLink, index) => (
						<div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
							<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
								{footerLink.title}
							</h4>
							<ul className='list-none mt-4'>
								{footerLink.links.map((link, index) => (
									<li
										key={index}
										className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-500 hover:text-secondary cursor-pointer ${
											index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
										}`}
									>
										<Link to={link.link}>{link.name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
				<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
					{new Date().getFullYear()} Wephco Enterprises. All Rights Reserved.
				</p>
				<div className='flex flex-row md:mt-0 mt-6'>
					{socialMedia.map((social, index) => (
						<a href={social.link} key={index}>
							<img
								key={social.id}
								src={social.icon}
								alt={social.id}
								className={`w-[21px] h-[21px] object-contain cursor-pointer ${
									index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
								}`}
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;

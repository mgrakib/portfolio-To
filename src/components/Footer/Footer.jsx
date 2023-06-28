/** @format */

import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<div className='pt-10 mt-10 border-t border-[#d6d6d664]'>
			<p className='text-center'>
				Copyright © TOMA 2023 | All rights reserved
			</p>

			<div className='pb-2 pt-5'>
				<Link
					to='home'
					// className='navLink'
					spy={true}
					smooth={true}
					duration={500}
				>
					<button className='w-[40px] h-[40px] bg-gradient-to-r from-ternary-color to-secondary-color rounded-full flex items-center justify-center text-xl mx-auto animate-bounce'>
						<BiUpArrowAlt />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Footer;

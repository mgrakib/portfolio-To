/** @format */

import Container from "../Container/Container";
import "./NavBar.css";
import * as Scroll from "react-scroll";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

import logo from "../../assets/logo.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
const NavBar = () => {
    const [isOpen , setIsOpen] = useState(false)

	const [isActive, setIsActive] = useState('home')


    const navItems = (
		<>
			<Link
				to='home'
				className={`navLink ${isActive === "home" && "active-link"}`}
				onClick={() => setIsActive("home")}
				spy={true}
				smooth={true}
				duration={500}
			>
				<li>Home</li>
			</Link>
			<Link
				to='aboutme'
				className={`navLink ${isActive === "aboutme" && "active-link"}`}
				onClick={() => setIsActive("aboutme")}
				spy={true}
				smooth={true}
				duration={500}
			>
				<li>About Me</li>
			</Link>
			<Link
				to='portfolio'
				className={`navLink ${
					isActive === "portfolio" && "active-link"
				}`}
				onClick={() => setIsActive("portfolio")}
				spy={true}
				smooth={true}
				duration={500}
			>
				<li>Portfolio</li>
			</Link>

			<Link
				to='skills'
				className={`navLink ${isActive === "skills" && "active-link"}`}
				onClick={() => setIsActive("skills")}
				spy={true}
				smooth={true}
				duration={500}
			>
				<li>Skills</li>
			</Link>

			<Link
				className={`navLink ${isActive === "resume" && "active-link"}`}
				onClick={() => setIsActive("resume")}
			>
				<li>Resume Download Link</li>
			</Link>

			<Link
				to='contact'
				className={`navLink ${isActive === "contact" && "active-link"}`}
				onClick={() => setIsActive("contact")}
				spy={true}
				smooth={true}
				duration={500}
			>
				<li>Contact</li>
			</Link>
			<Link
				className={`navLink ${isActive === "blogs" && "active-link"}`}
				onClick={() => setIsActive("blogs")}
			>
				<li>Blogs</li>
			</Link>

			{/* 14090 */}
		</>
	);
	return (
		<div className='bg-primary-color fixed top-0 left-0 w-full z-50'>
			<Container>
				<div className='relative flex items-center justify-between h-16'>
					<Link
						to='home'
						spy={true}
						smooth={true}
						duration={500}
						className='cursor-pointer'
					>
						<div className='flex items-center gap-2'>
							<div>
								<img
									src={logo}
									alt=''
									className='w-9'
								/>
							</div>
							<p className='text-[18px] font-[700] text-white-color flex items-center'>
								Toma{" "}
								<span className='hidden md:block ml-2'>
									{" "}
									| Web Developer
								</span>
							</p>
						</div>
					</Link>

					<div className='hidden md:block'>
						<ul className='flex items-center gap-8 text-white-color'>
							{navItems}
						</ul>
					</div>

					<div className='md:hidden'>
						<div>
							<HiOutlineMenu
								onClick={() => setIsOpen(!isOpen)}
								className='text-white-color text-2xl cursor-pointer'
							/>
						</div>
					</div>
				</div>
			</Container>
			<ul
				className={`bg-primary-color absolute right-0 top-full w-full flex flex-col gap-3 px-2 text-white-color font-bold py-4 ${
					!isOpen ? "hidden" : ""
				}`}
			>
				{navItems}
			</ul>
		</div>
	);
};

export default NavBar;

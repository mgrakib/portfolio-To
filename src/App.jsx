/** @format */

import { useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
// import ParticlesEffect from './components/Particles/Particles';
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import { FaFacebook, FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	console.log(isOpen);
	return (
		<div>
			<div className='w-full'>
				<NavBar
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			</div>

			<div>
				<div onClick={() => setIsOpen(false)}>
					<Home />
					<AboutMe />
					<Portfolio />
					<Skills />
					<Contact />
				</div>
			</div>

			<div className=' fixed top-1/2 -translate-y-1/2 right-0'>
				<div className='flex flex-col items-end'>
					<a href=''>
						<div className='flex items-center group '>
							<div className='p-4 bg-primary-color text-white text-2xl group-hover:rounded-tl group-hover:rounded-bl rounded-tl'>
								<FaLinkedin />
							</div>
							<div className='bg-primary-color text-white py-4 max-w-0 group-hover:max-w-[100px] duration-500'>
								LinkedIn
							</div>
						</div>
					</a>
					<a href=''>
						<div className='flex items-center group '>
							<div className='p-4 bg-primary-color text-white text-2xl group-hover:rounded-tl group-hover:rounded-bl'>
								<FaGithub />
							</div>
							<div className='bg-primary-color text-white py-4 max-w-0 group-hover:max-w-[100px] duration-500'>
								LinkedIn
							</div>
						</div>
					</a>
					<a href=''>
						<div className='flex items-center group '>
							<div className='p-4 bg-primary-color text-white text-2xl group-hover:rounded-tl group-hover:rounded-bl'>
								<HiMail />
							</div>
							<div className='bg-primary-color text-white py-4 max-w-0 group-hover:max-w-[100px] duration-500'>
								Mail
							</div>
						</div>
					</a>
					<a href=''>
						<div className='flex items-center group '>
							<div className='p-4 bg-primary-color text-white text-2xl group-hover:rounded-tl group-hover:rounded-bl rounded-bl'>
								<FaFacebook />
							</div>
							<div className='bg-primary-color text-white py-4 max-w-0 group-hover:max-w-[100px] duration-500'>
								Facebook
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default App;

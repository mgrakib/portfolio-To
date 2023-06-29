/** @format */

import Container from "../Container/Container";
import user from "../../assets/img.png";
import ParticlesEffect from "../Particles/Particles";
import pdfFile from "../../../public/Md. Golam Rakib Full Stack Developer.pdf";

import { Cursor, cursorStyle, useTypewriter } from "react-simple-typewriter";
const Home = () => {
	const handleDownload = () => {
		window.open(
			`https://drive.google.com/uc?id=1qRMUA7WjRWr2xZehtV-x4Dw5cJ1280E2&export=download`
		);
	};

	const [text] = useTypewriter({
		words: ["Web Designer.", "JavaScript Developer.", "React Developer"],
		loop: 0,
	});
	return (
		<div className='relative'>
			<ParticlesEffect />
			<div
				name='home'
				className='pt-16 bg-gradient-to-b from-primary-color to-black'
			>
				<Container>
					<div className='mx-[20px] md:mx-[55px] flex flex-col md:flex-row items-center text-white-color gap-10 md:gap-0'>
						<div className='md:w-1/2 relative'>
							<div className='relative mt-2 '>
								<p className='text-base md:text-lg mb-1 md:mb-3'>
									WELCOME TO MY WORLD
								</p>
								<h1 className='text-5xl font-[700]  md:text-6xl md:font-[800] leading-[58px] md:leading-[78px] mb-2 md:mb-4'>
									Hi, I'm{" "}
									<span className='capitalize'>Toma</span>
								</h1>
								<p className='text-2xl md:text-4xl font-[500] mb-4'>
									I am a <span>{text}</span>
									<Cursor cursorColor='white' />
								</p>

								<div>
									<p className='text-sm md:text-base'>
										I use animation as a third dimension by
										which to simplify experiences and guide
										through each and every interaction. I'm
										not adding motion just to spruce things
										up, but doing it in ways that.
									</p>
								</div>
								<div>
									<button
										onClick={handleDownload}
										className='bg-gradient-to-r from-ternary-color to-secondary-color py-3 px-6 rounded-lg mt-6 animate-bounce'
									>
										Download Resume
									</button>
								</div>
							</div>
						</div>
						<div className='md:w-1/2 '>
							<div className='relative'>
								<div className='w-[85%] md:w-[75%]  mx-auto relative z-10'>
									<img
										src={user}
										alt=''
										className='w-full'
									/>
								</div>

								<div className='absolute w-full h-max top-1/2  -translate-y-1/2 '>
									<div className='grid grid-cols-2 opacity-50 '>
										<div className='h-60 rounded-full bg-gradient-to-l from-blue-600 to-transparent blur-3xl'></div>
										<div className='h-60 rounded-full bg-gradient-to-r from-blue-600 to-transparent blur-3xl'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Home;

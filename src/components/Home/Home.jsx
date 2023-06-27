/** @format */

import Container from "../Container/Container";
import user from '../../assets/img.png'

const Home = () => {
	return (
		<div
			name='home'
			className='pt-16 bg-gradient-to-b from-primary-color to-black'
		>
			<Container>
				<div className='flex flex-col md:flex-row items-center text-white-color gap-10 md:gap-0'>
					<div className='md:w-1/2 p-2 md:p-5'>
						<div>
							<p className='text-lg mb-1 md:mb-3'>WELCOME TO MY WORLD</p>
							<h1 className='text-5xl font-[700]  md:text-6xl md:font-[800] leading-[58px] md:leading-[78px] mb-2 md:mb-4'>
								Hi, I'm <span className='capitalize'>Toma</span>
							</h1>
							<p className='text-2xl md:text-4xl font-[500] mb-4'>
								I am a JavaScript Developer.|
							</p>

							<div>
								<p className='text-base'>
									I use animation as a third dimension by
									which to simplify experiences and guide
									through each and every interaction. I'm not
									adding motion just to spruce things up, but
									doing it in ways that.
								</p>
							</div>
							<div>
								<button className='bg-gradient-to-r from-ternary-color to-secondary-color py-3 px-6 rounded-lg mt-6'>
									Download Resume
								</button>
							</div>
						</div>
					</div>
					<div className='md:w-1/2 '>
						<div className='w-[75%]  mx-auto'>
							<img
								src={user}
								alt=''
								className='w-full'
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;

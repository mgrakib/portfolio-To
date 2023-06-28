import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Portfolio.css'

import arrayDestruct from '../../assets/project/arrayDestruct-6e958487.jpg'
import installNode from "../../assets/project/installNode-a6a2f17b.jpg";
import navbar from "../../assets/project/navbar-270beda7.jpg";
import reactParallax from "../../assets/project/reactParallax-88913817.jpg";
import reactSmooth from "../../assets/project/reactSmooth-295220a4.jpg";
import reactWeather from "../../assets/project/reactWeather-b53d1554.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const Portfolio = () => {
    return (
		<div
			name='portfolio'
			className='pt-16 bg-gradient-to-b from-black to-primary-color text-white-color'
		>
			<Container>
				<SectionTitle
					title='Portfolio'
					subTitle='Check out some of my work right here'
				/>

				<div className='mt-8 mx-[55px]'>
					<div className='grid grid-cols-3 gap-5'>
						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='0'
								>
									<img
										src={arrayDestruct}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between px-5'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='250'
								>
									<button className='m-4 py-3 px-6'>
										Demo
									</button>
								</div>

								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='300'
								>
									<button className='m-4 py-3 px-6'>
										Code
									</button>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='100'
								>
									<img
										src={reactParallax}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between px-5'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='350'
								>
									<button className='m-4 py-3 px-6'>
										Demo
									</button>
								</div>

								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='400'
								>
									<button className='m-4 py-3 px-6'>
										Code
									</button>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='300'
								>
									<img
										src={navbar}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between px-5'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='550'
								>
									<button className='m-4 py-3 px-6'>
										Demo
									</button>
								</div>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='600'
								>
									<button className='m-4 py-3 px-6'>
										Code
									</button>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='50'
								>
									<img
										src={reactSmooth}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between px-5'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='200'
								>
									<button className='m-4 py-3 px-6'>
										Demo
									</button>
								</div>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='250'
								>
									<button className='m-4 py-3 px-6'>
										Code
									</button>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='150'
								>
									<img
										src={installNode}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between px-5'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='300'
								>
									<button className='m-4 py-3 px-6'>
										Demo
									</button>
								</div>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='350'
								>
									<button className='m-4 py-3 px-6'>
										Code
									</button>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='250'
								>
									<img
										src={reactWeather}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between px-5'>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='400'
								>
									<button className='m-4 py-3 px-6'>
										Demo
									</button>
								</div>
								<div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='450'
								>
									<button className='m-4 py-3 px-6'>
										Code
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Portfolio;
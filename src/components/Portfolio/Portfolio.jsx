import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Portfolio.css'


import portfolio from '../../assets/project/portfolio.png'
import foodNetwork from '../../assets/project/food-network.png'
import safariToy from '../../assets/project/safari-toy-web.png'


import AOS from "aos";
import "aos/dist/aos.css"; 
import { FaGithub, FaLink } from 'react-icons/fa6';
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

				<div className='mt-8 mx-[20px] md:mx-[55px]'>
					<div className='grid md:grid-cols-3 gap-5'>
						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div
								style={{ backgroundImage: `url(${portfolio})` }}
								className='overflow-hidden group h-[300px] bg-cover bg-top duration-[4000ms] ease-in-out hover:bg-bottom'
							>
								{/* <div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='0'
								>
									<img
										src={arrayDestruct}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div> */}
							</div>

							<div className='p-3'>
								<div>
									<h3 className='text-xl mb-2'>
										Toma - Portfolio(React)
									</h3>
								</div>
								<div>
									<p>Technologies</p>
								</div>
								<div className='mt-1'>
									<div className='flex items-center gap-2 text-xs flex-wrap justify-between'>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											React
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Tailwind
										</p>

										<div className='flex items-center justify-end gap-2 flex-1'>
											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='250'
											>
												<button className='text-lg p-1 border rounded-full'>
													<FaGithub className='' />
												</button>
											</div>

											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='300'
											>
												<button
													className='text-lg p-1 border rounded-full'
													title='Live Link'
												>
													<FaLink />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div
								style={{
									backgroundImage: `url(${safariToy})`,
								}}
								className='overflow-hidden group h-[300px] bg-cover bg-top duration-[4000ms] ease-in-out hover:bg-bottom'
							>
								{/* <div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='0'
								>
									<img
										src={arrayDestruct}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div> */}
							</div>

							<div className='p-3'>
								<div>
									<h3 className='text-xl mb-2'>
										SafariToyShop
									</h3>
								</div>
								<div>
									<p>Technologies</p>
								</div>
								<div className='mt-1'>
									<div className='flex items-center gap-2 text-xs flex-wrap justify-between'>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											HTML
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											CSS
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Tailwind
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											React.js
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Express.js
										</p>

										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Firebase
										</p>

										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											MongoDB
										</p>
										<div className='flex items-center justify-end gap-2 flex-1'>
											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='200'
											>
												<a href='https://github.com/toma2023/safari-toy-client'>
													<button
														className='text-lg p-1 border rounded-full'
														title='GitHub Client'
													>
														<FaGithub className='' />
													</button>
												</a>
											</div>

											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='250'
											>
												<a href='https://github.com/toma2023/safari-toy-server'>
													<button
														className='text-lg p-1 border rounded-full'
														title='GitHub Server'
													>
														<FaGithub className='' />
													</button>
												</a>
											</div>

											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='300'
											>
												<a
													href='https://safari-toy.web.app/'
													target='blank'
												>
													<button
														className='text-lg p-1 border rounded-full'
														title='Live Link'
													>
														<FaLink />
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div
								style={{
									backgroundImage: `url(${foodNetwork})`,
								}}
								className='overflow-hidden group h-[300px] bg-cover bg-top duration-[4000ms] ease-in-out hover:bg-bottom'
							>
								{/* <div
									data-aos='fade-up'
									data-aos-offset='0'
									data-aos-delay='0'
								>
									<img
										src={arrayDestruct}
										alt=''
										className='w-full group-hover:scale-105 duration-300'
									/>
								</div> */}
							</div>

							<div className='p-3'>
								<div>
									<h3 className='text-xl mb-2'>
										Food Network
									</h3>
								</div>
								<div>
									<p>Technologies</p>
								</div>
								<div className='mt-1'>
									<div className='flex items-center gap-2 text-xs flex-wrap justify-between'>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											HTML
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											CSS
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Tailwind
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											React.js
										</p>
										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Express.js
										</p>

										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											Firebase
										</p>

										<p className='border-b border-gray-500 py-1 px-2 rounded-full'>
											MongoDB
										</p>

										<div className='flex items-center justify-end gap-2 flex-1'>
											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='200'
											>
												<a
													href='https://github.com/toma2023/food-netword-client'
													target='blank'
												>
													<button
														className='text-lg p-1 border rounded-full'
														title='GitHub Client'
													>
														<FaGithub className='' />
													</button>
												</a>
											</div>
											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='250'
											>
												<a
													href='https://github.com/toma2023/food-netword-server'
													target='blank'
												>
													<button
														className='text-lg p-1 border rounded-full'
														title='GitHub Server'
													>
														<FaGithub className='' />
													</button>
												</a>
											</div>

											<div
												data-aos='fade-up'
												data-aos-offset='0'
												data-aos-delay='300'
											>
												<a
													href='https://food-network-b95a0.web.app/'
													target='blank'
												>
													<button
														className='text-lg p-1 border rounded-full'
														title='Live Link'
													>
														<FaLink />
													</button>
												</a>
											</div>
										</div>
									</div>
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
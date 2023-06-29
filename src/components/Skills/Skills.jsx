import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Skills.css'

import html from '../../assets/techonology/html-d20c9482.png'
import css from '../../assets/techonology/css-4040bdba.png'
import js from '../../assets/techonology/js.png'
import nextjs from '../../assets/techonology/nextjs-1ea52ea1.png'
import react from "../../assets/techonology/react.png";
import tailwind from "../../assets/techonology/tailwind-47f3710a.png";
import github from "../../assets/techonology/github-e59bf158.png";


import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const Skills = () => {
    return (
		<div
			name='skills'
			className='pt-16 bg-gradient-to-b from-primary-color to-black text-white-color'
		>
			<Container>
				<SectionTitle
					title='Skills'
					subTitle="These are the technologies I've worked with"
				/>

				<div className='mt-8 mx-[20px] md:mx-[55px]'>
					<div className='grid md:grid-cols-3 gap-10'>
						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='0'
						>
							<div className='shadow-md shadow-orange-500 rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={html}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='150'
									>
										<p>HTML</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='50'
						>
							<div className='shadow-md shadow-blue-500 rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={css}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='200'
									>
										<p>CSS</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='100'
						>
							<div className='shadow-md shadow-yellow-500 rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={js}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='250'
									>
										<p>JavaScript</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='150'
						>
							<div className='shadow-md shadow-blue-600 rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={nextjs}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='300'
									>
										<p>Next.js</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='200'
						>
							<div className='shadow-md shadow-white rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={react}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='350'
									>
										<p>React</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='250'
						>
							<div className='shadow-md shadow-sky-400 rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={tailwind}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='400'
									>
										<p>Tailwind</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos='fade-up'
							data-aos-offset='0'
							data-aos-delay='300'
						>
							<div className='shadow-md shadow-gray-400 rounded-lg overflow-hidden'>
								<div className='overflow-hidden group pt-3'>
									<img
										src={github}
										alt=''
										className='w-[80px] mx-auto group-hover:scale-105 duration-300'
									/>
								</div>

								<div className='flex items-center justify-center py-5 text-center px-5'>
									<div
										data-aos='zoom-in'
										data-aos-offset='0'
										data-aos-delay='450'
									>
										<p>GitHub</p>
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

export default Skills;
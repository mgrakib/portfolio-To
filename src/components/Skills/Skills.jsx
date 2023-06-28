import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Skills.css'

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

				<div className='mt-8 mx-[55px]'>
					<div className='grid grid-cols-3 gap-5'>
						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<img
									src={arrayDestruct}
									alt=''
									className='w-full group-hover:scale-105 duration-300'
								/>
							</div>

							<div className='flex items-center justify-between px-5'>
								<button className='m-4 py-3 px-6'>Demo</button>
								<button className='m-4 py-3 px-6'>Code</button>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<img
									src={reactParallax}
									alt=''
									className='w-full group-hover:scale-105 duration-300'
								/>
							</div>

							<div className='flex items-center justify-between px-5'>
								<button className='m-4 py-3 px-6'>Demo</button>
								<button className='m-4 py-3 px-6'>Code</button>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<img
									src={navbar}
									alt=''
									className='w-full group-hover:scale-105 duration-300'
								/>
							</div>

							<div className='flex items-center justify-between px-5'>
								<button className='m-4 py-3 px-6'>Demo</button>
								<button className='m-4 py-3 px-6'>Code</button>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<img
									src={reactSmooth}
									alt=''
									className='w-full group-hover:scale-105 duration-300'
								/>
							</div>

							<div className='flex items-center justify-between px-5'>
								<button className='m-4 py-3 px-6'>Demo</button>
								<button className='m-4 py-3 px-6'>Code</button>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<img
									src={installNode}
									alt=''
									className='w-full group-hover:scale-105 duration-300'
								/>
							</div>

							<div className='flex items-center justify-between px-5'>
								<button className='m-4 py-3 px-6'>Demo</button>
								<button className='m-4 py-3 px-6'>Code</button>
							</div>
						</div>

						<div className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
							<div className='overflow-hidden group'>
								<img
									src={reactWeather}
									alt=''
									className='w-full group-hover:scale-105 duration-300'
								/>
							</div>

							<div className='flex items-center justify-between px-5'>
								<button className='m-4 py-3 px-6'>Demo</button>
								<button className='m-4 py-3 px-6'>Code</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Skills;
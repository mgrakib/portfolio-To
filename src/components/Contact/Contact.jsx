import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Contact.css'

import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    return (
		<div
			name='contact'
			className='pt-16 bg-gradient-to-b from-black to-primary-color text-white-color'
		>
			<Container>
				<SectionTitle
					title='Contact'
					subTitle='Submit the form below to get in touch with me'
				/>

				<div className='mt-8 mx-[20px] md:mx-[55px]'>
					<div className='grid md:grid-cols-3 gap-y-10 gap-x-0 md:gap-20 items-center'>
						<div className='md:col-span-1'>
							<div className='relative'>
								<div className='absolute h-max top-1/2 transform -translate-y-1/2 w-full '>
									<div className='grid grid-cols-2 opacity-80'>
										<div className='h-40 rounded-full bg-gradient-to-l from-blue-600 to-transparent -mr-20 blur-3xl'></div>
										<div className='h-40 rounded-full bg-gradient-to-r from-blue-600 to-transparent -ml-20 blur-3xl'></div>
									</div>
								</div>

								<div className='flex flex-col rounded-lg relative z-40 overflow-hidden w-full'>
									<div className='bg-[#111827b3] p-6 flex items-start gap-3 border-b border-[#d6d6d664]'>
										<div className='p-3 bg-gradient-to-r from-ternary-color to-secondary-color inline-block rounded-full'>
											<FaLocationDot />
										</div>
										<div>
											<h5 className='text-base lg:text-lg font-semibold text-[#FCA61F]'>
												Address:
											</h5>
											<p className='text-[#D1D5DB]  text-xs lg:text-sm'>
												Kashimpur, Gazipur, Dhaka
											</p>
										</div>
									</div>
									<div className='bg-[#111827b3] p-6 flex items-start gap-3 border-b border-[#d6d6d664]'>
										<div className='p-3 bg-gradient-to-r from-ternary-color to-secondary-color inline-block rounded-full'>
											<FaLocationDot />
										</div>
										<div>
											<h5 className='text-base lg:text-lg font-semibold text-[#FCA61F]'>
												Email:
											</h5>
											<p className='text-[#D1D5DB]  text-xs lg:text-sm'>
												mgrakibbd@gmail.com
											</p>
											<p className='text-[#D1D5DB]  text-xs lg:text-sm'>
												mgr@hotmail.com
											</p>
										</div>
									</div>
									<div className='bg-[#111827b3] p-6 flex items-start gap-3'>
										<div className='p-3 bg-gradient-to-r from-ternary-color to-secondary-color inline-block rounded-full'>
											<FaLocationDot />
										</div>
										<div>
											<h5 className='text-base lg:text-lg font-semibold text-[#FCA61F]'>
												Address:
											</h5>
											<p className='text-[#D1D5DB]  text-xs lg:text-sm'>
												+880 181111-5794
											</p>
											<p className='text-[#D1D5DB]  text-xs lg:text-sm'>
												+880 173144-8023
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className=' md:col-span-2'>
							<div className='grid gap-3 md:gap-4 lg:gap-5 '>
								<input
									type='text'
									placeholder='Full Name'
									className='w-full rounded-full border border-[#d6d6d664]  bg-[#111827]  py-3 px-5 md:py-4 md:px-6 text-sm lg:text-base font-medium  outline-none focus:shadow-md'
								/>
								<input
									type='text'
									placeholder='Email Address'
									className='w-full rounded-full border border-[#d6d6d664]  bg-[#111827]  py-3 px-5 md:py-4 md:px-6 text-sm lg:text-base font-medium  outline-none focus:shadow-md'
								/>
								<input
									type='text'
									placeholder='Enter Your Subject'
									className='w-full rounded-full border border-[#d6d6d664]  bg-[#111827]  py-3 px-5 md:py-4 md:px-6 text-sm lg:text-base font-medium  outline-none focus:shadow-md'
								/>

								<textarea
									name=''
									id=''
									placeholder='Type Your Message'
									rows='4'
									className='w-full rounded-3xl border border-[#d6d6d664]  bg-[#111827]  py-3 px-5 md:py-4 md:px-6 text-sm lg:text-base font-medium  outline-none focus:shadow-md'
								></textarea>

								<div>
									<button className='bg-gradient-to-r from-ternary-color to-secondary-color py-3 px-6 rounded-lg '>
										Let's Talk
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</Container>
		</div>
	);
};

export default Contact;
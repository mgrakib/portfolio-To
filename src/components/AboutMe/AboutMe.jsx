/** @format */

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/myProfile.jpg";

import js from "../../assets/techonology/js.png";
import react from "../../assets/techonology/react.png";
import next from "../../assets/techonology/nextjs-1ea52ea1.png";


import { BiSolidCircle } from "react-icons/bi";

const AboutMe = () => {
	return (
		<div
			name='aboutme'
			className='pt-16 bg-gradient-to-b from-primary-color to-black text-white-color'
		>
			<Container>
				<SectionTitle title={"About Me"} />

				<div className='grid grid-cols-3 items-center'>
					<div className='col-span-1'>
						<div className='m-[55px] p-[15px] shadow-[0_4px_6px rgba(255,255,255,.3)] bg-primary-color inline-block'>
							<img
								src={img}
								alt=''
								className='block max-w-[200px]'
							/>

							<div className='mt-3 flex items-center justify-between'>
								<div>
									<img
										src={js}
										alt=''
										className='w-[45px]'
									/>
								</div>
								<div>
									<img
										src={react}
										alt=''
										className='w-[45px]'
									/>
								</div>
								<div>
									<img
										src={next}
										alt=''
										className='w-[45px]'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-2 px-10'>
						<div className=''>
							<div className='border border-[rgba(255,255,255,0.54)]'>
								<div className='flex items-center px-5 py-3 bg-[rgba(255,255,255,.03)] gap-1 border-b'>
									<BiSolidCircle className='text-[rgb(237,76,92)] text-[10px]' />
									<BiSolidCircle className='text-[#FDCB58] text-[10px]' />
									<BiSolidCircle className='text-[rgb(120,177,89)] text-[10px]' />
								</div>

								<div className='px-5 py-3'>
									<div className='p-3'>
										<h5>Hi :)</h5>

										<br />
										<br />
										<p className='text-[14px] text-justify font-[300]'>
											👋 I'm Toma. Fictional person for
											preview purposes :) I'm working with
											newest front-end frameworks like
											Angular, React and Vue. What you are
											seeing now is portfolio template
											from Dorota1997. If you like this
											portfolio template, make sure to ⭐
											the repository to make it more
											recognizable for other users. Thank
											you 💜
										</p>
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

export default AboutMe;

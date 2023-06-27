
const SectionTitle = ({title, subTitle}) => {
    return (
		<div className='mb-5 md:mb-8'>
			<h3 className='text-4xl font-[700] leading-[46px] border-b-4 border-gray-500 inline-block capitalize'>
				{title}
			</h3>

            <p className="mt-3">{ subTitle}</p>
		</div>
	);
};

export default SectionTitle;
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Portfolio.css'

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
			</Container>
		</div>
	);
};

export default Portfolio;
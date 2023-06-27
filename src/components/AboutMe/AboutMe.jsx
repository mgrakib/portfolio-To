import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutMe = () => {
    return (
		<div
			name='aboutme'
			className='pt-16 bg-gradient-to-b from-primary-color to-black text-white-color'
		>
			<Container>
				<SectionTitle title={'About Me'}/>

				<div>
					<p className="mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Asperiores qui fugit numquam! Cum vitae temporibus
						molestiae dicta illum laboriosam similique at mollitia
						nihil iusto repellat numquam eos illo perspiciatis a
						unde minima commodi id cupiditate laborum iste, beatae
						maiores. Voluptatum quisquam dignissimos tempore
						asperiores sit ratione officiis officia alias vitae.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Asperiores qui fugit numquam! Cum vitae temporibus
						molestiae dicta illum laboriosam similique at mollitia
						nihil iusto repellat numquam eos illo perspiciatis a
						unde minima commodi id cupiditate laborum iste, beatae
						maiores. Voluptatum quisquam dignissimos tempore
						asperiores sit ratione officiis officia alias vitae.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default AboutMe;
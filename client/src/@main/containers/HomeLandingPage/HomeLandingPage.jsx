import {Fragment} from 'react'
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import NewInSection from "./components/NewCollection";

function HomeLandingPage() {

	return (
		<Fragment>
			<Slider />
			<NewInSection />
			<Categories />
		</Fragment>
	)
}

export default HomeLandingPage;

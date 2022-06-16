import { Fragment } from "react";
import HomeSection from "../components/Landing Page/HomeSection";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Landing Page/AboutUs";
import Products from "../components/Landing Page/Products";
import Demo from "../components/Landing Page/Demo";
import ContactUs from "../components/Landing Page/ContactUs";

const LandingPage = () => {
	return (
		<Fragment>
			<Navbar />
			<HomeSection />
			<AboutUs />
			<Products />
			<Demo />
			<ContactUs />
		</Fragment>
	);
};

export default LandingPage;
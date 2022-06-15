import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
		<nav>
			<div>

			</div>
			<div>
				<NavLink to='/vehicle-tracker' >
					Vehicle Tracker
				</NavLink>
				<NavLink to='/person-tracker' >
					Person Tracker
				</NavLink>
			</div>
		</nav>
	)
};

export default Navbar;
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
		<div>
			<Link to='/vehicle-tracker' >Vehicle Tracker</Link>
			<Link to='/person-tracker' >Person Tracker</Link>
		</div>
	);
};

export default Dashboard;
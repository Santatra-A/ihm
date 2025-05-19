import React from "react";

export const TestButton = () => {
	return <button type="button">Test Button</button>;
};

const Dashboard = () => {
	return (
		<div>
			Dashboard
			<TestButton />
		</div>
	);
};

export default Dashboard;

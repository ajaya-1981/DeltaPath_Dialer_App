import React, { Fragment } from 'react';

const ButtonComponent = ({ icon, onClick, align, cssClass }) => {
	return (
		<Fragment>
			<button
				className={cssClass}
				style={{ float: align }}
				onClick={() => onClick()}
			>
				<i className={icon}></i>
			</button>
		</Fragment>
	);
};
export default ButtonComponent;

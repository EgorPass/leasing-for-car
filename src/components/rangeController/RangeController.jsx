
import "./rangeController.scss"

const ConditionRange = ({ val }) => {
	
	return (
		<div className="inputRangeContainer__rangeContainer rangeController">
			<div className="rangeController__line">
				<div className = "rangeController__circle"></div>
				<div className = "rangeController__colorLine"></div>
			</div>

		</div>
	)
}

export default ConditionRange
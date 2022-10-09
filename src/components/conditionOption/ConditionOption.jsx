import InputContainer from "../inputContainer/inputContainer"
import ConditionRange from "../rangeController/RangeController"

import "./conditionOption.scss"

const ConditionOption = ({ val, title, cash, perc }) => {
	
	return (
		<div className="carCompany__conditionOption conditionOption">
			
			<h3 className="conditionOption__title">{title}</h3>
			
			<div className="conditionOption__inputRangeContainer inputRangeContainer">
				<InputContainer val={val}  cash = {cash} perc = {perc} />		
				<ConditionRange val = {val} />
			</div>

		</div>
	)
}

export default ConditionOption
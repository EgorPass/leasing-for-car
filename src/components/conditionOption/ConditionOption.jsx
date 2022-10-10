import InputContainer from "../inputContainer/inputContainer"
import RangeController from "../rangeController/RangeController"

import "./conditionOption.scss"

const ConditionOption = ({ val, title, cash, perc }) => {
	
	return (
		<div className="carCompany__conditionOption conditionOption">
			
			<h3 className="conditionOption__title">{title}</h3>
			
			<div className="conditionOption__inputRangeContainer">
				<InputContainer val={val}  cash = {cash} perc = {perc} />		
				<RangeController val = {val} />
			</div>

		</div>
	)
}

export default ConditionOption
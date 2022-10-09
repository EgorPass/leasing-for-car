import "./inputContainer.scss"

const ConditionInput = ({ val, cash, perc = null }) => {

	return (

		<div className = "inputRangeContainer__inputContainer inputContainer">

			<div className= "inputContainer__input">
				<input type="text" value={val} />
				{perc ? (<span>{cash}</span>) : null}
			</div>
			
			<div className = "inputContainer__description">
				{perc ? `${perc}%` : cash}
			</div>

		</div>
	)
}

export default ConditionInput

// возможно разбить на компоненты:
// inputContainer__input & inputContainer__description
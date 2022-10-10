
const CashOrPerc = ({ perc, cash }) => {
	
	return (
		<>
			{perc ? (
				<div className="conditionOption__perc">{perc}%</div>
			)	:  !perc ? (<div className="conditionOption__description">{cash}</div> ) : null}
		</>
	)
}

const ConditionInput = ({ val, cash, perc = null }) => {
  return (
    <div className="conditionOption__inputContainer ">
      <div className="conditionOption__inputField">
				<input className="conditionOption__input" type="text" value={val} />

        {perc ? (
          <div className="conditionOption__description">{cash}</div>
        ) : null}
      </div>
      <CashOrPerc perc={perc} cash={cash} />
    </div>
  );
};

export default ConditionInput;

// возможно разбить на компоненты:
// inputContainer__input & inputContainer__description

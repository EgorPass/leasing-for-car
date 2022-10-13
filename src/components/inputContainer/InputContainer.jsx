import { useContext } from "react";
import { ContextMethods } from "../../context/contextData";
import InputField from "../inputField/InputField";

const CashOrPerc = ({ perc, cash }) => {
  return (
    <>
      {perc ? (
        <div className="conditionOption__perc">{perc}%</div>
      ) : !perc ? (
        <div className="conditionOption__description">{cash}</div>
      ) : null}
    </>
  );
};

const ConditionInput = ({ name, val, cash, perc = null, desc = "" }) => {
  const {
    handleChangeInputForCondition,
    setMinMaxValueForInputField,
    formatString,
  } = useContext(ContextMethods);

  val = formatString(val);
  if (desc) desc = formatString(desc);

  return (
    <div className="conditionOption__inputContainer ">
      <div className="conditionOption__inputField">
        {perc ? (
          <>
            <div className="conditionOption__description">
              <span>{desc}</span>
              <span>{cash}</span>
            </div>

            <div className="conditionOption__perc">
              <InputField
                name={name}
                val={val}
                cash={"%"}
                perc={perc}
                onBlurFunc={setMinMaxValueForInputField}
                onChangeFunc={handleChangeInputForCondition}
              />
            </div>
          </>
        ) : (
          <InputField
            name={name}
            val={val}
            cash={cash}
            onBlurFunc={setMinMaxValueForInputField}
            onChangeFunc={handleChangeInputForCondition}
          />
        )}
      </div>
    </div>
  );
};

export default ConditionInput;

// возможно разбить на компоненты:
// inputContainer__input & inputContainer__description

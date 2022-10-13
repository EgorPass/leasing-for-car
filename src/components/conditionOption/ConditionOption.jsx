import InputContainer from "../inputContainer/InputContainer";
import RangeController from "../rangeController/RangeController";

import "./conditionOption.scss";

const ConditionOption = ({
  name,
  val,
  title,
  cash,
  perc,
  scrollRef,
  desc = "",
}) => {
  return (
    <div className="carCompany__conditionOption conditionOption">
      <h3 className="conditionOption__title">{title}</h3>

      <div className="conditionOption__inputRangeContainer conditionOption__inputRangeContainer_passive">
        <InputContainer
          name={name}
          val={val}
          cash={cash}
          perc={perc}
          desc={desc}
        />
        <RangeController
          val={val}
          name={`range-scroll-for-${name}`}
          scrollRef={scrollRef}
        />
      </div>
    </div>
  );
};

export default ConditionOption;

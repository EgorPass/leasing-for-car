import { useContext } from "react";
import { ContextMethods } from "../../context/contextData";

import "./rangeController.scss";

const ConditionRange = ({ val, scrollRef, name }) => {
  const { setValueForScrollLength } = useContext(ContextMethods);

  let line = null,
    circle = null;

  if (scrollRef.current) {
    ({ line, circle } = setValueForScrollLength(
      name.slice(17),
      val,
      scrollRef.current.clientWidth
    ));
  }

  return (
    <div className="conditionOption__rangeController rangeController">
      <div className="rangeController__line" ref={scrollRef}></div>
      <div
        className="rangeController__colorLine"
        style={{ width: line ? line : "auto" }}></div>
			<div
				tabIndex={0}
        className="rangeController__circle"
        data-name={name}
        style={{ left: circle ? circle : 0 }}></div>
    </div>
  );
};

export default ConditionRange;

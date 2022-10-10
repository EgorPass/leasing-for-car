import "./rangeController.scss";

const ConditionRange = ({ val }) => {
  return (
    <div className="conditionOption__rangeController rangeController">
      <div className="rangeController__line"></div>
      <div className="rangeController__colorLine"></div>
      <div className="rangeController__circle"></div>
    </div>
  );
};

export default ConditionRange;

const InputField = ({ name, val, cash, perc, onBlurFunc, onChangeFunc }) => {
  return (
    <>
      <input
        className="conditionOption__input"
        name={name}
        type="text"
        value={val} 
        onBlur= {onBlurFunc}
				onChange={onChangeFunc}
				size = {!!perc ? 2: "auto"}
      />
      <div className="conditionOption__description">{!!perc ? perc : cash}</div>
    </>
  );
};

export default InputField;
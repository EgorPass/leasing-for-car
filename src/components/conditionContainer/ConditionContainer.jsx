import { useContext } from "react";
import ConditionOption from "../conditionOption/ConditionOption";
import { useSelector } from "react-redux";
import { ContextRef } from "../../context/contextData";

const ConditionContainer = () => {
	const {
			sumScrollRef,
			firstPayScrollRef,
			durationScrollRef,
  } = useContext(ContextRef);

	let {
    conditions: { price, firstPay, duration },
  } = useSelector((state) => state);

	const resFromPercent = price * firstPay /100

  return (
    <section className="carCompany__conditionContainer">
      <ConditionOption
        name="price"
        title="Стоимость автомобиля"
        val={price}
        cash="&#8381;"
        scrollRef={sumScrollRef}
      />
      <ConditionOption
        name="firstPay"
        title="Первоначальный взнос"
				val={firstPay}
				desc = {resFromPercent}
        cash=  "&#8381;"
        perc={"%"}
        scrollRef={firstPayScrollRef}
      />
      <ConditionOption
        name="duration"
        title="Срок лизинга"
        val={duration}
        cash="мес."
        scrollRef={durationScrollRef}
      />
    </section>
  );
};

export default ConditionContainer;

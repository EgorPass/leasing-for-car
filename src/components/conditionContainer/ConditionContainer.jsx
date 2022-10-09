import ConditionOption from "../conditionOption/ConditionOption";

const ConditionContainer = () => {


	return (
		<section className="carCompany__conditionContainer">
			<ConditionOption title="Стоимость автомобиля" val= { 1000000 } cash = "Р"/>
			<ConditionOption title="Первоначальный взнос" val= { 200000 } cash="Р" perc={ 13 } />
			<ConditionOption title="Срок лизинга" val={ 40 } cash = "мес."/>
     </section>
	)
}

export default ConditionContainer;
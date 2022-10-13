import React, {useContext} from "react";
import OrderSum from "../orderSum/OrderSum";
import { ContextOrder, ContextMethods } from "../../context/contextData";

const OrderCondition = () => {
	const { totalSumRound, payAtMonthRound } = useContext(ContextOrder);
	const { formatString } = useContext(ContextMethods)
	
	const form =  new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"})

	console.log(form.format(24))

	return (
    <div className="orderContainer__orderCondition">
      <OrderSum
        title="Сумма договора лизинга"
        sum={formatString(totalSumRound)}
        cash="&#8381;"
      />
      <OrderSum
        title="Ежемесячный платеж от"
        sum={formatString(payAtMonthRound)}
        cash="&#8381;"
      />
    </div>
  );
};

export default OrderCondition
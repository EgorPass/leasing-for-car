import OrderSum from "../orderSum/OrderSum";

import "./orderCondition.scss"

const OrderCondition = () => {

	
  return (
    <div className="orderContainer__orderCondition orderCondition">
      <OrderSum title="Сумма договора лизинга" sum={4467131} cash="p" />
      <OrderSum title="Ежемесячный платеж от" sum={114455} cash="p" />
    </div>
  );
};

export default OrderCondition
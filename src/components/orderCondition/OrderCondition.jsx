import OrderSum from "../orderSum/OrderSum";

const OrderCondition = () => {

	
  return (
    <div className="orderContainer__orderCondition">
      <OrderSum title="Сумма договора лизинга" sum={"4 467 131"} cash="p" />
      <OrderSum title="Ежемесячный платеж от" sum={"114 455"} cash="p" />
    </div>
  );
};

export default OrderCondition
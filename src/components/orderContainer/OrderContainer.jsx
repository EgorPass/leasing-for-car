import OrderCondition from "../orderCondition/OrderCondition";
import OrderAccept from "../orderAccept/OrderAccept";

import "./orderContainer.scss"
const OrderContainer = () => {
  return (
    <section className="carCompany__orderContainer orderContainer">
      <OrderCondition />
      <OrderAccept />
    </section>
  );
};

export default OrderContainer;

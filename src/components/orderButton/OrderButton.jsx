import { useContext } from "react";
import { ContextMethods } from "../../context/contextData";

const OrderButton = ({ title }) => {

	const {acceptButton} = useContext(ContextMethods)

	return (
    <button
      type="submit"
      className="orderContainer__button_active"
      onClick={acceptButton}>
      {title}
    </button>
  );
}

export default OrderButton
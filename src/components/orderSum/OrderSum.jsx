
const OrderSum = ({title, sum, cash }) => {
	
	return (
    <div className="orderContainer__orderSum">
      <h3 className="orderContainer__title">{title}</h3>
      <div className="orderContainer__sum">
        {sum}
        {cash}
      </div>
    </div>
  );
}

export default OrderSum
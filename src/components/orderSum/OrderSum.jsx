
const OrderSum = ({title, sum, cash }) => {
	
	return (
    <div className="orderCondition__orderSum">
			<h3 className="orderCondition__title">{ title }</h3>
			<div className="orderCondition__sum">{ sum }{ cash }</div>
    </div>
  );
}

export default OrderSum
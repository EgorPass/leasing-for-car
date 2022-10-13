const OrderSum = ({ title, sum, cash }) => {
  return (
    <div className="orderContainer__orderSum">
      <h3 className="orderContainer__title">{title}</h3>
      <div className="orderContainer__sum">
        <span>{sum}</span>
        &nbsp;
        <span className="orderContainer__description">{cash}</span>
      </div>
    </div>
  );
};

export default OrderSum;

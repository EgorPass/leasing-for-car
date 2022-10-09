import Title from "./components/title/Title";
import ConditionContainer from "./components/conditionContainer/ConditionContainer";
import OrderContainer from "./components/orderContainer/OrderContainer";

function App() {
	return (
    <section className="body">
      
			<article className="body__carCompany carCompany">
        
				<Title />
				<ConditionContainer />
				<OrderContainer />

			</article>
			
    </section>
  );
}

export default App;

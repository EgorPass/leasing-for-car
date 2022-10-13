import React, {useRef, useEffect} from "react";
import Title from "./components/title/Title";
import ConditionContainer from "./components/conditionContainer/ConditionContainer";
import OrderContainer from "./components/orderContainer/OrderContainer";

import {ContextRef, ContextMethods, ContextOrder } from "./context/contextData"

import {useRefferens} from "./refferens/useRefferens"
import { useMethods } from "./useHook/useMethods";

import { useSelector } from "react-redux";

function App() {

	const {
    sumInputRef,
    firstPayInputRef,
    durationInputRef,
    sumScrollRef,
    firstPayScrollRef,
    durationScrollRef,
  } = useRefferens();
	const {
		setFieldClassActive,
		setFieldClassPassive,
		acceptButton,
		calculator,
		firstRender,
		formatString,
		moveScrollRange,
		setValueForScrollLength,
		setMinMaxValueForInputField,
		handleChangeInputForCondition,
	} = useMethods()

	const { totalSumRound, payAtMonthRound } = calculator();
	
	const contextForMethods = {
		acceptButton,
		formatString,
		setValueForScrollLength,
    setMinMaxValueForInputField,
    handleChangeInputForCondition,
	};
	
	const contextForRef = {
      sumInputRef,
      firstPayInputRef,
      durationInputRef,
      sumScrollRef,
      firstPayScrollRef,
      durationScrollRef,
  };

	
	useEffect(() => {
		firstRender();
		window.addEventListener("mousedown", moveScrollRange);
		window.addEventListener("focus", setFieldClassActive, true);
		window.addEventListener("blur", setFieldClassPassive, true);
		window.addEventListener("resize", (e)=> {firstRender();})
	}, [])


  return (
    <section className="body">
      <ContextMethods.Provider value={contextForMethods}>
        <article className="body__carCompany carCompany">
          <Title />

          <ContextRef.Provider value={contextForRef}>
						<ConditionContainer />
          </ContextRef.Provider>

          <ContextOrder.Provider value={{ totalSumRound, payAtMonthRound }}>
            <OrderContainer />
          </ContextOrder.Provider>
        </article>
      </ContextMethods.Provider>
    </section>
  );
}

export default App;

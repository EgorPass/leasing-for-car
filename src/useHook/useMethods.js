import axios from "axios";
import { useConditionActoins } from "../redux/useBindActoins/useBindActions";
import { useSelector } from "react-redux";

const scrollNode = { target: null, name: null, clientX: null, shiftX: 0 };
let state = false;
// ограничения для полей
export function useMethods() {
  const checkValue = {
    price: {
      min: 1000000,
      max: 6000000,
    },
    firstPay: {
      min: 10,
      max: 60,
    },
    duration: {
      min: 1,
      max: 60,
    },
  };

  // забор значений для полей из Redux
  const {
    conditions: { price, firstPay, duration },
  } = useSelector((state) => state);
  const { setPrice, setFirstPay, setDuration } = useConditionActoins();

  const setValueForRedux = (name, value) => {
    switch (name) {
      case "price":
        setPrice(+value);
        break;
      case "firstPay":
        setFirstPay(+value);
        break;
      case "duration":
        setDuration(+value);
        break;

      default:
        return;
    }
  };

  // форматирование значения в поле к виду: 8 888 888
  const formatString = (value) => {
    let formater = new Intl.NumberFormat("ru");
    return formater.format(value);
  };

  // метод для изменения значения полей
  const handleChangeInputForCondition = (e) => {
		if(state) return;

    let {
      target: { value, name },
    } = e;

    value = +value.replace(/\s/gi, "");

    if (!name) return;
    if (/(\D)/gi.test(+value)) return;
    if (!value) value = 0;

    setValueForRedux(name, value);
  };

  // расчет значений суммы лизнига и ежемеса
  const calculator = () => {
    let payAtMonth, payAtMonthRound, totalSum, totalSumRound;

    if (price === 0 || firstPay === 0 || duration === 0) {
      totalSumRound = 0;
      payAtMonthRound = 0;
    } else {
      const state = +firstPay < +price;

      payAtMonth = state
        ? (price - firstPay) *
          ((0.035 * Math.pow(1 + 0.035, +duration)) /
            (Math.pow(1 + 0.035, +duration) - 1))
        : 0;
      payAtMonthRound = Math.ceil(payAtMonth);

      totalSum = state ? +firstPay + duration * payAtMonth : 0;
      totalSumRound = Math.ceil(totalSum);
    }

    return {
      totalSumRound,
      payAtMonthRound,
    };
  };

  const setClass = (node, from, to) => {
    node.classList.remove(from);
    node.classList.add(to);
  };

  // метод который ставит поле активным
  const setFieldClassActive = (e) => {
		if(state) return;

    const { target } = e;
    if (target.tagName === "DIV" || target.tagName === "INPUT") {
      const focus = target.closest(
        ".conditionOption__inputRangeContainer_passive"
      );

      if (!focus) return;
      setClass(
        focus,
        "conditionOption__inputRangeContainer_passive",
        "conditionOption__inputRangeContainer_active"
      );
    } else return;
  };

  //метод который снимает с поля активный класс
  const setFieldClassPassive = (e) => {
		if (state) return;

    const { target } = e;
    if (target.tagName === "DIV" || target.tagName === "INPUT") {
      const focus = target.closest(
        ".conditionOption__inputRangeContainer_active"
      );
      if (!focus) return;
      setClass(
        focus,
        "conditionOption__inputRangeContainer_active",
        "conditionOption__inputRangeContainer_passive"
      );
    } else return;
  };

  // метод для ограничения значений при потере фокуса
  const setMinMaxValueForInputField = (e) => {
		if(state) return;

    const { target } = e;
    let { name, value } = target;

    value = +value.replace(/\s/gi, "");

    if (checkValue[name].min > value) value = checkValue[name].min;
    if (checkValue[name].max < value) value = checkValue[name].max;

    setFieldClassPassive(e);

    setValueForRedux(name, value);
  };

  // установка значения для поля при изменении бегунка
  const setValueForInputFromScrollRange = (lineLength, length) => {
    const percentOfLength = Math.round((length * 100) / lineLength);
    const name = scrollNode.name.slice(17);
    const min = checkValue[name].min;
    const max = checkValue[name].max;
    const deff = ((max - min) * percentOfLength) / 100;
    const result = Math.round(+min + +deff);

    setValueForRedux(name, result);

    return result;
  };

  // задание значений для бегунка исходя из водимых данных
  const setValueForScrollLength = (name, val, width) => {
    const min = checkValue[name].min;
    const max = checkValue[name].max;
    const diff = max - min;
    const percentOfValue = Math.round(((val - min) * 100) / diff);
    let line = Math.round(((width - 20) * percentOfValue) / 100);
    if (line < 0) line = 0;
    if (line > width - 20) line = width - 20;

    let circle = line;

    return {
      line,
      circle,
    };
  };

  // оживление бегунка
  const moveScrollRange = (e) => {
		if(state) return
    window.ondragstart = (e) => false;

    if (scrollNode.target) return;

    const { target } = e;
    if (!target.dataset.name) return;
    scrollNode.target = target;
    scrollNode.name = target.dataset.name;

    window.addEventListener("mousemove", moveScroll);
    window.addEventListener("mouseup", endMoveScroll);

    const targetLeftWall = scrollNode.target.getBoundingClientRect().left;
    const targetWidth = scrollNode.target.offsetWidth;
    const shiftX = (scrollNode.shiftX = e.clientX - targetLeftWall);
    const parentShift =
      scrollNode.target.parentNode.getBoundingClientRect().left;
    const parentWidth = scrollNode.target.parentNode.clientWidth;
    const parentLineLength = parentWidth - targetWidth;

    function moveScroll(e) {
      let left = e.clientX - parentShift - shiftX;

      if (left < 0) left = 0;
      if (left + targetWidth > parentWidth) left = parentLineLength;

      const res = setValueForInputFromScrollRange(parentLineLength, left);

      setValueForScrollLength(scrollNode.name.slice(17), res, parentWidth);
    }

    function endMoveScroll(e) {
      scrollNode.target = scrollNode.name = null;
      window.removeEventListener("mousemove", moveScroll);
      window.removeEventListener("mouseup", endMoveScroll);
    }
  };

  // инициализация значений бегунка при первой загрузке
  const firstRender = () => {
    const arrLines = document.querySelectorAll(".rangeController");
    arrLines.forEach((it) => {
      const width = it.clientWidth;
      const name = it.querySelector("[data-name]").dataset.name.slice(17);
      const value =
        name === "price" ? price : name === "firstPay" ? firstPay : duration;
      const { line, circle } = setValueForScrollLength(name, value, width);
      const scrollLine = it.querySelector(".rangeController__colorLine");
      const scrollCircle = it.querySelector(`[data-name *= ${name}]`);

      scrollLine.style.width = line + "px";
      scrollCircle.style.left = circle + "px";
    });
  };

  //обработка при нажатии на кнопку оставить заявку
	const acceptButton = async (e) => {
		if(state) return;
		state = true;

		console.log("click at button")

		const nodes = document.querySelectorAll(
      ".conditionOption__inputRangeContainer_passive"
		);
		
		Array.from(nodes).forEach((it) =>
      setClass(
        it,
        "conditionOption__inputRangeContainer_passive",
        "conditionOption__inputRangeContainer_disabled"
      )
    );
		
		setClass(
      e.target,
      "orderContainer__button_active",
      "orderContainer__button_disabled"
    );
    
		const { totalSumRound, payAtMonthRound } = calculator();

    const data = {
      car_coast: price,
      initail_payment: (price * firstPay) / 100,
      initail_payment_percent: firstPay,
      lease_term: duration,
      total_sum: totalSumRound,
      monthly_payment_from: payAtMonthRound,
    };
	
		fetch("https://hookb.in/eK160jgYJ6UlaRPldJ1P", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => alert(data))
			.catch(e => {
				alert("Что то пошло не так.\nДавай еще попробуем.")
				console.log(e.message)
			})
			.finally(() => {
				state = false;
					Array.from(nodes).forEach((it) =>
            setClass(
              it,
              "conditionOption__inputRangeContainer_disabled",
              "conditionOption__inputRangeContainer_passive"
            )
          );

          setClass(
            e.target,
            "orderContainer__button_disabled",
            "orderContainer__button_active"
          );
			})
			
  };

  return {
    setFieldClassActive,
    setFieldClassPassive,
    acceptButton,
    checkValue,
    calculator,
    firstRender,
    formatString,
    moveScrollRange,
    setValueForScrollLength,
    setMinMaxValueForInputField,
    handleChangeInputForCondition,
  };
}

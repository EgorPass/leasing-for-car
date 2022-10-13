import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { conditionActions } from "../sliceReducers/conditions"


export const useConditionActoins = () => {
	const dispatch = useDispatch();
	return bindActionCreators(conditionActions, dispatch)
}

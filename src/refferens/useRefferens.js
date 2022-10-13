import React, {useRef} from "react";

export const useRefferens = () => {

	return {
		sumInputRef: useRef(!null),
		firstPayInputRef: useRef(null),
		durationInputRef: useRef(null),
		
		sumScrollRef: useRef(null),
		firstPayScrollRef: useRef(null),
		durationScrollRef: useRef(null),

	}
}
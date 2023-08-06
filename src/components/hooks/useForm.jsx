import { useReducer } from "react";

const INPUTACTIONS = {
  INPUT_CHANGE: "INPUT_CHANGE",
  INPUT_BLUR: "INPUT_BLUR",
  CLEAR_INPUTS: "CLEAR_INPUTS",
  SET_DATA: "SET_DATA",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case INPUTACTIONS.INPUT_CHANGE:
      const { name, value, error, hasError, isFormValid } = action.data;
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
          error: action.error,
          hasError: action.hasError,
          touched: true,
        },
        isFormValid: action.isFormValid,
      };
    case INPUTACTIONS.INPUT_BLUR:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          error: action.error,
          hasError: action.hasError,
        },
      };
    case INPUTACTIONS.CLEAR_INPUTS:
      return action.initialState;
    default:
      return state;
  }
};

export const useForm = (initialState) => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const inputHandler = (name, value, error, hasError, isFormValid) => {
    dispatchFormState({
      type: INPUTACTIONS.INPUT_CHANGE,
      data: { name, value, error, hasError, isFormValid },
    });
  };

  const clearInputs = ({ formState }) => {
    dispatchFormState({
      type: INPUTACTIONS.CLEAR_INPUTS,
      data: { formState },
    });
  };

  const inputBlur = (name, error, hasError) => {
    dispatchFormState({
      type: INPUTACTIONS.INPUT_BLUR,
      data: { name, error, hasError },
    });
  };

  return [formState, inputHandler, clearInputs, inputBlur];
};

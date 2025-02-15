export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};
export const CLEAR = "CLEAR";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_RECALL = "MEMORY_RECALL";

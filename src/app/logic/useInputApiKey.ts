import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../api/ApiContext/useApiContext";
import { useApiClient } from "../api/useApiClient";

type State = {
  apiKey: string;
  isError: boolean;
  errorMessage: string;
};

const initialState: State = {
  apiKey: "",
  isError: false,
  errorMessage: "",
};

type Action =
  | { type: "setApiKey"; payload: string }
  | { type: "setIsError"; payload: boolean }
  | { type: "setErrorMessage"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setApiKey":
      return { ...state, apiKey: action.payload };
    case "setIsError":
      return { ...state, isError: action.payload };
    case "setErrorMessage":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const useInputApiKey = () => {
  const navigate = useNavigate();
  const apiContext = useApiContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const apiClient = useApiClient({ apiKey: state.apiKey });

  const initError = () => {
    dispatch({ type: "setIsError", payload: false });
    dispatch({ type: "setErrorMessage", payload: "" });
  };

  const handleStartButtonClick = () => {
    initError();
    if (state.apiKey.length === 0) {
      dispatch({ type: "setIsError", payload: true });
      dispatch({ type: "setErrorMessage", payload: "APIキーを入力してください" });
      return;
    }
    if (apiClient === undefined) {
      dispatch({ type: "setIsError", payload: true });
      dispatch({ type: "setErrorMessage", payload: "API Client is undefined" });
      return;
    }
    apiClient
      .getPrefectures()
      .then((data) => {
        apiContext?.setApiKey(state.apiKey);
        apiContext?.setPrefData(data.result);
        navigate("/populations");
      })
      .catch((error: Error) => {
        dispatch({ type: "setIsError", payload: true });
        dispatch({ type: "setErrorMessage", payload: error.message });
      });
  };
  const handleTextFieldChange = (value: string) => {
    dispatch({ type: "setApiKey", payload: value });
  };
  return { state, dispatch, handleTextFieldChange, handleStartButtonClick };
};

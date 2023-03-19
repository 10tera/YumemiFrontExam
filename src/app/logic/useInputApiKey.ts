import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../api/ApiContext/useApiContext";
import { useFetchPrefectures } from "../api/useFetchPrefectures";

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
    console.info("clicked button");
    useFetchPrefectures({apiKey:state.apiKey}).then((data) => {
      console.info(data);
      if(!data.data){
        dispatch({ type: "setIsError", payload: true });
        dispatch({ type: "setErrorMessage", payload: "api response is undefined" });
        return;
      }
      apiContext?.setApiKey(state.apiKey);
      apiContext?.setPrefData(data.data);
      navigate("/populations");
    })
    .catch((error: Error) => {
      console.info(error.message)
      let errorMessage = "";
      switch (error.message) {
        case "403":
          errorMessage = "入力されたAPIキーは無効です";
          break;
        case "400":
          errorMessage = "内部リクエストでパラメータが不足しています";
          break;
        case "404":
          errorMessage = "API URLが無効です";
          break;
        case "429":
          errorMessage = "利用回数制限がかかりました。しばらく時間をおいてから再度試してください。";
          break;
        default:
          errorMessage = "入力されたAPIキーでなんらかのエラーが発生しました";
          break;
      }
      dispatch({ type: "setIsError", payload: true });
      dispatch({ type: "setErrorMessage", payload: errorMessage });
    });
  };
  const handleTextFieldChange = (value: string) => {
    dispatch({ type: "setApiKey", payload: value });
  };
  return { state, dispatch, handleTextFieldChange, handleStartButtonClick };
};

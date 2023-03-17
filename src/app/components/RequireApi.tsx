import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useApiContext } from "../api/ApiContext/useApiContext";

type Props = {
  children: ReactElement;
};

export const RequireApi = ({ children }: Props) => {
  const apiContext = useApiContext();
  if (apiContext?.apiKey !== undefined) return children;
  else return <Navigate to={"/"} />;
};

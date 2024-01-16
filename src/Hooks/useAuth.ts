import { useSelector } from "react-redux";

import { IRootState } from "Store";

export default function useAuth() {
  const isAuth = useSelector((state: IRootState) => {
    return !state.user?.token && state.user?.token?.length;
  });

  return {
    isAuth,
  };
}

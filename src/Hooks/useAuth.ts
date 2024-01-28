import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "Store";
import { setUser } from "Store/Slices/UserSlice";
import { TUserState } from "Types";

export default function useAuth() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: IRootState) => {
    return state.user?.token?.length;
  });

  const setCurrentUser = (user: TUserState) => {
    dispatch(setUser(user));
  };

  return {
    isAuth,
    setCurrentUser,
  };
}

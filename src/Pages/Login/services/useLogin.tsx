import { useMutation } from "@tanstack/react-query";

import UserApi from "Apis/UserApi";
import { MUTATION_KEYS } from "Constants/QueryKeys";
import useAuth from "Hooks/useAuth";

export default function useLogin() {
  const { setCurrentUser } = useAuth();
  const loginMutation = useMutation({
    mutationKey: [MUTATION_KEYS.LOGIN],
    mutationFn: UserApi.login,
    onSuccess: (result) => {
      console.log("result", result);
      setCurrentUser(result.data);
    },
    onError: (message) => {
      console.error(message);
    },
  });

  return loginMutation;
}

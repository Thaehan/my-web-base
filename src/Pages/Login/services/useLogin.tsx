import { useMutation } from "@tanstack/react-query";

import UserApi from "Apis/UserApi";
import { MUTATION_KEYS } from "Constants/QueryKeys";

export default function useLogin() {
  const loginMutation = useMutation({
    mutationKey: [MUTATION_KEYS.LOGIN],
    mutationFn: UserApi.login,
  });

  return loginMutation;
}

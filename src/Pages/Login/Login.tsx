import { useForm } from "react-hook-form";
import { Button, Container } from "@mui/material";

import TextField from "Components/TextField";
import useAppTranslation from "Hooks/useAppTranslation";
import { TLoginForm } from "Types";
import useLogin from "./services/useLogin";

const DEFAULT_VALUE: TLoginForm = {
  username: "",
  password: "",
};

export default function Login() {
  const { translate, changeLanguage } = useAppTranslation();
  const { control, handleSubmit, reset } = useForm<TLoginForm>({
    defaultValues: DEFAULT_VALUE,
  });
  const { mutateAsync } = useLogin();

  const onSubmit = async (value: TLoginForm) => {
    await mutateAsync(value);
    reset();
  };

  return (
    <Container>
      <form>
        <TextField control={control} fieldName='username' label='username' />
        <TextField control={control} fieldName='password' label='password' />
        <Button variant='contained' onClick={handleSubmit(onSubmit)}>
          {translate("login.login")}
        </Button>
        <Button variant='contained' onClick={changeLanguage}>
          {translate("nav.changeLanguage")}
        </Button>
      </form>
    </Container>
  );
}

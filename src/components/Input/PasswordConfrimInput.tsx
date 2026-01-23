import { RiCheckFill } from "react-icons/ri";
import CustomInput from "../CustomInput";
import { useFormContext } from "react-hook-form";

export default function PasswordConfirmInput() {
  const {
    register,
    watch,
    trigger,
    getFieldState,
    formState: { errors },
  } = useFormContext();

  const password = watch("password");
  const { error, isDirty } = getFieldState("email");

  return (
    <CustomInput
      inputSize="large"
      placeholder="비밀번호를 다시 입력하세요."
      type="password"
      icon={
        <RiCheckFill size={18} color={!error && isDirty ? "green" : "gray"} />
      }
      onIconPress={() => trigger("password")}
      error={errors.confirm?.message as string}
      {...register("confirm", {
        required: "비밀번호 확인은 필수입니다.",
        validate: (value) =>
          value === password || "비밀번호가 일치하지 않습니다.",
      })}
    />
  );
}

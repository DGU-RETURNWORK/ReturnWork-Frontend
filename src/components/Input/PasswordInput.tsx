import { RiCheckFill } from "react-icons/ri";
import CustomInput from "../CustomInput";
import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
  const {
    register,
    trigger,
    getFieldState,
    formState: { errors },
  } = useFormContext();

  const { error, isDirty } = getFieldState("password");

  return (
    <CustomInput
      inputSize="large"
      placeholder="비밀번호를 입력하세요."
      type="password"
      icon={
        <RiCheckFill size={18} color={!error && isDirty ? "green" : "gray"} />
      }
      onIconPress={() => trigger("email")}
      error={errors.password?.message as string}
      {...register("password", {
        required: "비밀번호는 필수입니다.",
        minLength: { value: 8, message: "비밀번호는 8자 이상이어야 합니다." },
      })}
    />
  );
}

import { RiCheckFill } from "react-icons/ri";
import CustomInput from "../CustomInput";
import { useFormContext } from "react-hook-form";

export default function EmailInput() {
  const {
    register,
    trigger,
    getFieldState,
    formState: { errors },
  } = useFormContext();

  const { error, isDirty } = getFieldState("email");

  return (
    <CustomInput
      inputSize="large"
      placeholder="이메일을 입력하세요."
      icon={
        <RiCheckFill size={18} color={!error && isDirty ? "green" : "gray"} />
      }
      onIconPress={() => trigger("email")}
      error={errors.email?.message as string}
      {...register("email", {
        required: "이메일을 입력해주세요.",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "올바른 이메일 형식이 아닙니다.",
        },
      })}
    />
  );
}

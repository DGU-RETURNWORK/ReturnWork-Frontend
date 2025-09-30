import CustomInput from "../CustomInput";
import { useFormContext } from "react-hook-form";

export default function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <CustomInput
      inputSize="large"
      placeholder="이름을 입력하세요."
      error={errors.name?.message as string}
      {...register("name", {
        required: "이름은 필수입니다.",
        minLength: { value: 2, message: "이름은 2글자 이상이어야 합니다." },
      })}
    />
  );
}

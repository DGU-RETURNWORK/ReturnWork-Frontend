import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";

type FormValues = {
  name: string;
  email: string;
  password: string;
  region: string;
};

export default function Signup() {
  const methods = useForm<FormValues>({ mode: "onChange" });

  return (
    <FormProvider {...methods}>
      <Outlet /> {/* Step1, Step2, Step3 들어옴 */}
    </FormProvider>
  );
}

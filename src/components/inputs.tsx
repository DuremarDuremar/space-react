import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Form } from "../styles/layout_style";

type Inputs = {
  example: any;
  exampleRequired: any;
};

const Inputs: FC = () => {
  const [value, setValue] = useState<any>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => setValue(data);

  console.log(value);
  console.log("inputs2");

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("example")} placeholder="name" />{" "}
      <input {...register("exampleRequired")} placeholder="password" />
      <input type="submit" />
    </Form>
  );
};

export default Inputs;

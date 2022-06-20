import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Form } from "../styles/layout_style";

type Input = {
  name: string;
  password: string;
};

const Inputs: FC = () => {
  const [value, setValue] = useState<Input>({} as Input);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    setValue(data);
    reset();
  };

  console.log("value", value);
  console.log("errors", errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("name", { required: true, minLength: 3 })}
          placeholder="name"
        />{" "}
        <p>{errors.name?.type}</p>
      </div>
      <div>
        <input
          {...register("password", { required: true, minLength: 6 })}
          placeholder="password"
        />
        <p>{errors.password?.type}</p>
      </div>
      <button type="submit">submit</button>
    </Form>
  );
};

export default Inputs;

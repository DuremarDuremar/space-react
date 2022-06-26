import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
} from "firebase/auth";

import { useTypeDispatch } from "../hooks/redux_hook";
import { userSlice } from "../store/reducers/user_reducer";
import { Form } from "../styles/layout_style";

type Input = {
  name?: string;
  email: string;
  password: string;
};

interface IProps {
  user: boolean;
}
type updateType = {
  displayName: string;
};

const Inputs: FC<IProps> = ({ user }) => {
  const dispatch = useTypeDispatch();

  const auth = getAuth();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res: UserCredential) => {
        dispatch(
          userSlice.actions.setUser({
            email: res.user.email,
            id: res.user.uid,
            token: res.user.refreshToken,
            name: res.user.displayName,
          })
        );
      })
      .catch(console.error);
  };

  const handleReg = (email: string, password: string, name: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res: UserCredential) => {
        auth.currentUser &&
          updateProfile(auth.currentUser, {
            displayName: name,
          });
        dispatch(
          userSlice.actions.setUser({
            email: res.user.email,
            id: res.user.uid,
            token: res.user.refreshToken,
            name: name,
          })
        );
      })
      .catch(console.error);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = ({ email, password, name = "" }) => {
    if (user) {
      handleLogin(email, password);
    } else {
      handleReg(email, password, name);
    }
    reset();
  };

  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  console.log("errors", errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!user && (
        <div>
          <input
            {...register("name", { required: true, minLength: 3 })}
            placeholder="name"
          />{" "}
          <p>{errors.name?.type}</p>
        </div>
      )}

      <div>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: isValidEmail,
              message: "Please enter a valid email",
            },
          })}
          placeholder="email"
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <input
          {...register("password", { required: true, minLength: 6 })}
          placeholder="password"
        />
        <p>{errors.password?.type}</p>
      </div>
      <button type="submit">
        <i className="fas fa-check fa-2x"></i>
      </button>
    </Form>
  );
};

export default Inputs;

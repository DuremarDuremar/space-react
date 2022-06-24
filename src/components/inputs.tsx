import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
} from "firebase/auth";

import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";
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
  photoURL: string;
};

const Inputs: FC<IProps> = ({ user }) => {
  const [value, setValue] = useState<any>(null);

  const dispatch = useTypeDispatch();
  const auth = getAuth();

  // const update: any = {
  //   displayName: "Alias",
  //   photoURL: "https://my-cdn.com/assets/user/123.png",
  // };

  const ff = (name: string) =>
    auth.currentUser &&
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res: UserCredential) => {
        setValue(res);
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
        ff(name);
        setValue(res);
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

  console.log("value", value);

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
      <button type="submit">submit</button>
    </Form>
  );
};

export default Inputs;

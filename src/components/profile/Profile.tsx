import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Profile.module.scss";
import { useWindowPaste } from "./useWindowPaste";

type FormValues = { name: string; email: string };

export function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  useWindowPaste((value) => setValue("name", `Dr. ${value}`));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Dr. React"
          className={errors?.name?.type ? styles.inputError : ""}
          {...register("name", {
            required: { value: true, message: "Name is required!" },
            maxLength: {
              value: 25,
              message: "The name should be shorter than 25 characters!",
            },
          })}
        />
        {errors?.name?.type && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          placeholder="react@zuhlke.com"
          id="email"
          className={errors?.name?.type ? styles.inputError : ""}
          {...register("email", {
            required: {
              value: true,
              message: "The 'email' field is required!",
            },
            pattern: {
              value: /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email!",
            },
          })}
        />
        {errors?.email?.type && <span>{errors.email.message}</span>}
      </div>
      <input type="submit" value="save" />
    </form>
  );
}

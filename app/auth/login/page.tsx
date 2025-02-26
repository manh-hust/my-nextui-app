"use client";
import { Button, Form, Input, Link } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password is too short. It must be at least 8 characters.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/\d/, "Password must contain at least one number."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-80">
        <div className="mb-6 text-2xl">Login</div>
        <Form
          className="w-full max-w-xs flex flex-col gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            className="mb-4"
            label="Email"
            {...register("email")}
            isRequired
            errorMessage={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            {...register("password")}
            isRequired
            errorMessage={errors.password?.message}
          />

          <Button className="w-full mt-4" color="primary" type="submit">
            Login
          </Button>

          <div className="w-full flex justify-center mt-2">
            <Link color="primary" href="/auth/register" size="sm">
              Register
            </Link>
          </div>

          <div className="w-full flex gap-4 items-center mt-6">
            <Button
              className="w-full"
              color="primary"
              size="lg"
              startContent={<FcGoogle />}
              variant="bordered"
            >
              Google
            </Button>
            <Button
              className="w-full"
              color="primary"
              size="lg"
              startContent={<ImGithub />}
              variant="bordered"
            >
              Github
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

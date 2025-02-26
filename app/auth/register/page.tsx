"use client";
import { Button, Form, Input, Link } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

export default function Register() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-80">
        <div className="mb-6 text-2xl">Register</div>
        <Form
          className="w-full max-w-xs flex flex-col gap-3"
          onReset={() => {}}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            isRequired
            className="mb-2"
            errorMessage="Please enter a valid username"
            label="Username"
            labelPlacement="outside"
            name="username"
            type="text"
          />
          <Input
            isRequired
            className="mb-2"
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            type="email"
          />
          <Input
            isRequired
            className="mb-2"
            errorMessage="Please enter a valid email"
            label="Password"
            labelPlacement="outside"
            name="password"
            type="password"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Password confirm"
            labelPlacement="outside"
            name="password_confirmation"
            type="password"
          />

          <Button className="w-full mt-4" color="primary" type="submit">
            Register
          </Button>

          <div className="w-full flex justify-center">
            <Link color="primary" href="/auth/login" size="sm">
              Login
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

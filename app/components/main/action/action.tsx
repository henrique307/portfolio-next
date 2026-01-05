"use client"

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./action.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export function CallToAction() {
  const [form, setForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<boolean | undefined>(
    undefined
  );

  const { t } = useTranslation("global");
  const actionTranslation = t("main.action", {
    returnObjects: true,
  }) as ActionTranslation;

  async function toggle() {
    setForm(!form);
  }

  interface MessageInterface {
    nome: string;
    email: string;
    mensagem: string;
  }

  interface ActionTranslation {
    header: string;
    main: string;
    action: string;
    form: {
      failure: {
        sending_error: {
          header: string;
          main: string;
        };
        input_error: {
          name: {
            required: string;
          };
          email: {
            required: string;
            invalid: string;
          };
          message: {
            required: string;
            max_lenght: string;
          };
        };
      };
      success: {
        header: string;
        main: string;
      };
      inputs: {
        name: {
          placeholder: string;
          label: string;
        };
        email: {
          placeholder: string;
          label: string;
        };
        message: {
          placeholder: string;
          label: string;
        };
      };
      comands: {
        send: string;
        back: string;
      };
    };
  }

  const zodSchema = z.object({
    nome: z
      .string()
      .min(1, {
        message: actionTranslation.form.failure.input_error.name.required,
      }),
    email: z
      .string()
      .min(1, {
        message: actionTranslation.form.failure.input_error.email.required,
      })
      .email({
        message: actionTranslation.form.failure.input_error.email.invalid,
      }),
    mensagem: z
      .string()
      .min(1, {
        message: actionTranslation.form.failure.input_error.message.required,
      })
      .max(1500, {
        message: actionTranslation.form.failure.input_error.message.max_lenght,
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<MessageInterface>({
    resolver: zodResolver(zodSchema),
    mode: "onBlur",
  });

  async function sendMessage(data: MessageInterface) {
    return await fetch("https://api-sheets.onrender.com/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, telefone: "21 98888-8888" }),
    })
      .then((res) => {
        if (!res.ok) {
          return false;
        }
        return true;
      })
      .catch((e) => {
        return false;
      });
  }

  async function onSubmit(data: MessageInterface) {
    const response = await sendMessage(data);

    setErrorMessage(response);
  }

  return (
    <section
      className="hero min-h-[60svh] bg-gradient-to-t from-slate-950 to-accent"
      id="action"
    >
      <div className="hero-overlay"></div>
      {form ? (
        <div className="hero">
          <div className="hero-content pt-10 flex-col">
            {errorMessage === undefined ? (
              ""
            ) : !errorMessage ? (
              <div className="bg-error max-w-2xl text-center text-red-900 rounded-md  px-6 py-3">
                <h1 className="text-clamp_title text-red-900 px-6 py-3 bold">
                  {actionTranslation.form.failure.sending_error.header}
                </h1>
                <p className="text-clamp_subtitle">
                  {actionTranslation.form.failure.sending_error.main}
                </p>
              </div>
            ) : (
              <div className="max-w-2xl bg-success text-center text-green-900 rounded-md  px-6 py-3">
                <h1 className="text-3xl bold">
                  {actionTranslation.form.success.header}
                </h1>
                <p className="text-xl text-center">
                  {actionTranslation.form.success.main}
                </p>
              </div>
            )}
            <div className="card bg-base-200 p-5 pt-0 shrink-0 w-full max-w-md shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text ${errors.nome && "text-error"}`}
                    >
                      {errors.nome
                        ? errors.nome?.message
                        : actionTranslation.form.inputs.name.label}
                    </span>
                  </label>
                  <input
                    {...register("nome")}
                    type="text"
                    placeholder={actionTranslation.form.inputs.name.placeholder}
                    className="input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text ${errors.email && "text-error"}`}
                    >
                      {errors.email
                        ? errors.email?.message
                        : actionTranslation.form.inputs.email.label}
                    </span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={
                      actionTranslation.form.inputs.email.placeholder
                    }
                    className="input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text ${
                        errors.mensagem && "text-error"
                      }`}
                    >
                      {errors.mensagem
                        ? errors.mensagem?.message
                        : actionTranslation.form.inputs.message.label}
                    </span>
                  </label>
                  <textarea
                    {...register("mensagem")}
                    placeholder={
                      actionTranslation.form.inputs.message.placeholder
                    }
                    className="py-2 h-32 input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-none">
                    {actionTranslation.form.comands.send}
                  </button>
                </div>
              </form>
            </div>
            <div onClick={toggle} className="text-primary link link-hover">
              {actionTranslation.form.comands.back}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`hero-content text-center text-neutral-content transition-opacity duration-500`}
        >
          <div className="max-w-3xl py-10">
            <h1 className="mb-5 text-clamp_title font-bold tracking-wider">
              {actionTranslation.header}
            </h1>
            <p className="mb-5 my-8 opacity-75 text-clamp_subtitle px-2 leading-relaxed">
              {actionTranslation.main}
            </p>
            <button
              onClick={toggle}
              className="btn btn-primary btn-sm md:btn-md mt-3 px-8 btn-outline rounded-none"
            >
              {actionTranslation.action}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

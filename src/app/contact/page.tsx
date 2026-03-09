"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Опишите задачу — отвечу с оценкой в течение нескольких часов.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="https://t.me/ruslan_web_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">💬</span>
          <div>
            <p className="text-sm font-medium">Telegram</p>
            <p className="text-sm text-zinc-500">@ruslan_web_dev</p>
          </div>
        </a>
        <a
          href="mailto:hello@ruslanweb.ru"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">✉️</span>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-zinc-500">hello@ruslanweb.ru</p>
          </div>
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <a
          href="https://kwork.ru/user/ruslan_web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">🛒</span>
          <div>
            <p className="text-sm font-medium">Kwork</p>
            <p className="text-sm text-zinc-500">Профиль на Kwork</p>
          </div>
        </a>
        <a
          href="https://fl.ru/users/ruslan_web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-sm font-medium">FL.ru</p>
            <p className="text-sm text-zinc-500">Профиль на FL.ru</p>
          </div>
        </a>
      </div>

      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

      <h2 className="text-xl font-semibold">Или оставьте заявку</h2>

      {submitted ? (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950">
          <p className="font-medium text-green-800 dark:text-green-200">
            Спасибо! Сообщение отправлено. Отвечу в ближайшее время.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Описание задачи
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Опишите, что нужно сделать: тип проекта, сроки, бюджет"
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Отправить заявку
          </button>
        </form>
      )}
    </section>
  );
}

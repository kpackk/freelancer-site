"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { trackGoal } from "@/lib/analytics";

interface FormData {
  name: string;
  contact: string;
  message: string;
  budget: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    message: "",
    budget: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Ошибка отправки. Попробуйте позже.");
        setStatus("error");
        return;
      }

      setStatus("success");
      trackGoal("contact_form_submit");
    } catch {
      setErrorMessage("Не удалось отправить. Проверьте подключение к интернету.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <>
        <h2 className="text-xl font-semibold">Или оставьте заявку</h2>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950">
          <p className="font-medium text-green-800 dark:text-green-200">
            Спасибо! Сообщение отправлено. Отвечу в ближайшее время.
          </p>
        </div>
      </>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900";

  return (
    <>
      <h2 className="text-xl font-semibold">Или оставьте заявку</h2>

      {status === "error" && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email или телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            placeholder="email@example.com или +7 999 123-45-67"
            value={formData.contact}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Описание задачи <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Опишите, что нужно сделать: тип проекта, сроки, детали"
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Бюджет{" "}
            <span className="text-zinc-400 dark:text-zinc-500">(необязательно)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Не указан</option>
            <option value="до 5 000 ₽">до 5 000 ₽</option>
            <option value="5 000 – 15 000 ₽">5 000 – 15 000 ₽</option>
            <option value="15 000 – 50 000 ₽">15 000 – 50 000 ₽</option>
            <option value="от 50 000 ₽">от 50 000 ₽</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {status === "submitting" ? "Отправка…" : "Отправить заявку"}
        </button>
      </form>
    </>
  );
}

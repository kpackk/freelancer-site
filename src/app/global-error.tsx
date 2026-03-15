"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ru">
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Что-то пошло не так</h2>
          <button onClick={() => reset()} style={{ marginTop: "1rem" }}>
            Попробовать снова
          </button>
        </div>
      </body>
    </html>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/services", label: "Услуги" },
                { href: "/portfolio", label: "Портфолио" },
                { href: "/blog", label: "Блог" },
                { href: "/contact", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Контакты
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="mailto:hello@ruslanweb.ru" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                  hello@ruslanweb.ru
                </a>
              </li>
              <li>
                <a href="https://t.me/ruslan_web_dev" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                  Telegram: @ruslan_web_dev
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Фриланс-площадки
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="https://kwork.ru/user/ruslan_web" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                  Kwork
                </a>
              </li>
              <li>
                <a href="https://fl.ru/users/ruslan_web" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                  FL.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          &copy; {new Date().getFullYear()} Ruslan WEB. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

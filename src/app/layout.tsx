import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants";
import type { Metadata } from "next";
import "./css/euclid-circular-a-font.css";
import "./css/style.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

export default async function AppLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}

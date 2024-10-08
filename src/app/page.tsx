import { routing } from "@/i18n/routing";
// eslint-disable-next-line no-restricted-imports
import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(routing.defaultLocale);
}

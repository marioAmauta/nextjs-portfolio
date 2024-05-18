import { LinkButtonProps } from "@/lib/definitions";
import { Link } from "@/navigation";

export function LinkButton({ href, label, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`flex w-max items-center justify-center rounded-lg bg-[--btn-bg-color] px-4 py-2 text-center text-lg font-semibold shadow transition-colors duration-300 ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

export function ContactLinkButton({ href, label, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-12 w-28 items-center justify-center rounded-lg bg-[--btn-bg-color] text-lg font-semibold shadow transition-all duration-300 ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

export function TechLinkButton({ label, href }: LinkButtonProps) {
  return (
    <Link
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 items-center justify-center rounded-2xl bg-[--btn-bg-color] px-4 text-[--app-text-color]"
    >
      {label}
    </Link>
  );
}

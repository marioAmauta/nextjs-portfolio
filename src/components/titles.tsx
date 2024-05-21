import { TitleProps } from "@/lib/definitions";

export function Title({ children, titleType, className }: TitleProps) {
  switch (titleType) {
    case "hero":
      return <h1 className="text-5xl font-bold">{children}</h1>;
    case "heroSubtitle":
      return <h2 className="text-3xl font-semibold">{children}</h2>;
    case "h1":
      return <h1 className={`py-10 text-5xl font-bold ${className ?? ""}`}>{children}</h1>;
    case "h2":
      return <h2 className={`mb-10 text-4xl font-bold ${className ?? ""}`}>{children}</h2>;
    case "h3":
      return <h3 className={`text-3xl font-bold ${className ?? ""}`}>{children}</h3>;
    case "h4":
      return <h4 className="text-2xl font-bold">{children}</h4>;
    case "h5":
      return <h5 className="text-xl font-bold">{children}</h5>;
    case "h6":
      return <h6 className="text-lg font-bold">{children}</h6>;
    default:
      throw new Error("Invalid title type");
  }
}

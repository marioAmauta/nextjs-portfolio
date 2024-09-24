"use client";

import { useEffect } from "react";

import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default function Error({ error }: ErrorFileProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <TypographyH1>Error Page</TypographyH1>
      <TypographyP>{error.name}</TypographyP>
      <TypographyP>{error.message}</TypographyP>
    </>
  );
}

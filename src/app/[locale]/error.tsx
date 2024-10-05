"use client";

import React from "react";
import { useEffect } from "react";

import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default function Error({ error }: ErrorFileProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
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

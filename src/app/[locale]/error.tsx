"use client";

import { useEffect } from "react";

export default function Error({ error }: ErrorFileProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Error Page</h1>
    </>
  );
}

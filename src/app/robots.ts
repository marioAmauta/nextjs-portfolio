import { MetadataRoute } from "next";

import { METADATA_DEFAULT } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${METADATA_DEFAULT.siteUrl}/sitemap.xml`
  };
}

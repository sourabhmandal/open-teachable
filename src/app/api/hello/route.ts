import { getRequestContext } from "@cloudflare/next-on-pages";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  let responseText = "Hello World";

  const { env } = getRequestContext();

  const myKv = env.MY_KV_1;
  await myKv.put("suffix", " from a KV store!");
  const suffix = await myKv.get("suffix");
  responseText += suffix;

  return new Response(responseText);
}

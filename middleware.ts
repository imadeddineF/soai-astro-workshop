import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/about") {
    return Response.redirect(new URL("/404", context.url), 301);
  }

  return next();
});

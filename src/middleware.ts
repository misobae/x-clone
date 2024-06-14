import { auth as middleware } from "./auth";

// middleware를 적용할 routes
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}
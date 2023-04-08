export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    "/app/trips",
    "/app/reservations",
    "/app/properties",
    "/app/favorites"
  ]
};
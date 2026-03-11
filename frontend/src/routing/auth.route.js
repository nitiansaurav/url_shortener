import { createRoute, redirect } from "@tanstack/react-router"
import { rootRoute } from "./appRoutes"
import AuthPage from "../pages/AuthPage"

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: AuthPage,

  beforeLoad: ({ context }) => {
    const state = context.store.getState()

    if (state.auth.isAuthenticated) {
      throw redirect({
        to: "/dashboard"
      })
    }
  }
})
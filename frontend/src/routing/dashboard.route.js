import { createRoute, redirect } from "@tanstack/react-router"
import { rootRoute } from "./appRoutes"
import DashboardPage from "../pages/DashboardPage"

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,

  beforeLoad: ({ context }) => {
    const state = context.store.getState()

    if (!state.auth.isAuthenticated) {
      throw redirect({
        to: "/auth"
      })
    }
  }
})
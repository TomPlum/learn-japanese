import { http, HttpResponse, RequestHandler } from "msw";
import { useDeleteAccountResponses } from "api/hooks/auth/useDeleteAccount/useDeleteAccount.responses.ts";

export const useDeleteAccountHandlers: RequestHandler[] = [
  http.delete('*/user/delete', () => {
    return HttpResponse.json(useDeleteAccountResponses)
  })
]

export const useDeleteAccountErrorHandlers: RequestHandler[] = (error: string) => {
  return [
    http.delete('*/user/delete', () => {
      return HttpResponse.json({ error }, { status: 500 })
    })
  ]
}
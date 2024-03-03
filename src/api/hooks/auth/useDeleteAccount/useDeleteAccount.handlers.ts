import { http, HttpResponse, RequestHandler } from "msw";
import { useDeleteAccountResponses } from "api/hooks/auth/useDeleteAccount/useDeleteAccount.responses.ts";
import { DeleteAccountArgs } from "api/hooks/auth/useDeleteAccount/types.ts";

export const useDeleteAccountHandlers = ({ expectedPassword }: { expectedPassword: string } = {}): RequestHandler[] => {
  return [
    http.delete('*/user/delete', async ({ request }) => {
      const body = await request.json() as DeleteAccountArgs
      if (body.password) {
        if (body.password === expectedPassword) {
          return HttpResponse.json(useDeleteAccountResponses)
        } else {
          console.error(
            `useDeleteAccount API hook was called with the 'password' field set in the request body as ` +
            `[${body.password}] but did not match the stubbed value of [${expectedPassword}]`
          )
          return HttpResponse.error()
        }
      }

      return HttpResponse.json(useDeleteAccountResponses)
    })
  ]
}

export const useDeleteAccountErrorHandlers: RequestHandler[] = (error: string) => {
  return [
    http.delete('*/user/delete', () => {
      return HttpResponse.json({ error }, { status: 500 })
    })
  ]
}
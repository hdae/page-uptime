import { addDays } from "date-fns"
import ky from "ky"

type TokenResult = {
    access_token: string
    expires_in: number
    refresh_token: string
    scope: string
    token_type: "Bearer"
}

type Session = {
    id: string
    startTimeMillis: string
    endTimeMillis: string
    modifiedTimeMillis: string
    application: {
        packageName: string
    }
    activityType: number
}

type SleepResult = {
    session: Session[]
    deletedSession: Session[]
    nextPageToken: string
}

const app_url = `${location.origin}${import.meta.env.BASE_URL}`

export const getLatest = async (token: string) => {
    const url = new URL(
        "https://www.googleapis.com/fitness/v1/users/me/sessions"
    )

    Object.entries({
        startTime: addDays(new Date(), -3).toISOString(),
        endTime: new Date().toISOString(),
        activityType: "72",
    }).forEach(([key, value]) => url.searchParams.append(key, value))

    const response = await ky
        .get(url.toString(), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .json<SleepResult>()

    return response.session
        .map(({ startTimeMillis, endTimeMillis }) => [
            Number(startTimeMillis),
            Number(endTimeMillis),
        ])
        .sort(([, a], [, b]) => b - a).at(0)
}

export const getToken = async () => {
    const refresh_token = localStorage.getItem("refresh_token")
    if (refresh_token == undefined) return
    const response = await ky
        .post("https://accounts.google.com/o/oauth2/token", {
            json: {
                refresh_token,
                client_id: import.meta.env.VITE_CLIENT_ID,
                client_secret: import.meta.env.VITE_CLIENT_SECRET,
                redirect_uri: app_url,
                grant_type: "refresh_token",
            },
        })
        .json<TokenResult>()
    return response.access_token
}

export const getCode = async () => {
    const param = new URLSearchParams(window.location.search)

    if (param.has("code")) {
        const code = param.get("code")

        const response = await ky
            .post("https://accounts.google.com/o/oauth2/token", {
                json: {
                    code,
                    client_id: import.meta.env.VITE_CLIENT_ID,
                    client_secret: import.meta.env.VITE_CLIENT_SECRET,
                    redirect_uri: app_url,
                    grant_type: "authorization_code",
                },
            })
            .json<TokenResult>()

        localStorage.setItem("refresh_token", response.refresh_token)

        location.replace(app_url)

        return response.access_token
    }

    const url = new URL("https://accounts.google.com/o/oauth2/auth")

    Object.entries({
        access_type: "offline",
        client_id: import.meta.env.VITE_CLIENT_ID,
        flowName: "GeneralOAuthFlow",
        prompt: "consent",
        redirect_uri: app_url,
        response_type: "code",
        scope: "https://www.googleapis.com/auth/fitness.sleep.read",
    }).forEach(([key, value]) => url.searchParams.append(key, value))

    location.href = url.toString()
}

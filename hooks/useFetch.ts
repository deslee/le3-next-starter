import { useEffect, useState, useCallback } from "react"

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type ContentType = string

type Vals<TResponse> = [TResponse, null, () => Promise<void>] | [null, Error, () => Promise<void>] | [null, null, () => Promise<void>]

type Unmarshaller<TResponse> = (response: Response) => Promise<TResponse>

function useFetch<TResponse>(url: string, method: Method = 'GET', body?: any, contentType: ContentType = 'application/json', unmarshall?: Unmarshaller<TResponse>): Vals<TResponse> {
    if (body !== undefined && contentType === 'application/json' && typeof body !== 'string') {
        body = JSON.stringify(body)
    }

    const [data, setData] = useState<TResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const run = useCallback(async () => {
        setData(null)
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType
            },
            body: body
        })

        if (response.status >= 400) {
            setError(new Error(response.statusText))
            return;
        }

        const d = unmarshall ? await unmarshall(response) : contentType === 'application/json' ? await response.json() : response
        setData(d)
    }, [url, contentType, method, body, unmarshall])

    useEffect(() => {
        run();
    }, [run])

    return [data, error, run] as any
}

export default useFetch
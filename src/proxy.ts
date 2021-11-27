export type Proxy<V> = { phantom: V, canConstruct: never }
export const Proxy: <V>() => Proxy<V>
    = () => undefined as any

export type FromProxy<P> = P extends Proxy<infer R> ? R : never

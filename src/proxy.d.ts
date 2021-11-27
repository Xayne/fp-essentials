export declare type Proxy<V> = {
    phantom: V;
    canConstruct: never;
};
export declare const Proxy: <V>() => Proxy<V>;
export declare type FromProxy<P> = P extends Proxy<infer R> ? R : never;

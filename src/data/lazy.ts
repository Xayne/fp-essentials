export class Lazy<v> {
    static pure: <v>(v: v) => Lazy<v>
        = v => new Lazy(() => v)
    static from: <v>(f: () => v) => Lazy<v>
        = f => new Lazy(f)

    get v(): v {
        return this._get()
    }

    private constructor(f: (() => v)) {
        this._get = () => {
            const r = f()
            this.resolve(r)
            return r
        }
    }

    private resolve(v: v) {
        this._get = () => v
    }

    private _get: () => v
}

export const lzMap: <a, b>(f: (a: a) => b) => (l: Lazy<a>) => Lazy<b>
    = f => l => Lazy.from(() => f(l.v))

export const lzFlatMap: <a, b>(f: (a: a) => Lazy<b>) => (l: Lazy<a>) => Lazy<b>
    = f => l => Lazy.from(() => f(l.v).v)

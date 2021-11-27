export declare class Lazy<v> {
    static pure: <v>(v: v) => Lazy<v>;
    static from: <v>(f: () => v) => Lazy<v>;
    get v(): v;
    private constructor();
    private resolve;
    private _get;
}
export declare const lzMap: <a, b>(f: (a: a) => b) => (l: Lazy<a>) => Lazy<b>;
export declare const lzFlatMap: <a, b>(f: (a: a) => Lazy<b>) => (l: Lazy<a>) => Lazy<b>;

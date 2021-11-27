export declare type Maybe<a> = Just<a> | None;
declare type Just<a> = {
    val: a;
    hasVal: true;
};
declare type None = {
    hasVal: false;
};
export declare const Just: <a>(v: a) => Maybe<a>;
export declare const None: Maybe<never>;
export declare const mbMap: <a, b>(fn: (a: a) => b) => (m: Maybe<a>) => Maybe<b>;
export declare const mbBind: <a, b>(fn: (a: a) => Maybe<b>) => (m: Maybe<a>) => Maybe<b>;
export declare const mbFlatMap: <a, b>(fn: (a: a) => Maybe<b>) => (m: Maybe<a>) => Maybe<b>;
export declare const mbFilter: <a>(fn: (a: a) => boolean) => (m: Maybe<a>) => Maybe<a>;
export declare const mbIfNone: <a, b>(onNone: Maybe<b>) => (m: Maybe<a>) => Maybe<a | b>;
export declare const mbUnbox: <a, b>(ifNone: b) => (m: Maybe<a>) => a | b;
export declare const mbToArr: <a>(m: Maybe<a>) => a[];
export declare const exists: <a>(v: a | undefined | null) => Maybe<a>;
export {};

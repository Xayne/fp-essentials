export type Maybe<a> = Just<a> | None

type Just<a> = { val: a, hasVal: true }
type None = { hasVal: false }

//----------------------------------------------------------------------

export const Just: <a>(v: a) => Maybe<a>
    = v => ({ val: v, hasVal: true })

export const None: Maybe<never>
    = ({ hasVal: false })

export const mbMap: <a, b> (fn: (a: a) => b) => (m: Maybe<a>) => Maybe<b>
    = fn => m => m.hasVal ? Just(fn(m.val)) : m

export const mbBind: <a, b>(fn: (a: a) => Maybe<b>) => (m: Maybe<a>) => Maybe<b>
    = fn => m => m.hasVal ? fn(m.val) : m

export const mbFlatMap: <a, b>(fn: (a: a) => Maybe<b>) => (m: Maybe<a>) => Maybe<b>
    = mbBind

export const mbFilter: <a>(fn: (a: a) => boolean) => (m: Maybe<a>) => Maybe<a>
    = fn => mbBind(x => fn(x) ? Just(x) : None)



export const mbIfNone: <a, b>(onNone: Maybe<b>) => (m: Maybe<a>) => Maybe<a | b>
    = onNone => m => m.hasVal ? m : onNone

export const mbUnbox: <a, b>(ifNone: b) => (m: Maybe<a>) => a | b
    = ifNone => m => m.hasVal ? m.val : ifNone

export const mbToArr: <a>(m: Maybe<a>) => a[]
    = m => m.hasVal ? [m.val] : []

export const exists: <a>(v: a | undefined | null) => Maybe<a>
    = v => v !== undefined && v !== null ? Just(v) : None

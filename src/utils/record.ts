import { Maybe, Just, None } from "../data/maybe"

export const morph: <r>(props: Partial<r>) => (val: r) => r
    = props => val => Object.assign({}, val, props)

export const morphFlipped: <r>(val: r) => (props: Partial<r>) => r
    = val => props => morph(props)(val)

export const morph_: <r>(f: (r: r) => Partial<r>) => (val: r) => r
    = f => val => Object.assign({}, val, f(val))

type RKey = number | string

export const arrToRec: <v, o, k extends RKey>(select: (v: v, i: number) => [k, o]) => (arr: v[]) => Record<k, o>
    = select => arr => {
        const mutBox: Record<any, any> = {}
        arr.forEach((v, i) => {
            const [k, o] = select(v, i)
            mutBox[k] = o
        })
        return mutBox as any
    }

export const recFold: <v, o, k extends RKey>(rec: Partial<Record<k, v>>, initial: o, folder: (acc: o, v: v, k: k) => o) => o
    = (rec, initial, folder) => Object.entries<any>(rec).reduce((a, [k, v]) => folder(a, v, k as any), initial)

export const recTryGet: <k extends RKey>(k: k) => <v>(rec: Record<k, v>) => Maybe<v>
    = k => rec => rec.hasOwnProperty(k) ? Just(rec[k]) : None

export const recToArr: <k extends RKey, v, o>(proj: (v: v, k: k) => o) => (rec: Record<k, v>) => o[]
    = proj => rec => Object.entries<any>(rec).map(([k, v]) => proj(v, k as any))

export const recMap: <k extends RKey, v, o>(proj: (v: v, k: k) => o) => (rec: Record<k, v>) => Record<k, o>
    = proj => rec => {
        let r: Record<any, any> = {}
        Object.entries<any>(rec)
            .forEach(([k, v]) => r[k] = proj(v, k as any))
        return r as any
    }

export const recFilter: <k extends RKey, V>(filter: (k: k, v: V) => boolean) => (r: Record<k, V>) => Record<k, V>
    = filter => rec => {
        let r: Record<any, any> = {}
        Object.entries<any>(rec)
            .forEach(([k, v]) => filter(k as any, v) ? r[k] = v : undefined)
        return r as any
    }

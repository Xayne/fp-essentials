import { Just, Maybe, None } from "../data/maybe";

export const arrHead: <v>(arr: v[]) => Maybe<v>
    = arr => arr.length > 0 ? Just(arr[0]) : None

export const arrTakeLast: (c: number) => <v>(arr: v[]) => v[]
    = c => arr => arr.slice(Math.max(arr.length - c, 0))


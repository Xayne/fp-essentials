type f<a, b> = (a: a) => b

export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>, f10: f<v10, v11>, f11: f<v11, v12>, f12: f<v12, v13>, f13: f<v13, v14>, f14: f<v14, v15>, f15: f<v15, v16>): v16
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>, f10: f<v10, v11>, f11: f<v11, v12>, f12: f<v12, v13>, f13: f<v13, v14>, f14: f<v14, v15>): v15
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>, f10: f<v10, v11>, f11: f<v11, v12>, f12: f<v12, v13>, f13: f<v13, v14>): v14
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>, f10: f<v10, v11>, f11: f<v11, v12>, f12: f<v12, v13>): v13
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>, f10: f<v10, v11>, f11: f<v11, v12>): v12
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>, f10: f<v10, v11>): v11
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9, v10>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>, f9: f<v9, v10>): v10
export function p<v1, v2, v3, v4, v5, v6, v7, v8, v9>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>, f8: f<v8, v9>): v9
export function p<v1, v2, v3, v4, v5, v6, v7, v8>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>, fn7: f<v7, v8>): v8
export function p<v1, v2, v3, v4, v5, v6, v7>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>, fn6: f<v6, v7>): v7
export function p<v1, v2, v3, v4, v5, v6>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>, fn5: f<v5, v6>): v6
export function p<v1, v2, v3, v4, v5>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>, fn4: f<v4, v5>): v5
export function p<v1, v2, v3, v4>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>, fn3: f<v3, v4>): v4
export function p<v1, v2, v3>(v: v1, fn: f<v1, v2>, fn2: f<v2, v3>): v3
export function p<v1, v2>(v: v1, fn: f<v1, v2>): v2
export function p<v1>(v: v1): any {
    var r: any = v
    for (var i = 1; i < arguments.length; i ++) {
        r = arguments[i](r)
    }
    return r
}

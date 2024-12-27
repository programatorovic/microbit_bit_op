//% color=#0fbc11 icon="\uf2db" block="Bits Op"
namespace bitsOp {
    //% block
    export function and(a: number, b: number): number {
        return a & b;
    }

    //% block
    export function or(a: number, b: number): number {
        return a | b;
    }

    //% block
    export function xor(a: number, b: number): number {
        return a ^ b;
    }

    //% block
    export function inv(a: number): number {
        return ~a;
    }
}

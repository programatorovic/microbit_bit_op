//% color=#0fbc11 icon="\uf2db" block="Bits Op"
namespace bitsOp {
    /**
     * Returns the bitwise AND of two numbers
     * @param a first number
     * @param b second number
     */
    //% block
    export function and(a: number, b: number): number {
        return a & b;
    }

    /**
     * Returns the bitwise OR of two numbers
     * @param a first number
     * @param b second number
     */
    //% block
    export function or(a: number, b: number): number {
        return a | b;
    }

    /**
     * Returns the bitwise XOR of two numbers
     * @param a first number
     * @param b second number
     */
    //% block
    export function xor(a: number, b: number): number {
        return a ^ b;
    }

    /**
     * Returns the bitwise NOT of a number
     * @param a number to invert
     */
    //% block
    export function inv(a: number): number {
        return ~a;
    }
}

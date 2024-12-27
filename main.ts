//% color=#0fbc11 icon="\uf2db" block="Bits Op"
//% blockNamespace="bitsOp"
namespace bitsOp {
    /**
     * Returns the bitwise AND of two numbers
     * @param a first number
     * @param b second number
     */
    //% block="and $a $b"
    export function and(a: number, b: number): number {
        return a & b;
    }

    /**
     * Returns the bitwise OR of two numbers
     * @param a first number
     * @param b second number
     */
    //% block="or $a $b"
    export function or(a: number, b: number): number {
        return a | b;
    }

    /**
     * Returns the bitwise XOR of two numbers
     * @param a first number
     * @param b second number
     */
    //% block="xor $a $b"
    export function xor(a: number, b: number): number {
        return a ^ b;
    }

    /**
     * Returns the bitwise NOT of a number
     * @param a number to invert
     */
    //% block="inv $a"
    export function inv(a: number): number {
        return ~a;
    }
}

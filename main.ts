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

    /**
     * Sets the specified bit to 1
     * @param bit bit position to set (0-31)
     * @param value number to modify
     */
    //% block="set bit $bit in $value"
    export function setBit(bit: number, value: number): number {
        return value | (1 << bit);
    }

    /**
     * Resets the specified bit to 0
     * @param bit bit position to reset (0-31)
     * @param value number to modify
     */
    //% block="reset bit $bit in $value"
    export function resetBit(bit: number, value: number): number {
        return value & ~(1 << bit);
    }

    /**
     * Gets the value of the specified bit
     * @param bit bit position to get (0-31)
     * @param value number to check
     */
    //% block="get bit $bit in $value"
    export function getBit(bit: number, value: number): number {
        return (value >> bit) & 1;
    }
}

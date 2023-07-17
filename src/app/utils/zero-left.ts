// Adds a leading zero to a number if it's less than 10
export default function zeroLeft (num: number): string {
// Makes sure that num is an integer by rounding it, turns it into a string and uses padStart to add a '0' at the start of the string
return Math.floor(num).toString().padStart(2, '0')
}

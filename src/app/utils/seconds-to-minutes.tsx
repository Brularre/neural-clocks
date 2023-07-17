import zeroLeft from './zero-left';

// Converts a given number of seconds into a representation of minutes and seconds
export function secondsToMinutes(seconds: number): string {
  // Divides the 'seconds' input by 60 and takes the remainder seconds and stores it in a variable
  const min = zeroLeft((seconds / 60) % 60);
  // Takes the remainder when seconds is divided by 60 and stores it in a variable
  const sec = zeroLeft((seconds % 60) % 60);
  // Returns a string using the previous variables (ex: 23:18)
  return `${min}:${sec}`;
}

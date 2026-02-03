/**
 * Truncates text to a maximum number of characters with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum character length
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + '...';
}

/**
 * CSS styles for multi-line text truncation with ellipsis
 * @param lines - Number of lines to show before truncating
 * @returns CSS properties object for sx prop
 */
export function getLineClampStyles(lines: number) {
  return {
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as const;
}


import type { Tab, SearchResult, SearchMatch } from '../types';
import { searchableFiles } from '../searchableContent';

export interface SearchOptions {
  isCaseSensitive: boolean;
  isWholeWord: boolean;
  isRegex: boolean;
}

export function performSearch(query: string, options: SearchOptions): SearchResult[] {
  if (!query) {
    return [];
  }

  const results: SearchResult[] = [];
  const searchRegex = buildRegex(query, options);

  if (!searchRegex) {
    return [];
  }

  for (const { file, content } of searchableFiles) {
    const lines = content.split('\n');
    const fileMatches: SearchMatch[] = [];

    lines.forEach((line, index) => {
      const matches: { start: number; length: number }[] = [];
      let match;
      // Reset lastIndex for global regex on each new line
      searchRegex.lastIndex = 0;
      while ((match = searchRegex.exec(line)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === searchRegex.lastIndex) {
            searchRegex.lastIndex++;
        }
        
        // Only add non-empty matches
        if(match[0].length > 0) {
            matches.push({ start: match.index, length: match[0].length });
        }
      }
      
      if (matches.length > 0) {
        fileMatches.push({
          lineNumber: index + 1,
          lineContent: line,
          positions: matches,
        });
      }
    });

    if (fileMatches.length > 0) {
      results.push({
        file: file,
        matches: fileMatches,
      });
    }
  }

  return results;
}

function buildRegex(query: string, options: SearchOptions): RegExp | null {
  try {
    let pattern = options.isRegex ? query : escapeRegex(query);
    if (options.isWholeWord) {
      pattern = `\\b${pattern}\\b`;
    }
    const flags = options.isCaseSensitive ? 'g' : 'gi';
    return new RegExp(pattern, flags);
  } catch (e) {
    // Invalid regex
    return null;
  }
}

function escapeRegex(string: string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

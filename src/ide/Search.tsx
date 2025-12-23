
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CaseSensitive, WholeWord, Regex, ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';
import { performSearch, SearchOptions } from '../utils/search';
import type { SearchResult, Tab } from '../types';
import Highlight from './Highlight';

interface SearchProps {
  onFileSelect: (file: Tab) => void;
}

const Search: React.FC<SearchProps> = ({ onFileSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [replaceTerm, setReplaceTerm] = useState('');
    const [options, setOptions] = useState<SearchOptions>({
        isCaseSensitive: false,
        isWholeWord: false,
        isRegex: false,
    });
    const [results, setResults] = useState<SearchResult[]>([]);
    const [openFiles, setOpenFiles] = useState<Set<string>>(new Set());
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Auto-focus input on mount
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                const searchResults = performSearch(searchTerm, options);
                setResults(searchResults);
                // By default, expand all result groups
                setOpenFiles(new Set(searchResults.map(r => r.file.id)));
            } else {
                setResults([]);
            }
        }, 300); // Debounce search

        return () => clearTimeout(handler);
    }, [searchTerm, options]);

    const totalResults = useMemo(() => {
        return results.reduce((acc, curr) => acc + curr.matches.length, 0);
    }, [results]);

    const toggleOption = (option: keyof SearchOptions) => {
        setOptions(prev => ({ ...prev, [option]: !prev[option] }));
    };

    const toggleFile = (fileId: string) => {
        setOpenFiles(prev => {
            const newSet = new Set(prev);
            if (newSet.has(fileId)) {
                newSet.delete(fileId);
            } else {
                newSet.add(fileId);
            }
            return newSet;
        });
    };

    const handleResultClick = (file: Tab) => {
        onFileSelect(file);
    };

    const commonButtonClasses = "p-1 rounded";
    const activeClasses = "bg-[#007acc] text-white";
    const inactiveClasses = "text-gray-400 hover:bg-[#4f4f4f] hover:text-white";

    return (
        <div className="w-full bg-[var(--bg-ide-panel)] text-sm text-[var(--text-primary)] h-full flex flex-col rounded-lg transition-colors duration-300 border border-[var(--border-color)] md:border-none">
            <div className="flex items-center justify-between px-4 py-2 flex-shrink-0 bg-[var(--bg-ide-header)]">
                <h2 className="uppercase tracking-widest text-xs text-[var(--text-secondary)] font-semibold">Search</h2>
                <MoreHorizontal className="w-4 h-4 text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)]" />
            </div>
            
            <div className="p-2 flex-shrink-0">
                <div className="relative mb-1">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[var(--bg-ide-input)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-[#007acc] focus:outline-none p-1.5 rounded text-sm placeholder-[var(--text-tertiary)] pr-24"
                        aria-label="Search"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 space-x-1">
                        <button onClick={() => toggleOption('isCaseSensitive')} className={`${commonButtonClasses} ${options.isCaseSensitive ? activeClasses : inactiveClasses}`} title="Case Sensitive"><CaseSensitive className="w-4 h-4" /></button>
                        <button onClick={() => toggleOption('isWholeWord')} className={`${commonButtonClasses} ${options.isWholeWord ? activeClasses : inactiveClasses}`} title="Match Whole Word"><WholeWord className="w-4 h-4" /></button>
                        <button onClick={() => toggleOption('isRegex')} className={`${commonButtonClasses} ${options.isRegex ? activeClasses : inactiveClasses}`} title="Use Regular Expression"><Regex className="w-4 h-4" /></button>
                    </div>
                </div>
                 <div className="relative">
                    <input
                        type="text"
                        placeholder="Replace"
                        value={replaceTerm}
                        onChange={(e) => setReplaceTerm(e.target.value)}
                         className="w-full bg-[var(--bg-ide-input)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-[#007acc] focus:outline-none p-1.5 rounded text-sm placeholder-[var(--text-tertiary)]"
                        aria-label="Replace"
                    />
                </div>
            </div>

            <div className="mt-2 border-t border-[var(--border-color)] pt-2 flex-1 overflow-y-auto">
                {searchTerm && (
                    <p className="text-xs text-[var(--text-tertiary)] px-2 mb-2">
                        {totalResults} {totalResults === 1 ? 'result' : 'results'} in {results.length} {results.length === 1 ? 'file' : 'files'}
                    </p>
                )}
                
                {results.map(({ file, matches }) => (
                    <div key={file.id}>
                        <button onClick={() => toggleFile(file.id)} className="flex items-center w-full text-left py-1 px-2 rounded hover:bg-[var(--bg-ide-hover)] font-semibold text-[var(--text-primary)]">
                            {openFiles.has(file.id) ? <ChevronDown className="w-4 h-4 mr-1 transition-transform flex-shrink-0" /> : <ChevronRight className="w-4 h-4 mr-1 transition-transform flex-shrink-0" />}
                            <file.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="truncate">{file.title}</span>
                            <span className="ml-auto text-xs bg-[var(--bg-chip)] rounded-full px-2 py-0.5">{matches.length}</span>
                        </button>
                        {openFiles.has(file.id) && (
                            <div className="pl-4">
                                {matches.map((match, i) => (
                                    <div key={i} onClick={() => handleResultClick(file)} className="py-0.5 px-2 hover:bg-[var(--bg-ide-hover)] rounded cursor-pointer flex items-start">
                                        <span className="text-right text-[var(--text-tertiary)] w-8 pr-2 flex-shrink-0 leading-relaxed">{match.lineNumber}</span>
                                        <p className="truncate text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap">
                                            <Highlight text={match.lineContent.trim()} positions={match.positions} />
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;

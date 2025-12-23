
import React, { useState } from 'react';
import { fileSystemTree } from '../constants';
import type { FileSystemNode, Tab } from '../types';
import { Folder, FolderOpen, MoreHorizontal } from 'lucide-react';

interface FileExplorerProps {
  onFileSelect: (file: Tab) => void;
}

const TreeNode: React.FC<{ node: FileSystemNode; onFileSelect: (file: Tab) => void; depth: number }> = ({ node, onFileSelect, depth }) => {
  const [isOpen, setIsOpen] = useState(true);

  const isFolder = node.type === 'folder';
  const indentStyle = { paddingLeft: `${0.5 + depth * 1}rem` };

  const handleNodeClick = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else if (node.meta) {
      onFileSelect(node.meta);
    }
  };
  
  const NodeIcon = node.icon || (isFolder ? (isOpen ? FolderOpen : Folder) : null);

  return (
    <li role="treeitem" aria-expanded={isFolder ? isOpen : undefined}>
      <div
        onClick={handleNodeClick}
        onKeyDown={(e) => e.key === 'Enter' && handleNodeClick()}
        className={`flex items-center py-0.5 pr-2 cursor-pointer text-[var(--text-secondary)] hover:bg-[var(--bg-ide-hover)] hover:text-[var(--text-primary)] rounded ${node.meta ? '' : 'opacity-100'}`}
        style={indentStyle}
        tabIndex={0}
      >
        {isFolder ? (
            isOpen ? <FolderOpen className="w-4 h-4 mr-1 text-[var(--text-tertiary)]" /> : <Folder className="w-4 h-4 mr-1 text-[var(--text-tertiary)]" />
        ) : (
            NodeIcon && <NodeIcon className="w-4 h-4 mr-2 flex-shrink-0" />
        )}
        <span className="truncate text-sm">{node.name}</span>
      </div>
      {isFolder && isOpen && node.children && (
        <ul role="group">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} onFileSelect={onFileSelect} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FileExplorer: React.FC<FileExplorerProps> = ({ onFileSelect }) => {
  return (
    <div className="w-full bg-[var(--bg-ide-panel)] text-sm text-[var(--text-primary)] h-full flex flex-col rounded-lg transition-colors duration-300 overflow-hidden">
       <div className="flex items-center justify-between px-4 py-2 flex-shrink-0 bg-[var(--bg-ide-header)]">
        <h2 className="uppercase tracking-widest text-xs text-[var(--text-secondary)] font-semibold">Explorer</h2>
        <MoreHorizontal className="w-4 h-4 text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)]" />
      </div>
      <ul role="tree" className="px-2 pb-2 pt-2 flex-1 overflow-y-auto">
        {fileSystemTree.map((node, index) => (
          <TreeNode key={index} node={node} onFileSelect={onFileSelect} depth={0} />
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;

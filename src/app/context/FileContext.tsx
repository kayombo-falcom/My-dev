import { createContext, useContext, useState, ReactNode } from 'react';

export interface FileData {
  id: string;
  name: string;
  type: 'image' | 'document' | 'zip';
  size: number;
  uploadDate: string;
  url: string;
  preview?: string;
}

interface FileContextType {
  files: FileData[];
  addFile: (file: Omit<FileData, 'id' | 'uploadDate'>) => void;
  deleteFile: (id: string) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<FileData[]>([
    {
      id: '1',
      name: 'project-mockup.png',
      type: 'image',
      size: 2456789,
      uploadDate: '2026-03-28',
      url: '#',
      preview: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400'
    },
    {
      id: '2',
      name: 'resume.pdf',
      type: 'document',
      size: 145678,
      uploadDate: '2026-03-25',
      url: '#'
    },
    {
      id: '3',
      name: 'design-assets.zip',
      type: 'zip',
      size: 5678901,
      uploadDate: '2026-03-20',
      url: '#'
    }
  ]);

  const addFile = (file: Omit<FileData, 'id' | 'uploadDate'>) => {
    const newFile: FileData = {
      ...file,
      id: Date.now().toString(),
      uploadDate: new Date().toISOString().split('T')[0]
    };
    setFiles(prev => [newFile, ...prev]);
  };

  const deleteFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <FileContext.Provider value={{ files, addFile, deleteFile }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFiles() {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFiles must be used within FileProvider');
  }
  return context;
}

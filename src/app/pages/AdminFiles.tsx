import { useState } from 'react';
import { Download, Eye, Trash2, FileImage, FileText, FileArchive } from 'lucide-react';
import { useFiles } from '../context/FileContext';

export function AdminFiles() {
  const { files, deleteFile } = useFiles();
  const [filter, setFilter] = useState<'all' | 'image' | 'document' | 'zip'>('all');

  const filteredFiles = files.filter(f => filter === 'all' || f.type === filter);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'image': return FileImage;
      case 'document': return FileText;
      case 'zip': return FileArchive;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'image': return 'text-accent bg-accent/10';
      case 'document': return 'text-primary bg-primary/10';
      case 'zip': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">File Management</h1>
          <p className="text-muted-foreground">Manage all uploaded files and resources.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {['all', 'image', 'document', 'zip'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as any)}
            className={`px-6 py-2 rounded-lg transition-all duration-300 ${
              filter === type
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border hover:bg-secondary'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
            {type !== 'all' && ` (${files.filter(f => f.type === type).length})`}
          </button>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="text-left px-6 py-4 text-sm">File Name</th>
                <th className="text-left px-6 py-4 text-sm">Type</th>
                <th className="text-left px-6 py-4 text-sm">Size</th>
                <th className="text-left px-6 py-4 text-sm">Upload Date</th>
                <th className="text-right px-6 py-4 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map((file) => {
                const Icon = getIcon(file.type);
                return (
                  <tr
                    key={file.id}
                    className="border-t border-border hover:bg-secondary/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded ${getTypeColor(file.type)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{file.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm capitalize">{file.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">{formatFileSize(file.size)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">{file.uploadDate}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {file.preview && (
                          <button
                            className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <a
                          href={file.url}
                          download={file.name}
                          className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => {
                            if (confirm(`Delete ${file.name}?`)) {
                              deleteFile(file.id);
                            }
                          }}
                          className="p-2 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredFiles.length === 0 && (
          <div className="py-16 text-center">
            <FileArchive className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No files found</p>
          </div>
        )}
      </div>
    </div>
  );
}

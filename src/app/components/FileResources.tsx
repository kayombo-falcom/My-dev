import { Download, FileImage, FileText, FileArchive, Eye } from 'lucide-react';
import { useFiles } from '../context/FileContext';
import { useState } from 'react';

export function FileResources() {
  const { files } = useFiles();
  const [filter, setFilter] = useState<'all' | 'image' | 'document' | 'zip'>('all');
  const [previewFile, setPreviewFile] = useState<any>(null);

  const filteredFiles = files.filter(f => filter === 'all' || f.type === filter);

  const images = filteredFiles.filter(f => f.type === 'image');
  const documents = filteredFiles.filter(f => f.type === 'document');
  const zips = filteredFiles.filter(f => f.type === 'zip');

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

  return (
    <section id="files" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Resources</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
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
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </button>
          ))}
        </div>

        {(filter === 'all' || filter === 'image') && images.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl mb-6">Images</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {images.map((file) => (
                <div
                  key={file.id}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-card border border-border"
                >
                  <img
                    src={file.preview || file.url}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                    <p className="text-sm px-4 text-center">{file.name}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPreviewFile(file)}
                        className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <a
                        href={file.url}
                        download={file.name}
                        className="p-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'document') && documents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl mb-6">Documents</h3>
            <div className="grid gap-4">
              {documents.map((file) => {
                const Icon = getIcon(file.type);
                return (
                  <div
                    key={file.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{file.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(file.size)} • {file.uploadDate}
                      </p>
                    </div>
                    <a
                      href={file.url}
                      download={file.name}
                      className="p-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'zip') && zips.length > 0 && (
          <div>
            <h3 className="text-2xl mb-6">ZIP Files</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {zips.map((file) => {
                const Icon = getIcon(file.type);
                return (
                  <div
                    key={file.id}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2">{file.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <a
                      href={file.url}
                      download={file.name}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {previewFile && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setPreviewFile(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setPreviewFile(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <span className="text-xl">×</span>
              </button>
              <img
                src={previewFile.preview || previewFile.url}
                alt={previewFile.name}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { Download, FileArchive, FileImage, FileText } from 'lucide-react';
import { useState } from 'react';
import { useFiles } from '../context/FileContext';

export function FileResources() {
  const { files } = useFiles();
  const [filter, setFilter] = useState<'all' | 'image' | 'document' | 'zip'>('all');

  const filteredFiles = files.filter((file) => filter === 'all' || file.type === filter);
  const images = filteredFiles.filter((file) => file.type === 'image');
  const documents = filteredFiles.filter((file) => file.type === 'document');
  const zips = filteredFiles.filter((file) => file.type === 'zip');

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'image':
        return FileImage;
      case 'document':
        return FileText;
      case 'zip':
        return FileArchive;
      default:
        return FileText;
    }
  };

  return (
    <section id="files" className="bg-background px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-12 w-1.5 bg-[#56b98b]" />
            <div>
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Resources</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                Files, documents, and downloadable assets presented in the same clean page style.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex flex-wrap gap-3">
          {['all', 'image', 'document', 'zip'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type as 'all' | 'image' | 'document' | 'zip')}
              className={`rounded-lg border px-6 py-2 transition-colors duration-300 ${
                filter === type
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background hover:bg-muted'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </button>
          ))}
        </div>

        {(filter === 'all' || filter === 'image') && images.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 text-2xl text-foreground">Images</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {images.map((file) => (
                <div key={file.id} className="overflow-hidden border border-border bg-background">
                  <img
                    src={file.preview || file.url}
                    alt={file.name}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="space-y-4 p-4">
                    <p className="text-sm text-foreground">{file.name}</p>
                    <div className="flex gap-3">
                      <a
                        href={file.preview || file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors duration-300 hover:bg-muted"
                      >
                        Open
                      </a>
                      <a
                        href={file.url}
                        download={file.name}
                        className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                      >
                        Download
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
            <h3 className="mb-6 text-2xl text-foreground">Documents</h3>
            <div className="grid gap-4">
              {documents.map((file) => {
                const Icon = getIcon(file.type);
                return (
                  <div
                    key={file.id}
                    className="flex items-center gap-4 border border-border p-4 transition-colors duration-300 hover:border-primary/50"
                  >
                    <div className="bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1 text-foreground">{file.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(file.size)} | {file.uploadDate}
                      </p>
                    </div>
                    <a
                      href={file.url}
                      download={file.name}
                      className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                    >
                      Download
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'zip') && zips.length > 0 && (
          <div>
            <h3 className="mb-6 text-2xl text-foreground">ZIP Files</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {zips.map((file) => {
                const Icon = getIcon(file.type);
                return (
                  <div
                    key={file.id}
                    className="border border-border p-6 transition-colors duration-300 hover:border-primary/50"
                  >
                    <div className="mb-4 flex items-start gap-4">
                      <div className="bg-accent/10 p-3">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-foreground">{file.name}</h4>
                        <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <a
                      href={file.url}
                      download={file.name}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                    >
                      <Download className="h-5 w-5" />
                      Download
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

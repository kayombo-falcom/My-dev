import { useState, useRef } from 'react';
import { Upload as UploadIcon, File, X } from 'lucide-react';
import { useFiles } from '../context/FileContext';

export function AdminUpload() {
  const { addFile } = useFiles();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const getFileType = (file: File): 'image' | 'document' | 'zip' => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.name.endsWith('.zip')) return 'zip';
    return 'document';
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            selectedFiles.forEach(file => {
              const fileType = getFileType(file);
              addFile({
                name: file.name,
                type: fileType,
                size: file.size,
                url: URL.createObjectURL(file),
                preview: fileType === 'image' ? URL.createObjectURL(file) : undefined
              });
            });
            setUploading(false);
            setUploadProgress(0);
            setSelectedFiles([]);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Upload Files</h1>
        <p className="text-muted-foreground">Upload images, documents, or ZIP files to your portfolio.</p>
      </div>

      <div className="max-w-3xl">
        <div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            dragActive
              ? 'border-primary bg-primary/5'
              : 'border-border bg-card hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleChange}
            className="hidden"
          />

          <div className="flex flex-col items-center gap-4">
            <div className="p-6 rounded-full bg-primary/10">
              <UploadIcon className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h3 className="text-xl mb-2">Drop files here or click to browse</h3>
              <p className="text-sm text-muted-foreground">
                Supports images, documents (PDF, DOC), and ZIP files
              </p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Select Files
            </button>
          </div>
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-6 p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl mb-4">Selected Files ({selectedFiles.length})</h3>
            <div className="space-y-3 mb-6">
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background"
                >
                  <File className="w-5 h-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="p-1 rounded hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {uploading && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Uploading...</span>
                  <span className="text-sm text-primary">{uploadProgress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={uploading}
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : `Upload ${selectedFiles.length} File${selectedFiles.length > 1 ? 's' : ''}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

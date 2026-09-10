import { FolderOpen, Palette, FileArchive, TrendingUp } from 'lucide-react';
import { useFiles } from '../context/FileContext';

export function AdminDashboard() {
  const { files } = useFiles();

  const stats = [
    {
      icon: FolderOpen,
      label: 'Total Projects',
      value: '12',
      change: '+3 this month',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Palette,
      label: 'Design Files',
      value: files.filter(f => f.type === 'image').length.toString(),
      change: `${files.filter(f => f.type === 'image').length} images`,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: FileArchive,
      label: 'Documents',
      value: files.filter(f => f.type === 'document').length.toString(),
      change: `${files.filter(f => f.type === 'zip').length} zip files`,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: TrendingUp,
      label: 'Total Files',
      value: files.length.toString(),
      change: 'Updated today',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your portfolio.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl mb-2">{stat.value}</h3>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-accent">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-xl mb-4">Recent Uploads</h3>
          <div className="space-y-3">
            {files.slice(0, 5).map((file) => (
              <div key={file.id} className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <div className={`p-2 rounded ${file.type === 'image' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                  {file.type === 'image' ? (
                    <Palette className={`w-4 h-4 ${file.type === 'image' ? 'text-accent' : 'text-primary'}`} />
                  ) : (
                    <FileArchive className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.uploadDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-xl mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="/admin/upload"
              className="flex items-center gap-3 p-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <FileArchive className="w-5 h-5" />
              <span>Upload New Files</span>
            </a>
            <a
              href="/admin/projects"
              className="flex items-center gap-3 p-4 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
            >
              <FolderOpen className="w-5 h-5" />
              <span>Manage Projects</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:bg-secondary transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5" />
              <span>View Public Site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

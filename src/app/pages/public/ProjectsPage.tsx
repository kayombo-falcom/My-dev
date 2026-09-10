import { Projects } from '../components/Projects';
import { FileResources } from '../components/FileResources';

export function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Projects />
      <FileResources />
    </div>
  );
}

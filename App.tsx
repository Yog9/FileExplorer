
import FileExplorer from './components/FileExplorer';
import { mockData } from './mockData';

const App = () => {
  return (
    <div>
      <h1>File Explorer App</h1>
      <FileExplorer data={mockData[0].data ?? []} />
    </div>
  );
};

export default App;
// components/Sidebar.tsx

import { FC } from 'react';
import { 
  PenLine, 
  Wand2,
  Sparkles,
  MessageSquare,
  Bot,
  Image as ImageIcon,  // Renamed to avoid confusion with HTML Image
  LineChart,
  Settings,
  Plus
} from 'lucide-react';

const Sidebar: FC = () => {
  const menuItems = [
    { icon: <PenLine size={20} />, label: 'Write Post', ariaLabel: 'Write new post' },
    { icon: <Wand2 size={20} />, label: 'Ideas Generator', ariaLabel: 'Generate ideas' },
    { icon: <Sparkles size={20} />, label: 'Content Maker', ariaLabel: 'Make content' },
    { icon: <MessageSquare size={20} />, label: 'Posts', ariaLabel: 'View posts' },
    { icon: <Bot size={20} />, label: 'Content Inspiration', ariaLabel: 'Get content inspiration' },
    { icon: <ImageIcon size={20} />, label: 'Posts for You', ariaLabel: 'View posts for you' },
    { icon: <LineChart size={20} />, label: 'Performance', ariaLabel: 'View performance' },
    { icon: <Settings size={20} />, label: 'Feature Request', ariaLabel: 'Request features' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <div className="mb-8">
        <button 
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
          aria-label="Create new post"
        >
          <Plus size={20} />
          <span>Write Post</span>
        </button>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer mb-1 w-full text-left"
            aria-label={item.ariaLabel}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
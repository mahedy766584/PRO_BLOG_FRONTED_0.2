import React, { useState } from 'react';
import { 
  MessageSquare, Search, Filter, Check, X, 
  Trash2, Reply, MoreHorizontal, Clock, FileText, 
  AlertOctagon, CheckCircle
} from 'lucide-react';

// Types Definition
interface Comment {
  id: number;
  author: string;
  email: string;
  avatar?: string;
  postTitle: string;
  content: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Spam';
}

const Comments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'approved' | 'spam'>('all');

  // Mock Data
  const comments: Comment[] = [
    {
      id: 1,
      author: "Alice Johnson",
      email: "alice@example.com",
      postTitle: "10 Rules of Minimal Design",
      content: "This article completely changed my perspective on whitespace. Could you elaborate more on point #3?",
      date: "2 hours ago",
      status: "Pending"
    },
    {
      id: 2,
      author: "Mark Smith",
      email: "mark@design.co",
      avatar: "https://i.pravatar.cc/150?u=mark",
      postTitle: "Why React is Future",
      content: "Great comparison! I've been using Vue but thinking about switching.",
      date: "1 day ago",
      status: "Approved"
    },
    {
      id: 3,
      author: "Spam Bot 3000",
      email: "bot@crypto.net",
      postTitle: "Travel Guide 2024",
      content: "Buy cheap crypto now! Click link below for free money $$$",
      date: "3 days ago",
      status: "Spam"
    },
    {
      id: 4,
      author: "Emily Davis",
      email: "emily@studio.io",
      avatar: "https://i.pravatar.cc/150?u=emily",
      postTitle: "10 Rules of Minimal Design",
      content: "I love the typography you used in the examples. Is that Playfair Display?",
      date: "Oct 24, 2025",
      status: "Approved"
    },
  ];

  // Filter Logic (Mock)
  const filteredComments = activeTab === 'all' 
    ? comments 
    : comments.filter(c => c.status.toLowerCase() === activeTab);

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Comments</h2>
          <p className="text-gray-500 mt-1">Manage and moderate user discussions.</p>
        </div>
        
        {/* Quick Stats */}
        <div className="flex gap-4">
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="text-sm font-medium text-gray-600">1 Pending</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm font-medium text-gray-600">1 Spam</span>
            </div>
        </div>
      </div>

      {/* 2. Main Content Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Toolbar: Search & Filter Tabs */}
        <div className="p-5 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Tabs */}
            <div className="flex gap-6 text-sm font-medium text-gray-500 w-full lg:w-auto overflow-x-auto">
                {['all', 'pending', 'approved', 'spam'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`capitalize pb-2 border-b-2 transition-colors whitespace-nowrap ${
                            activeTab === tab 
                            ? 'text-teal-700 border-teal-600' 
                            : 'border-transparent hover:text-gray-800'
                        }`}
                    >
                        {tab} ({comments.filter(c => tab === 'all' ? true : c.status.toLowerCase() === tab).length})
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="flex gap-2 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-64">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search author or content..." 
                        className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                </div>
                <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                    <Filter size={18} />
                </button>
            </div>
        </div>

        {/* 3. Comments List */}
        <div className="divide-y divide-gray-50">
            {filteredComments.length > 0 ? (
                filteredComments.map((comment) => (
                    <div key={comment.id} className="p-6 hover:bg-gray-50/50 transition-colors group">
                        <div className="flex gap-4">
                            
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                {comment.avatar ? (
                                    <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full border border-gray-200" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">
                                        {comment.author.charAt(0)}
                                    </div>
                                )}
                            </div>

                            {/* Content Body */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                            {comment.author}
                                            <span className="text-xs font-normal text-gray-400">&bull; {comment.email}</span>
                                        </h4>
                                        <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500">
                                            <FileText size={12} />
                                            <span>on <span className="font-medium text-gray-700 hover:underline cursor-pointer">{comment.postTitle}</span></span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <Clock size={12} /> {comment.date}
                                        </span>
                                        <StatusBadge status={comment.status} />
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {comment.content}
                                </p>

                                {/* Action Buttons (Visible on Hover mostly, but always accessible) */}
                                <div className="flex items-center gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                                    {comment.status === 'Pending' && (
                                        <ActionButton icon={<Check size={14}/>} label="Approve" color="text-green-600 hover:bg-green-50" />
                                    )}
                                    <ActionButton icon={<Reply size={14}/>} label="Reply" color="text-blue-600 hover:bg-blue-50" />
                                    <ActionButton icon={<AlertOctagon size={14}/>} label="Spam" color="text-orange-500 hover:bg-orange-50" />
                                    <div className="h-4 w-px bg-gray-200 mx-1"></div>
                                    <ActionButton icon={<Trash2 size={14}/>} label="Trash" color="text-red-500 hover:bg-red-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 text-gray-400">
                        <MessageSquare size={32} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No comments found</h3>
                    <p className="text-gray-500 text-sm mt-1">There are no comments in this category.</p>
                </div>
            )}
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/30 flex justify-between items-center">
            <span className="text-xs text-gray-500">Showing {filteredComments.length} results</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-200 bg-white rounded text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 border border-gray-200 bg-white rounded text-xs font-medium text-gray-600 hover:bg-gray-50">Next</button>
            </div>
        </div>

      </div>
    </div>
  );
};

// --- Helper Components ---

const StatusBadge = ({ status }: { status: string }) => {
    let styles = "";
    let icon = null;

    switch(status) {
        case 'Approved':
            styles = "bg-green-50 text-green-700 border-green-100";
            icon = <CheckCircle size={10} />;
            break;
        case 'Pending':
            styles = "bg-yellow-50 text-yellow-700 border-yellow-100";
            icon = <Clock size={10} />;
            break;
        case 'Spam':
            styles = "bg-red-50 text-red-700 border-red-100";
            icon = <AlertOctagon size={10} />;
            break;
        default:
            styles = "bg-gray-50 text-gray-600";
    }

    return (
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles}`}>
            {icon} {status}
        </span>
    );
};

const ActionButton = ({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) => (
    <button className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors ${color}`}>
        {icon}
        {label}
    </button>
);

export default Comments;
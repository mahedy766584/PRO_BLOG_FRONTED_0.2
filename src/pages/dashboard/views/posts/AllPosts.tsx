import React from 'react';
import { Filter, Plus, Edit3, Trash2 } from 'lucide-react';
import type { Post } from '@/types';

const AllPosts: React.FC = () => {
  
  const TableRow: React.FC<Post> = ({ title, category, date, status }) => (
    <tr className="hover:bg-gray-50/80 transition-colors group cursor-pointer border-b border-gray-50 last:border-0">
      <td className="px-6 py-4"><p className="font-medium text-gray-900 group-hover:text-teal-700">{title}</p></td>
      <td className="px-6 py-4"><span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium border border-gray-200">{category}</span></td>
      <td className="px-6 py-4 text-xs text-gray-400">{date}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${status === 'Published' ? 'bg-teal-50 text-teal-700' : 'bg-gray-100 text-gray-500'}`}>
            {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-3 text-gray-400">
          <Edit3 size={16} className="hover:text-teal-600" />
          <Trash2 size={16} className="hover:text-red-500" />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900">All Posts</h2>
        <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter size={16} /> Filter</button>
            <button className="flex items-center gap-2 px-5 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 shadow-lg shadow-teal-200"><Plus size={18} /> Create New</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-100 p-4 gap-6 text-sm">
            <button className="font-semibold text-teal-700 border-b-2 border-teal-600 pb-4 -mb-4.5">All (12)</button>
            <button className="text-gray-500 hover:text-gray-800">Published (10)</button>
            <button className="text-gray-500 hover:text-gray-800">Drafts (2)</button>
        </div>
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-400 font-medium">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
             <TableRow id={1} title="Minimalism in 2026" category="Design" date="Oct 24, 2025" status="Published" />
             <TableRow id={2} title="The Art of Coffee" category="Lifestyle" date="Oct 22, 2025" status="Published" />
             <TableRow id={3} title="React Hooks Guide" category="Tech" date="Oct 20, 2025" status="Draft" />
             <TableRow id={4} title="Bali Travel Guide" category="Travel" date="Oct 18, 2025" status="Published" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPosts;
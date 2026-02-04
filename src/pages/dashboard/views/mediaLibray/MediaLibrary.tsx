import { Eye, Trash2 } from 'lucide-react';

const MediaLibrary = () => (
   <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-serif font-bold text-gray-900">Media Library</h2>
         <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">Upload New</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
         {[...Array(10)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-50 rounded-xl border border-gray-100 relative group overflow-hidden cursor-pointer">
               <img src={`https://picsum.photos/seed/${i + 10}/300/300`} alt="Media" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white rounded-full text-gray-800 hover:text-teal-600"><Eye size={16} /></button>
                  <button className="p-2 bg-white rounded-full text-gray-800 hover:text-red-500"><Trash2 size={16} /></button>
               </div>
            </div>
         ))}
      </div>
   </div>
);
export default MediaLibrary;
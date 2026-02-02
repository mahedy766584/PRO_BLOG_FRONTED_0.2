import React, { useState } from 'react';
import {
    Search, Globe, Share2, Save, RefreshCw,
    Info, Image as ImageIcon
} from 'lucide-react';
import CheckListItem from '@/components/dashboard/seoManager/CheckListItem';

const SeoManager: React.FC = () => {
    // Live Preview State
    const [metaTitle, setMetaTitle] = useState("Notebook - Minimal Blog Template");
    const [metaDesc, setMetaDesc] = useState("A minimal blog template designed for writers and creators. Clean typography, open space, and focus on content.");

    // SEO Score Mock Calculation
    const titleLength = metaTitle.length;
    const descLength = metaDesc.length;
    const isTitleGood = titleLength > 30 && titleLength < 60;
    const isDescGood = descLength > 120 && descLength < 160;

    return (
        <div className="space-y-8 animate-fade-in pb-10">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900">SEO Manager</h2>
                    <p className="text-gray-500 mt-1">Optimize your blog visibility for search engines.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 font-medium">
                        <RefreshCw size={18} /> Audit Site
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg font-medium shadow-lg shadow-teal-200 hover:bg-teal-700 active:scale-95 transition-all">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT COLUMN: Input Forms */}
                <div className="space-y-8">

                    {/* 1. Global Meta Settings */}
                    <section className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Globe size={20} /></div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Global Meta Tags</h3>
                                <p className="text-xs text-gray-400">Default settings for the homepage.</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {/* Title Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between">
                                    <span>Site Title</span>
                                    <span className={`text-xs ${isTitleGood ? 'text-green-600' : 'text-orange-500'}`}>{titleLength}/60 chars</span>
                                </label>
                                <input
                                    type="text"
                                    value={metaTitle}
                                    onChange={(e) => setMetaTitle(e.target.value)}
                                    className={`w-full text-sm border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition-all ${isTitleGood ? 'border-gray-200 focus:ring-teal-500' : 'border-orange-200 focus:ring-orange-200'}`}
                                />
                                {!isTitleGood && <p className="text-xs text-orange-500 mt-1 flex items-center gap-1"><Info size={12} /> Recommended length: 30-60 characters</p>}
                            </div>

                            {/* Description Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between">
                                    <span>Meta Description</span>
                                    <span className={`text-xs ${isDescGood ? 'text-green-600' : 'text-orange-500'}`}>{descLength}/160 chars</span>
                                </label>
                                <textarea
                                    rows={4}
                                    value={metaDesc}
                                    onChange={(e) => setMetaDesc(e.target.value)}
                                    className="w-full text-sm border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                                />
                            </div>

                            {/* Keywords */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (Comma separated)</label>
                                <input type="text" placeholder="blog, minimal, writing, lifestyle" className="w-full text-sm border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                            </div>
                        </div>
                    </section>

                    {/* 2. Social Media Settings */}
                    <section className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Share2 size={20} /></div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Social Media (Open Graph)</h3>
                                <p className="text-xs text-gray-400">How your site looks on Facebook & Twitter.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-24 h-24 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-teal-400 hover:bg-teal-50 hover:text-teal-600 transition-all">
                                <ImageIcon size={24} />
                                <span className="text-[10px] mt-1 font-medium">Upload OG</span>
                            </div>
                            <div className="flex-1 space-y-3">
                                <input type="text" placeholder="Social Title (Optional)" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500" />
                                <input type="text" placeholder="Social Description (Optional)" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500" />
                            </div>
                        </div>
                    </section>
                </div>


                {/* RIGHT COLUMN: Previews & Analysis */}
                <div className="space-y-8">

                    {/* 1. Google Search Preview Card */}
                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-white rounded-md shadow-sm text-gray-600"><Search size={16} /></div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Search Engine Preview</span>
                            </div>
                            <span className="bg-white border border-gray-200 text-xs px-2 py-1 rounded text-gray-500">Live View</span>
                        </div>

                        {/* Simulated Google Result */}
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-700">N</div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-800 font-medium">Notebook Blog</span>
                                    <span className="text-[10px] text-gray-500">https://notebook-template.com</span>
                                </div>
                            </div>
                            <h3 className="text-xl text-[#1a0dab] font-medium hover:underline truncate leading-snug font-sans">
                                {metaTitle || "Your Site Title Here"}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 leading-snug line-clamp-2">
                                {metaDesc || "Your site description will appear here..."}
                            </p>
                        </div>

                        <div className="mt-4 flex gap-2">
                            <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-1 rounded">Mobile Preview</span>
                            <span className="text-[10px] bg-white border border-gray-200 text-gray-400 px-2 py-1 rounded">Desktop Preview</span>
                        </div>
                    </section>

                    {/* 2. SEO Health Checklist */}
                    <section className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-5">SEO Health Score</h3>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="32" cy="32" r="28" stroke="#f3f4f6" strokeWidth="6" fill="none" />
                                    <circle cx="32" cy="32" r="28" stroke="#10b981" strokeWidth="6" fill="none" strokeDasharray="175" strokeDashoffset="35" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-sm font-bold text-gray-800">85%</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Good Optimization</p>
                                <p className="text-xs text-gray-500">2 issues found needs attention.</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <CheckListItem label="Robots.txt is active" status="good" />
                            <CheckListItem label="Sitemap.xml generated" status="good" />
                            <CheckListItem label="Meta description length" status={isDescGood ? "good" : "warning"} />
                            <CheckListItem label="Missing alt text in 2 images" status="error" />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};



export default SeoManager;
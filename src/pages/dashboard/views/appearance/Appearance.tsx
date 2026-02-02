import React, { useState } from 'react';
import { Moon, Sun, Monitor, Type, Layout, Palette, Save } from 'lucide-react';
import CheckCircleIcon from '@/components/dashboard/appearance/CheckCircleIcon';
import ModeCard from '@/components/dashboard/appearance/ModeCard';
import ColorButton from '@/components/dashboard/appearance/ColorButton';
import ThemeCard from '@/components/dashboard/appearance/ThemeCard';

const Appearance: React.FC = () => {
  // State for interactivity
  const [activeTheme, setActiveTheme] = useState<'minimal' | 'magazine' | 'grid'>('minimal');
  const [accentColor, setAccentColor] = useState<string>('teal');
  const [fontPair, setFontPair] = useState<'serif' | 'sans'>('serif');
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('light');

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Appearance</h2>
          <p className="text-gray-500 mt-1">Customize how your blog looks and feels.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-full font-medium shadow-lg shadow-teal-200 hover:bg-teal-700 transition-all active:scale-95">
          <Save size={18} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* 1. Layout / Theme Selection */}
      <section className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><Layout size={20}/></div>
          <h3 className="text-lg font-semibold text-gray-800">Layout Design</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Minimal (Active) */}
          <ThemeCard 
            title="Minimal Standard" 
            isActive={activeTheme === 'minimal'} 
            onClick={() => setActiveTheme('minimal')}
          >
            {/* CSS Mockup for Minimal Layout */}
            <div className="flex flex-col h-full gap-2 p-1">
              <div className="h-2 w-1/3 bg-gray-200 rounded-sm mb-2"></div>
              <div className="flex-1 bg-gray-50 border border-dashed border-gray-200 rounded p-2 flex flex-col gap-2">
                 <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                 <div className="h-2 w-3/4 bg-gray-200 rounded-sm"></div>
                 <div className="h-16 w-full bg-gray-100 rounded-sm mt-1"></div>
              </div>
            </div>
          </ThemeCard>

          {/* Card: Magazine */}
          <ThemeCard 
            title="Classic Magazine" 
            isActive={activeTheme === 'magazine'} 
            onClick={() => setActiveTheme('magazine')}
          >
             <div className="flex h-full gap-2 p-1">
                <div className="w-1/3 h-full bg-gray-50 border border-dashed border-gray-200 rounded"></div>
                <div className="w-2/3 h-full flex flex-col gap-2">
                    <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                    <div className="h-20 w-full bg-gray-100 rounded-sm"></div>
                    <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
                </div>
             </div>
          </ThemeCard>

          {/* Card: Grid */}
          <ThemeCard
            title="Modern Grid" 
            isActive={activeTheme === 'grid'} 
            onClick={() => setActiveTheme('grid')}
          >
             <div className="grid grid-cols-2 gap-2 h-full p-1">
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded"></div>
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded"></div>
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded"></div>
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded"></div>
             </div>
          </ThemeCard>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 2. Colors & Mode */}
        <section className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
           
           {/* Accent Color */}
           <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Palette size={20}/></div>
                <h3 className="text-lg font-semibold text-gray-800">Primary Color</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                <ColorButton color="bg-teal-600" name="Teal" isSelected={accentColor === 'teal'} onClick={() => setAccentColor('teal')} />
                <ColorButton color="bg-blue-600" name="Ocean" isSelected={accentColor === 'blue'} onClick={() => setAccentColor('blue')} />
                <ColorButton color="bg-rose-500" name="Rose" isSelected={accentColor === 'rose'} onClick={() => setAccentColor('rose')} />
                <ColorButton color="bg-amber-500" name="Amber" isSelected={accentColor === 'amber'} onClick={() => setAccentColor('amber')} />
                <ColorButton color="bg-gray-900" name="Ink" isSelected={accentColor === 'black'} onClick={() => setAccentColor('black')} />
              </div>
           </div>

           <div className="h-px bg-gray-100"></div>

           {/* Dark Mode */}
           <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Monitor size={20}/></div>
                <h3 className="text-lg font-semibold text-gray-800">Interface Mode</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                  <ModeCard label="Light" icon={<Sun size={20}/>} isActive={mode === 'light'} onClick={() => setMode('light')} />
                  <ModeCard label="Dark" icon={<Moon size={20}/>} isActive={mode === 'dark'} onClick={() => setMode('dark')} />
                  <ModeCard label="System" icon={<Monitor size={20}/>} isActive={mode === 'system'} onClick={() => setMode('system')} />
              </div>
           </div>
        </section>

        {/* 3. Typography */}
        <section className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Type size={20}/></div>
                <h3 className="text-lg font-semibold text-gray-800">Typography</h3>
            </div>

            <div className="space-y-4">
                {/* Serif Option */}
                <div 
                    onClick={() => setFontPair('serif')}
                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all ${fontPair === 'serif' ? 'border-teal-500 bg-teal-50/30' : 'border-gray-100 hover:border-gray-200'}`}
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-1">Playfair Display</h4>
                            <p className="text-sm text-gray-500 font-sans">Paired with Inter for body text.</p>
                        </div>
                        {fontPair === 'serif' && <CheckCircleIcon />}
                    </div>
                    <p className="mt-4 text-gray-600 font-serif leading-relaxed text-sm">
                        "Typography is the art and technique of arranging type to make written language legible, readable, and appealing."
                    </p>
                </div>

                {/* Sans Option */}
                <div 
                    onClick={() => setFontPair('sans')}
                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all ${fontPair === 'sans' ? 'border-teal-500 bg-teal-50/30' : 'border-gray-100 hover:border-gray-200'}`}
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="text-2xl font-sans font-bold text-gray-900 mb-1">Plus Jakarta Sans</h4>
                            <p className="text-sm text-gray-500 font-sans">Paired with Roboto for body text.</p>
                        </div>
                        {fontPair === 'sans' && <CheckCircleIcon />}
                    </div>
                    <p className="mt-4 text-gray-600 font-sans leading-relaxed text-sm">
                        "Typography is the art and technique of arranging type to make written language legible, readable, and appealing."
                    </p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};



export default Appearance;
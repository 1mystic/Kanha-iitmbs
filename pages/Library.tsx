import React from 'react';

const Library: React.FC = () => {
  return (
    <div className="pt-24 bg-background-light dark:bg-background-dark min-h-screen">
      
      {/* Hero */}
      <header className="relative pt-20 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-enter">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        Academic Resources
                    </div>
                    <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight text-text-main-light dark:text-white">
                        THE <span className="text-primary relative inline-block">ARCHIVES</span> <br/> OF KANHA.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed border-l-4 border-primary pl-4">
                        Curated wisdom from generations of scholars. From handwritten lecture notes to advanced research tools, find everything you need to excel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="relative flex-grow max-w-md">
                            <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                            <input type="text" className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-0 transition shadow-sm dark:text-white" placeholder="Search for notes, books, or mentors..." />
                        </div>
                        <button className="bg-primary text-text-main-light font-display font-bold py-3 px-8 rounded-lg hover:bg-secondary hover:text-white transition shadow-lg">
                            Search
                        </button>
                    </div>
                </div>
                <div className="relative mt-8 lg:mt-0 lg:pl-12 animate-enter delay-200">
                    <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500 stamp-container">
                        <div className="bg-surface-light dark:bg-surface-dark p-3 stamp-edge shadow-xl">
                            <div className="relative h-[400px] w-full overflow-hidden bg-gray-200 border border-gray-100 dark:border-gray-800">
                                <img alt="Library Study" className="w-full h-full object-cover filter contrast-110 sepia-[0.1]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrKorNa3IXjWfkFoaN4j1OBROlxYvLMKa8SkCNSeTy3evybNeBtzTPLCzMpM13c4Lq3pxSYv-6udJ2iPNz_-OL3q2gLaYHajl0EvA5Dh_DIFPmMBfvRtPqbkYJqoAV_8NlqtSfW4mw79Fa-YZJYysFRJkakmhdSHoOgxXC871hEXwbVC9ESlgaRJtgulJpoSG3gb_SYZyt692iMjED6pGkqa8VRIwBWfE4Z8BQgbO4vQSnxBdn9P4fsHlbMVCBDtTx6YlOaarvUpo"/>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary text-xs font-bold px-2 py-1 rounded text-black">OPEN 24/7</div>
                                        <p className="text-white font-display font-bold text-xl tracking-wide">The Study Den</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Notes Section */}
      <section className="py-20 bg-white dark:bg-surface-dark relative border-t border-gray-100 dark:border-gray-800" id="notes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 animate-enter">
                <div>
                    <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Shared Knowledge</span>
                    <h2 className="font-display text-4xl font-bold text-text-main-light dark:text-white">Recent Notes</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { code: "PHYS 101", title: "Classical Mechanics: Midterm Review", date: "2 days ago", color: "text-blue-800 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-200", icon: "description" },
                    { code: "MATH 202", title: "Calculus III Cheat Sheet", date: "1 week ago", color: "text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-200", icon: "functions" },
                    { code: "HIST 150", title: "The Modern Era: Essay Guides", date: "3 days ago", color: "text-red-800 bg-red-100 dark:bg-red-900/50 dark:text-red-200", icon: "history_edu" }
                ].map((note, idx) => (
                    <div key={idx} className="group stamp-container bg-background-light dark:bg-[#252525] p-1 shadow-md hover:shadow-xl transition-all duration-300 animate-enter delay-100">
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 h-full p-6 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-8xl text-primary">{note.icon}</span>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <span className={`${note.color} text-xs font-bold px-2 py-1 rounded`}>{note.code}</span>
                                <span className="text-xs text-gray-400 font-mono">{note.date}</span>
                            </div>
                            <h3 className="font-display font-bold text-xl mb-2 text-text-main-light dark:text-white group-hover:text-secondary dark:group-hover:text-primary transition-colors">{note.title}</h3>
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button className="text-primary hover:text-secondary dark:hover:text-white"><span className="material-icons">download</span></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden" id="tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-enter">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Productivity</span>
                <h2 className="font-display text-4xl font-bold mt-2 text-text-main-light dark:text-white">Student Toolkit</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-enter delay-200">
                {[
                    { title: "Room Booking", icon: "meeting_room", color: "text-primary bg-primary/10" },
                    { title: "Cloud Print", icon: "print", color: "text-secondary bg-secondary/10 dark:text-red-400 dark:bg-red-900/20" },
                    { title: "Catalog", icon: "library_books", color: "text-tertiary bg-tertiary/10 dark:text-green-400 dark:bg-green-900/20" },
                    { title: "Citation", icon: "format_quote", color: "text-yellow-600 bg-yellow-500/10 dark:text-yellow-400 dark:bg-yellow-900/20" }
                ].map((tool, idx) => (
                    <a key={idx} href="#" className="group relative bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${tool.color}`}>
                            <span className="material-icons text-3xl">{tool.icon}</span>
                        </div>
                        <h3 className="font-display font-bold text-lg mb-1 text-text-main-light dark:text-white">{tool.title}</h3>
                    </a>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
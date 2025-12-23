import React from 'react';

const Bulletin: React.FC = () => {
  return (
    <div className="pt-24 bg-background-light dark:bg-background-dark min-h-screen">
      
      {/* Header */}
      <header className="relative pt-20 pb-16 overflow-hidden text-center animate-enter" id="bulletin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary dark:border-primary bg-surface-light dark:bg-surface-dark shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary">Live Updates: Semester 2, 2025</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black mb-4 text-secondary dark:text-white drop-shadow-sm">HOUSE BULLETIN</h1>
            
            {/* Daily Info Widget */}
            <div className="flex justify-center mt-10">
                <div className="bg-surface-light dark:bg-surface-dark p-1 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 inline-flex items-center gap-6 pr-8">
                    <div className="bg-primary text-background-dark p-4 rounded-lg font-display text-center min-w-[80px]">
                        <span className="block text-xs font-bold uppercase">Oct</span>
                        <span className="block text-3xl font-black leading-none">24</span>
                    </div>
                    <div className="text-left">
                        <div className="text-xs uppercase tracking-wide text-gray-500 font-bold mb-1">Today's Highlight</div>
                        <div className="font-display font-bold text-lg text-secondary dark:text-primary">House Dinner @ 7PM</div>
                    </div>
                    <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
                    <div className="text-left">
                        <div className="text-xs uppercase tracking-wide text-gray-500 font-bold mb-1">Weather</div>
                        <div className="flex items-center gap-1 font-bold text-gray-700 dark:text-gray-300">
                            <span className="material-icons-outlined text-sm">wb_sunny</span> 24°C
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Events Section */}
      <section className="py-20 bg-white dark:bg-[#151515] relative" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 dark:border-gray-800 pb-6 animate-enter">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-2">Upcoming Events</h2>
                    <p className="text-primary font-bold tracking-widest uppercase text-sm">Don't miss the roar</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Event */}
                <div className="lg:col-span-2 animate-enter delay-100">
                    <div className="stamp-container h-full group">
                        <div className="bg-background-light dark:bg-surface-dark p-3 stamp-edge h-full flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-gray-200">
                                <img alt="Annual Gala" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARsOIqrwTQGn7YQOhaBi778msngUNJ3YfAvGG5jyv3bWQd-i2o7gbqMhiwE4_aj8h0bOYCJ7umkMgVHnmyLeF4A8mcUvKfk173Ci36I_NoI4J2S3fsl1_eJN_Vs2FMRdAc3Gl3Zh-hrAW01Bx5akamZjV54ZmGO5cmTfPsEy6QFCbz8oR-TNwOK7dKxDAT3M4D4AGcvRuzYv99p-Y4Tp3w15zyLrDHjq_UfQzmIApGdbpFP6SBfdhuSvtEDnZfL0AXEuMoTEDKo0"/>
                                <div className="absolute top-0 left-0 bg-secondary text-white px-3 py-1 text-xs font-bold uppercase">Featured</div>
                            </div>
                            <div className="w-full md:w-1/2 py-4 pr-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-center border border-gray-300 dark:border-gray-600 rounded p-2 min-w-[60px]">
                                        <span className="block text-xs font-bold uppercase text-red-600 dark:text-red-400">Nov</span>
                                        <span className="block text-2xl font-display font-black text-secondary dark:text-white">15</span>
                                    </div>
                                    <div className="h-px flex-grow bg-gray-300 dark:bg-gray-700"></div>
                                    <span className="text-xs font-bold uppercase bg-primary/20 text-secondary dark:text-primary px-2 py-1 rounded">Social</span>
                                </div>
                                <h3 className="font-display text-3xl font-bold mb-3 group-hover:text-secondary dark:group-hover:text-primary transition-colors text-text-main-light dark:text-white">The Emerald Gala</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">Our biggest night of the year. Dress in your finest house colors and join us for a night of music, dance, and celebration.</p>
                                <button className="mt-6 w-full py-3 border-2 border-secondary dark:border-primary text-secondary dark:text-primary font-bold uppercase text-xs hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-colors">RSVP Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event List */}
                <div className="space-y-4 animate-enter delay-200">
                    {[
                        { date: "28", month: "Oct", title: "Inter-House Debate Finals", type: "Academic", color: "border-primary" },
                        { date: "02", month: "Nov", title: "Football vs. Crimson House", type: "Sports", color: "border-secondary" },
                        { date: "05", month: "Nov", title: "Community Cleanup Drive", type: "Service", color: "border-gray-400" }
                    ].map((evt, idx) => (
                        <div key={idx} className={`bg-surface-light dark:bg-surface-dark p-4 border-l-4 ${evt.color} shadow-sm hover:shadow-md transition-shadow`}>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center justify-center min-w-[50px]">
                                    <span className="text-xs font-bold uppercase text-gray-400">{evt.month}</span>
                                    <span className="text-2xl font-display font-bold text-gray-800 dark:text-white">{evt.date}</span>
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-lg leading-tight mb-1 text-text-main-light dark:text-white">{evt.title}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500">{evt.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* News Blog */}
      <section className="py-20 bg-background-light dark:bg-background-dark" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-enter">
                <span className="inline-block border-b-2 border-secondary dark:border-primary pb-1 font-display font-bold text-xl uppercase tracking-widest text-secondary dark:text-primary mb-2">The Jungle Telegraph</span>
                <h2 className="font-display text-5xl font-black text-text-main-light dark:text-text-main-dark">HOUSE NEWS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Tigers Claim the Cup: A Historic Cricket Victory", date: "Oct 22, 2025", cat: "Athletics", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9p0RSf2wxFbq_zjj-0-DvQbod2UJcFB4rjd9wdGzhuwDVhFS6wcqT29rt98x5J0F9Xv8LmgKyomz8YAseR44IZYFIPNjpu2OgYQHjLsEUOfJp1BRa923DcLeGZilIp_sqpPVQ84JXofZDXsCt6Bzlp3VZOUx4AtUn7-Rrqwxt0czgoPid1T47g25uohkgX05XQBWmB965iT3Zi1H5diN5WR7d9orB0mET8Sunqb3mCSXDHyMz-oo7TQBeXFjCnN4w75eG1D7nqr0", borderColor: "border-secondary" },
                    { title: "Library Renovation Complete: New Study Pods Open", date: "Oct 20, 2025", cat: "Facilities", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrKorNa3IXjWfkFoaN4j1OBROlxYvLMKa8SkCNSeTy3evybNeBtzTPLCzMpM13c4Lq3pxSYv-6udJ2iPNz_-OL3q2gLaYHajl0EvA5Dh_DIFPmMBfvRtPqbkYJqoAV_8NlqtSfW4mw79Fa-YZJYysFRJkakmhdSHoOgxXC871hEXwbVC9ESlgaRJtgulJpoSG3gb_SYZyt692iMjED6pGkqa8VRIwBWfE4Z8BQgbO4vQSnxBdn9P4fsHlbMVCBDtTx6YlOaarvUpo", borderColor: "border-primary" },
                    { title: "Council Elections: Meet Your Candidates", date: "Oct 18, 2025", cat: "Announcements", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKBpA9T7y7XqwDLBC2HFa3j4l29iMH9GlPVUQFybkJUb-ciTq5P-ZehvMHVzci1XIbQfbLy1hO6pRt4HnuO_buZiX-G60fIuQv5t6JwI1sTQxpjpEAkcRX1dFF-IkX_FWO4-bbe4QPRleI7Lt27ef2wwQY4x4w9otHisoSOP8IMIUHxcFBt2eJSFOwDWA8Hq_8bOASj8b6LQU63XquF_24tEKOs7XIo2_EF-u0jqFbYBZJHcZWDPSNLHAewDzjpjLl6Cl-_k9M6I", borderColor: "border-gray-800 dark:border-gray-600" },
                ].map((article, idx) => (
                    <article key={idx} className="flex flex-col h-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-enter delay-100">
                        <div className={`relative h-56 overflow-hidden border-b-4 ${article.borderColor}`}>
                            <img alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={article.img}/>
                            <div className="absolute bottom-2 left-2 bg-surface-light dark:bg-surface-dark px-2 py-1 text-xs font-bold uppercase tracking-wider text-text-main-light dark:text-white">{article.cat}</div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                <span className="material-icons text-sm">calendar_today</span> {article.date}
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-3 leading-tight hover:text-secondary dark:hover:text-primary transition-colors cursor-pointer text-text-main-light dark:text-white">
                                {article.title}
                            </h3>
                            <a href="#" className="inline-flex items-center text-sm font-bold text-secondary dark:text-primary uppercase tracking-wider hover:underline mt-auto">
                                Read Article <span className="material-icons text-sm ml-1">arrow_right_alt</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white dark:bg-[#151515] relative overflow-hidden" id="gallery">
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center mb-16 animate-enter">
                <span className="material-icons text-4xl text-primary mb-2">camera_alt</span>
                <h2 className="font-display text-5xl font-black text-center mb-4 text-text-main-light dark:text-white">MOMENTS IN TIME</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-enter delay-200">
                {[
                    { title: "Our Inspiration", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz4DubmZhp6UMiR0-2PfvddIXlQAOrMsgNojfpgHL3-rbl6FTV4t_m2bjWPoGItC-v-c3DPs-dNAZg8WYwoWqKbgCpn4glIrhq3945i-EI9lD035BaIIVAdnblBLNajWyTNM3EBa_LeH-ZUopgPTNieFYSvU8yYaKp_rIeUbLcbtr_AbQVVdee0iaVlbndAZb-39C1viBb_cJCiWQis8FLh-O2Uzws5KcuiNl4R9QKX_VYqknE8JQCQ_I87RLkOUqTqsF5X-_MxHU", rot: "rotate-2" },
                    { title: "Clean Up Drive 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABOst5IkIQGohNAiPwk2h-PW9WANG1vK2_5nUSYEyQAoBROFFqJC1ApJhXgPoSCJ_n0twsPtusA7Lt4PVZGk_cdjP7nf2rA4XI5lsHQrhH42WH5ieen4kIZwnjuTm3T4RrlAWqvx5i-iYGzEaRl3Y1c0aJTvbUPdWc1ZbLElayV62Aj5NSeri0a-xMUCgQHebzEOgCqt7_0ZD9VPbrgv1K1zqgtPGxXIrBsCX-XOlpznvqtoZedsMGFdr3NYKYkMosrV3PFcyPoJA", rot: "-rotate-1" },
                    { title: "Cultural Night", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAARsOIqrwTQGn7YQOhaBi778msngUNJ3YfAvGG5jyv3bWQd-i2o7gbqMhiwE4_aj8h0bOYCJ7umkMgVHnmyLeF4A8mcUvKfk173Ci36I_NoI4J2S3fsl1_eJN_Vs2FMRdAc3Gl3Zh-hrAW01Bx5akamZjV54ZmGO5cmTfPsEy6QFCbz8oR-TNwOK7dKxDAT3M4D4AGcvRuzYv99p-Y4Tp3w15zyLrDHjq_UfQzmIApGdbpFP6SBfdhuSvtEDnZfL0AXEuMoTEDKo0", rot: "rotate-3" }
                ].map((photo, idx) => (
                    <div key={idx} className="break-inside-avoid">
                        <div className={`bg-white p-3 shadow-xl transform ${photo.rot} hover:rotate-0 transition-transform duration-300 relative group`}>
                            <img alt={photo.title} className="w-full h-auto filter sepia-[.3] group-hover:sepia-0 transition-all duration-500" src={photo.img}/>
                            <div className="mt-3 text-center font-display text-gray-800 text-sm font-bold pb-2">{photo.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Bulletin;
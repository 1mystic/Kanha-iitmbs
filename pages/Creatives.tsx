import React from 'react';

const Creatives: React.FC = () => {
    return (
        <div className="pt-24 bg-paper-light dark:bg-paper-dark min-h-screen">

            {/* Hero */}
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 skew-y-6 transform origin-bottom-left"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-enter">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 dark:border-primary/30 text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                                <span className="material-icons text-sm">brush</span>
                                The Art of the Jungle
                            </div>
                            <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight text-text-main-light dark:text-white">
                                UNLEASH YOUR <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:to-primary relative inline-block">
                                    CREATIVE ROAR
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed border-l-4 border-primary pl-6">
                                From digital masterpieces to handwritten prose, Kanha House celebrates the artistic spirit of every member. Explore the gallery of our pride.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="#gallery" className="bg-text-main-light dark:bg-primary text-white dark:text-accent font-display font-bold py-3 px-8 rounded shadow-lg hover:bg-primary dark:hover:bg-white transition-colors flex items-center gap-2">
                                    Explore Gallery <span className="material-icons text-sm">arrow_downward</span>
                                </a>
                                <a href="#submit" className="border-2 border-text-main-light dark:border-primary text-text-main-light dark:text-primary font-display font-bold py-3 px-8 rounded hover:bg-text-main-light hover:text-white dark:hover:bg-primary dark:hover:text-accent transition-colors">
                                    Submit Piece
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative perspective-1000 animate-enter delay-200">
                            <div className="absolute -top-12 -right-12 text-9xl text-primary/10 font-display font-black select-none z-0">ART</div>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="stamp-container transform translate-y-8">
                                    <div className="bg-white dark:bg-surface-dark p-2 stamp-edge">
                                        <img alt="Art Piece" className="w-full h-48 object-cover filter contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARsOIqrwTQGn7YQOhaBi778msngUNJ3YfAvGG5jyv3bWQd-i2o7gbqMhiwE4_aj8h0bOYCJ7umkMgVHnmyLeF4A8mcUvKfk173Ci36I_NoI4J2S3fsl1_eJN_Vs2FMRdAc3Gl3Zh-hrAW01Bx5akamZjV54ZmGO5cmTfPsEy6QFCbz8oR-TNwOK7dKxDAT3M4D4AGcvRuzYv99p-Y4Tp3w15zyLrDHjq_UfQzmIApGdbpFP6SBfdhuSvtEDnZfL0AXEuMoTEDKo0" />
                                    </div>
                                </div>
                                <div className="stamp-container">
                                    <div className="bg-white dark:bg-surface-dark p-2 stamp-edge">
                                        <img alt="Photography" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrKorNa3IXjWfkFoaN4j1OBROlxYvLMKa8SkCNSeTy3evybNeBtzTPLCzMpM13c4Lq3pxSYv-6udJ2iPNz_-OL3q2gLaYHajl0EvA5Dh_DIFPmMBfvRtPqbkYJqoAV_8NlqtSfW4mw79Fa-YZJYysFRJkakmhdSHoOgxXC871hEXwbVC9ESlgaRJtgulJpoSG3gb_SYZyt692iMjED6pGkqa8VRIwBWfE4Z8BQgbO4vQSnxBdn9P4fsHlbMVCBDtTx6YlOaarvUpo" />
                                    </div>
                                </div>
                                <div className="col-span-2 stamp-container mt-4">
                                    <div className="bg-background-light dark:bg-surface-dark p-6 stamp-edge relative overflow-hidden">
                                        <p className="font-display font-bold text-xl mb-2 text-text-main-light dark:text-white">"The tiger does not shout its tigritude, it acts."</p>
                                        <p className="font-serif italic text-sm text-gray-600 dark:text-gray-400">— Wole Soyinka (Adapted)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-white dark:bg-[#151515]" id="gallery">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-enter">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Kanha Showcase</span>
                            <h2 className="font-display text-4xl font-bold mt-2 text-text-main-light dark:text-white">Latest Creations</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { title: "Jungle Rhythms", artist: "Sarah Jenkins, '25", type: "Visual", icon: "palette", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAARsOIqrwTQGn7YQOhaBi778msngUNJ3YfAvGG5jyv3bWQd-i2o7gbqMhiwE4_aj8h0bOYCJ7umkMgVHnmyLeF4A8mcUvKfk173Ci36I_NoI4J2S3fsl1_eJN_Vs2FMRdAc3Gl3Zh-hrAW01Bx5akamZjV54ZmGO5cmTfPsEy6QFCbz8oR-TNwOK7dKxDAT3M4D4AGcvRuzYv99p-Y4Tp3w15zyLrDHjq_UfQzmIApGdbpFP6SBfdhuSvtEDnZfL0AXEuMoTEDKo0" },
                            { title: "Golden Hour Watch", artist: "Raj Patel, '24", type: "Photo", icon: "photo_camera", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz4DubmZhp6UMiR0-2PfvddIXlQAOrMsgNojfpgHL3-rbl6FTV4t_m2bjWPoGItC-v-c3DPs-dNAZg8WYwoWqKbgCpn4glIrhq3945i-EI9lD035BaIIVAdnblBLNajWyTNM3EBa_LeH-ZUopgPTNieFYSvU8yYaKp_rIeUbLcbtr_AbQVVdee0iaVlbndAZb-39C1viBb_cJCiWQis8FLh-O2Uzws5KcuiNl4R9QKX_VYqknE8JQCQ_I87RLkOUqTqsF5X-_MxHU" },
                            { title: "Echoes of the Hall", artist: "Emily Chen", type: "Poetry", icon: "auto_stories", text: "The footsteps resonate not just on the floorboards, but in the memories of those who walked before us..." }
                        ].map((item, idx) => (
                            <div key={idx} className="stamp-container group animate-enter delay-100">
                                {item.img ? (
                                    <div className="bg-background-light dark:bg-surface-dark p-3 stamp-edge h-full flex flex-col">
                                        <div className="relative h-64 overflow-hidden bg-gray-200 mb-4 border border-gray-900/10 dark:border-white/10">
                                            <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.img} />
                                        </div>
                                        <div className="px-2 flex justify-between items-start">
                                            <div>
                                                <h3 className="font-display font-bold text-lg leading-tight mb-1 text-text-main-light dark:text-white">{item.title}</h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">By {item.artist}</p>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <span className="material-icons text-sm">{item.icon}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-[#F9F5E3] p-6 stamp-edge h-full flex flex-col relative overflow-hidden">
                                        <div className="flex-grow flex flex-col justify-center text-center relative z-10">
                                            <span className="material-icons text-3xl text-secondary/30 mb-4 mx-auto">{item.icon}</span>
                                            <h3 className="font-display font-bold text-2xl text-secondary mb-2">"{item.title}"</h3>
                                            <div className="w-12 h-1 bg-secondary/20 mx-auto mb-4"></div>
                                            <p className="font-serif italic text-gray-800 text-sm leading-relaxed line-clamp-4">{item.text}</p>
                                        </div>
                                        <div className="mt-6 pt-4 border-t border-secondary/10 flex justify-between items-center relative z-10">
                                            <span className="text-xs font-bold text-secondary uppercase">{item.artist}</span>
                                            <span className="text-[10px] font-bold text-secondary/60 uppercase">{item.type}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submission Form */}
            <section className="py-24 relative overflow-hidden bg-background-light dark:bg-surface-dark" id="submit">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 animate-enter">
                    <div className="bg-surface-light dark:bg-background-dark shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-secondary p-8 flex flex-col justify-between relative overflow-hidden text-white">
                            <div>
                                <span className="material-icons text-4xl mb-4 text-primary">cloud_upload</span>
                                <h3 className="font-display font-bold text-3xl uppercase leading-none mb-2">Submit<br />Your<br />Work</h3>
                                <p className="text-white/70 text-sm mt-4">Share your creativity with the house. Selected works are featured in the monthly newsletter and annual yearbook.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 p-8 md:p-12 relative">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Contributor Name</label>
                                        <input type="text" className="w-full bg-background-light dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded focus:border-primary focus:ring-primary dark:text-white p-3" placeholder="Jane Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Year / Role</label>
                                        <select className="w-full bg-background-light dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded focus:border-primary focus:ring-primary dark:text-white p-3">
                                            <option>Class of 2024</option>
                                            <option>Class of 2025</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" className="w-full bg-primary hover:bg-secondary text-background-dark hover:text-white font-display font-bold py-3 rounded shadow-lg transition-all transform hover:-translate-y-1">
                                    SUBMIT CREATION
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Creatives;
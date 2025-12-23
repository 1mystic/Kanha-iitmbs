import React from 'react';

const Achievements: React.FC = () => {
  return (
    <div className="pt-24 bg-background-light dark:bg-background-dark min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-paper-texture z-0 mix-blend-multiply dark:mix-blend-overlay"></div>
      
      {/* Header */}
      <header className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden  dark:bg-background-dark border-b border-primary/20">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-enter">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-8 backdrop-blur-sm">
                <span className="material-icons text-xs text-primary">emoji_events</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Hall of Glory</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-text-main-light dark:text-white">
                LEGACY OF <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F5E6C8] to-primary drop-shadow-sm">TRIUMPH</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                Documenting the victories, records, and milestones that define the spirit of Kanha House. Every roar echoes our commitment to excellence.
            </p>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-enter delay-200">
                {[
                    { val: "127", label: "Total Trophies" },
                    { val: "#1", label: "Academic Rank" },
                    { val: "50+", label: "Record Holders" },
                    { val: "2024", label: "Best House Year" }
                ].map((stat, idx) => (
                    <div key={idx} className="bg-surface-light dark:bg-surface-dark p-4 border-t-4 border-primary shadow-sm">
                        <div className="text-3xl font-display font-bold text-secondary dark:text-primary">{stat.val}</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </header>

      {/* Top Achievers */}
      <section className="py-20 bg-background-light dark:bg-surface-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-enter">
                <div>
                    <h2 className="font-display text-4xl font-bold mb-2 text-secondary dark:text-white">Top Achievers</h2>
                    <p className="text-gray-600 dark:text-gray-400">Celebrating the students who led the pack this semester.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "Sarah Jenkins", role: "House Captain", quote: "Led the house to victory in the Inter-House Debate Championship and maintained a 4.0 GPA.", class: "2025", dept: "Law", icon: "star", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfLcsdq9PfsqAKHdS7Pz9Du2xD3r-km2ZBE55zcj-OFYUnVyhXjijiivsymISMC7p58CD3ncBrIVGVveMKvWklTo-gjk2vJUzMx9BBnMLodNU93MgKnRGFGYs2l5YW086HRejRLyzevjWMS_ZDtCZUiVOV9eV0ivCqvO7XtcfXJYYMUi744lphdozFKAOLjgfvgloSbFT0Mzu54cb1wBnprIaBaR1pDL_NaBDIVwpzqXgmVYdFg623JHfiNBba2xzcTVvJJgg2WX8" },
                    { name: "Marcus Chen", role: "Sports Secretary", quote: "Broke the university record for the 100m sprint and organized the charity marathon.", class: "2024", dept: "Athletics", icon: "emoji_events", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2-B9hLoFi_oKDSOuVuZ2g3NoxXeiF8-0akkY8Us37TTezsKTiFaNOjpW3BWWqmukpjhPBHudIEx0gCL-8eZOTg1N915b6TB8F0DP6C-oOMqK6LsuVxxhmjQlFe1-jEBjLJNFeV32KfMl8E2tBHpFIPEbUTWBfKau7oAYeTqMBg3jJoBtrdH98PgsD94kfDXeGkHbNtdGGKXL1SMg8402tvvLhY6MpRa0WsKOTihDJ7_afAKe0yBshz5cLhINyzTzuFQJ84nJ5-0o" },
                    { name: "Priya Patel", role: "Cultural Lead", quote: "Directed the annual house play 'The Jungle Book', winning Best Production.", class: "2026", dept: "Fine Arts", icon: "palette", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH5DiaXa2v1BaXPgKw0PMzAv1PTecx5DeMegmUS5G165MOLRt6rV5ILrEdNJq5K0_yWJYh7glJakWVGNw4W4fzJcFw92DFYvMBVi-HQrLLbvzyVoSQO62XtuAWfZsK73mVDYc1_C41nc73tHz_8xltTpf2iQHma_pBiLAPDrtRXWU8E_0zbL9e0D5hlvi_Gpgq__h51SVr6B5DVfPMJxJBCsB7tmRzyT_kRar4wGpLdhzGAMG08LHR-L15lhKo3tL5l5sjnI298j0" }
                ].map((student, index) => (
                    <div key={index} className={`stamp-container group animate-enter ${index === 1 ? 'mt-8 lg:mt-0 delay-100' : index === 2 ? 'delay-200' : ''}`}>
                        <div className="bg-white dark:bg-[#222] p-2 stamp-edge h-full flex flex-col">
                            <div className="relative h-64 overflow-hidden bg-gray-200">
                                <img alt={student.name} className="w-full h-full object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500" src={student.img}/>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                                    <span className="text-white font-display font-bold text-xl">{student.name}</span>
                                    <p className="text-primary text-xs uppercase tracking-widest">{student.role}</p>
                                </div>
                                <div className="absolute top-2 right-2 bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
                                    <span className="material-icons text-sm">{student.icon}</span>
                                </div>
                            </div>
                            <div className="p-6 bg-paper-texture relative flex-grow">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full border-4 border-white dark:border-[#222]"></div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-4 text-center">"{student.quote}"</p>
                                <div className="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-auto">
                                    <div className="flex justify-between items-center text-xs font-bold uppercase text-gray-500">
                                        <span>Class of {student.class}</span>
                                        <span className="text-primary">{student.dept}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Trophy Cabinet */}
      <section className="py-24 dark:bg-background-dark overflow-hidden relative" id="trophy-cabinet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-enter">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Our Pride</span>
                <h2 className="font-display text-4xl md:text-5xl font-black mt-2 mb-6 text-secondary dark:text-white">The Trophy Cabinet</h2>
                <div className="w-24 h-1 bg-secondary dark:bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                    { title: "House Cup", sub: "2023, 2024", icon: "emoji_events", color: "text-yellow-700", bg: "from-yellow-100 to-yellow-200" },
                    { title: "Football League", sub: "Champions", icon: "sports_soccer", color: "text-gray-600", bg: "from-gray-100 to-gray-300" },
                    { title: "Drama Fest", sub: "Best Play", icon: "theater_comedy", color: "text-orange-700", bg: "from-orange-100 to-orange-200" },
                    { title: "Quiz Bowl", sub: "Regional Gold", icon: "psychology", color: "text-blue-700", bg: "from-blue-100 to-blue-200" },
                    { title: "Green Award", sub: "Eco-Excellence", icon: "volunteer_activism", color: "text-green-700", bg: "from-green-100 to-green-200" },
                ].map((trophy, idx) => (
                    <div key={idx} className="group flex flex-col items-center p-6 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 rounded-lg animate-enter delay-100">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${trophy.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <span className={`material-icons text-3xl ${trophy.color}`}>{trophy.icon}</span>
                        </div>
                        <h3 className="font-display font-bold text-center text-sm mb-1 text-text-main-light dark:text-white">{trophy.title}</h3>
                        <p className="text-xs text-gray-500 uppercase">{trophy.sub}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Records & Archives */}
      <section className="py-20 bg-secondary text-white relative">
        <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-10 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz4DubmZhp6UMiR0-2PfvddIXlQAOrMsgNojfpgHL3-rbl6FTV4t_m2bjWPoGItC-v-c3DPs-dNAZg8WYwoWqKbgCpn4glIrhq3945i-EI9lD035BaIIVAdnblBLNajWyTNM3EBa_LeH-ZUopgPTNieFYSvU8yYaKp_rIeUbLcbtr_AbQVVdee0iaVlbndAZb-39C1viBb_cJCiWQis8FLh-O2Uzws5KcuiNl4R9QKX_VYqknE8JQCQ_I87RLkOUqTqsF5X-_MxHU"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="animate-enter">
                    <h2 className="font-display text-4xl font-black mb-8 border-b border-primary/30 pb-4 inline-block">
                        House Records
                    </h2>
                    <div className="space-y-6">
                        {[
                            { id: "01", title: "Highest Cumulative GPA", desc: "Fall Semester 2023 - 3.8 Average" },
                            { id: "02", title: "Donation Drive Record", desc: "$15,000 Raised for Local Shelters (2022)" },
                            { id: "03", title: "Inter-House Sports Streak", desc: "Undefeated in Basketball for 5 Seasons" }
                        ].map((rec, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition">
                                <span className="font-display text-4xl font-bold text-primary opacity-50">{rec.id}</span>
                                <div>
                                    <h4 className="font-bold text-lg">{rec.title}</h4>
                                    <p className="text-sm text-gray-300">{rec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative animate-enter delay-200">
                    <div className="stamp-container transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-primary p-2 stamp-edge">
                            <div className="bg-background-light dark:bg-background-dark p-6 text-center border-2 border-dashed border-secondary/20 h-full flex flex-col justify-center items-center">
                                <span className="material-icons text-6xl text-secondary dark:text-primary mb-4">history_edu</span>
                                <h3 className="font-display text-2xl font-bold text-secondary dark:text-primary mb-2">ARCHIVES</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 max-w-xs">
                                    Want to see who lifted the cup in 2015? Or explore the legendary debate of '18? Our digital archives are open to all members.
                                </p>
                                <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded shadow-md transition">
                                    ACCESS VAULT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
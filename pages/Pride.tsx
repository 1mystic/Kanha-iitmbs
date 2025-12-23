import React from 'react';

const Pride: React.FC = () => {
  return (
    <div className="pt-24 bg-background-light dark:bg-background-dark min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-enter">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-xs font-bold uppercase tracking-[0.2em] text-secondary dark:text-primary mb-6">
              <span className="material-icons text-sm">stars</span>
              The Pride of Kanha
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight mb-6 text-text-main-light dark:text-white">
              LEADERS. <span className="text-secondary dark:text-primary">LEGENDS.</span> LEGACY.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
               Meet the torchbearers of the Kanha spirit. From the current Council guiding our path to the alumni who have left their mark on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Council Section */}
      <section className="py-24 bg-surface-light dark:bg-[#151515] relative" id="council">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-enter">
                <span className="text-secondary dark:text-primary font-bold tracking-[0.3em] uppercase text-xs">Leadership 2024-2025</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black mt-3 mb-6 text-text-main-light dark:text-white">THE HOUSE COUNCIL</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                {[
                    { name: "Sarah Jenkins", role: "President", class: "'25", major: "Political Science", quote: "Unity is our strength. We roar as one.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH5DiaXa2v1BaXPgKw0PMzAv1PTecx5DeMegmUS5G165MOLRt6rV5ILrEdNJq5K0_yWJYh7glJakWVGNw4W4fzJcFw92DFYvMBVi-HQrLLbvzyVoSQO62XtuAWfZsK73mVDYc1_C41nc73tHz_8xltTpf2iQHma_pBiLAPDrtRXWU8E_0zbL9e0D5hlvi_Gpgq__h51SVr6B5DVfPMJxJBCsB7tmRzyT_kRar4wGpLdhzGAMG08LHR-L15lhKo3tL5l5sjnI298j0", badgeColor: "bg-secondary" },
                    { name: "Marcus Chen", role: "Vice President", class: "'26", major: "Engineering", quote: "Building bridges within our community.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2-B9hLoFi_oKDSOuVuZ2g3NoxXeiF8-0akkY8Us37TTezsKTiFaNOjpW3BWWqmukpjhPBHudIEx0gCL-8eZOTg1N915b6TB8F0DP6C-oOMqK6LsuVxxhmjQlFe1-jEBjLJNFeV32KfMl8E2tBHpFIPEbUTWBfKau7oAYeTqMBg3jJoBtrdH98PgsD94kfDXeGkHbNtdGGKXL1SMg8402tvvLhY6MpRa0WsKOTihDJ7_afAKe0yBshz5cLhINyzTzuFQJ84nJ5-0o", badgeColor: "bg-primary text-black" },
                    { name: "Priya Patel", role: "Secretary", class: "'25", major: "Literature", quote: "Recording our history, one day at a time.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfLcsdq9PfsqAKHdS7Pz9Du2xD3r-km2ZBE55zcj-OFYUnVyhXjijiivsymISMC7p58CD3ncBrIVGVveMKvWklTo-gjk2vJUzMx9BBnMLodNU93MgKnRGFGYs2l5YW086HRejRLyzevjWMS_ZDtCZUiVOV9eV0ivCqvO7XtcfXJYYMUi744lphdozFKAOLjgfvgloSbFT0Mzu54cb1wBnprIaBaR1pDL_NaBDIVwpzqXgmVYdFg623JHfiNBba2xzcTVvJJgg2WX8", badgeColor: "bg-gray-800" }
                ].map((member, index) => (
                    <div key={index} className={`group relative animate-enter ${index === 1 ? 'md:mt-12 delay-200' : index === 2 ? 'delay-300' : 'delay-100'}`}>
                        <div className="stamp-container">
                            <div className="bg-white dark:bg-surface-dark p-2 stamp-edge h-full">
                                <div className="relative h-80 overflow-hidden mb-4 bg-gray-200 border-b-2 border-primary">
                                    <img alt={member.role} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src={member.img} />
                                    <div className={`absolute bottom-0 left-0 ${member.badgeColor} text-white px-4 py-1 font-display font-bold text-sm tracking-widest uppercase`}>{member.role}</div>
                                </div>
                                <div className="px-2 pb-2 text-center">
                                    <h3 className="font-display font-bold text-2xl mb-1 text-text-main-light dark:text-white">{member.name}</h3>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Class of {member.class} • {member.major}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">"{member.quote}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-24 bg-accent text-white relative overflow-hidden" id="alumni">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 animate-enter">
                <div>
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block mb-2">Hall of Fame</span>
                    <h2 className="font-display text-4xl lg:text-6xl font-black text-white">NOTABLE ALUMNI</h2>
                </div>
                <div className="mt-6 md:mt-0 flex gap-4">
                    <div className="text-right">
                        <div className="font-display text-3xl font-bold text-primary">500+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400">Graduates</div>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="text-right">
                        <div className="font-display text-3xl font-bold text-primary">12</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400">Countries</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-8 animate-enter delay-100">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm hover:border-primary/50 transition duration-300">
                        <div className="flex items-start gap-4">
                            <span className="material-icons text-4xl text-primary">format_quote</span>
                            <div>
                                <p className="font-display text-xl leading-relaxed mb-6 italic text-gray-300">
                                    "Kanha House taught me that leadership isn't about being the loudest in the room, but about having the courage to stand up for your pack. The lessons I learned here serve me every day in the corporate world."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden border-2 border-primary">
                                        <img alt="Alumni" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-B9hLoFi_oKDSOuVuZ2g3NoxXeiF8-0akkY8Us37TTezsKTiFaNOjpW3BWWqmukpjhPBHudIEx0gCL-8eZOTg1N915b6TB8F0DP6C-oOMqK6LsuVxxhmjQlFe1-jEBjLJNFeV32KfMl8E2tBHpFIPEbUTWBfKau7oAYeTqMBg3jJoBtrdH98PgsD94kfDXeGkHbNtdGGKXL1SMg8402tvvLhY6MpRa0WsKOTihDJ7_afAKe0yBshz5cLhINyzTzuFQJ84nJ5-0o"/>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white font-display uppercase tracking-wide">David Okonjo</h4>
                                        <p className="text-xs text-primary font-bold">Class of 2015 • CEO, TechStream</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 animate-enter delay-200">
                     <div className="stamp-container">
                        <div className="bg-white p-2 stamp-edge transform rotate-2">
                            <div className="relative h-[400px] overflow-hidden bg-gray-800 border-2 border-dashed border-gray-400">
                                <img alt="Alumni Event" className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9p0RSf2wxFbq_zjj-0-DvQbod2UJcFB4rjd9wdGzhuwDVhFS6wcqT29rt98x5J0F9Xv8LmgKyomz8YAseR44IZYFIPNjpu2OgYQHjLsEUOfJp1BRa923DcLeGZilIp_sqpPVQ84JXofZDXsCt6Bzlp3VZOUx4AtUn7-Rrqwxt0czgoPid1T47g25uohkgX05XQBWmB965iT3Zi1H5diN5WR7d9orB0mET8Sunqb3mCSXDHyMz-oo7TQBeXFjCnN4w75eG1D7nqr0"/>
                                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                                    <span className="font-display font-bold text-2xl text-white">HOMECOMING 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="history">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 animate-enter">
                    <span className="text-secondary dark:text-primary font-bold tracking-[0.3em] uppercase text-xs mb-2 block">Since 2012</span>
                    <h2 className="font-display text-4xl font-black mb-8 text-text-main-light dark:text-white">THE ROOTS OF KANHA</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-light">
                        Founded on the principles of wildlife conservation and community strength, Kanha House was established to bring a sense of the wild to campus life.
                    </p>
                    <ul className="space-y-6 mt-8 border-l-2 border-primary/30 pl-6 ml-2">
                        {[
                            { year: "2012", desc: "Kanha House is officially founded.", color: "bg-secondary" },
                            { year: "2015", desc: "First Inter-House Championship Victory.", color: "bg-primary" },
                            { year: "2024", desc: "Dedicated house library opened.", color: "bg-gray-400" }
                        ].map((item, idx) => (
                            <li key={idx} className="relative">
                                <span className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full ${item.color} border-4 border-background-light dark:border-background-dark`}></span>
                                <h4 className="font-display font-bold text-xl text-text-main-light dark:text-white">{item.year}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:col-span-7 relative animate-enter delay-200">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="space-y-4 mt-12">
                             <div className="stamp-container">
                                <div className="bg-white dark:bg-surface-dark p-2 stamp-edge">
                                    <img alt="Library" className="w-full h-48 object-cover filter sepia-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrKorNa3IXjWfkFoaN4j1OBROlxYvLMKa8SkCNSeTy3evybNeBtzTPLCzMpM13c4Lq3pxSYv-6udJ2iPNz_-OL3q2gLaYHajl0EvA5Dh_DIFPmMBfvRtPqbkYJqoAV_8NlqtSfW4mw79Fa-YZJYysFRJkakmhdSHoOgxXC871hEXwbVC9ESlgaRJtgulJpoSG3gb_SYZyt692iMjED6pGkqa8VRIwBWfE4Z8BQgbO4vQSnxBdn9P4fsHlbMVCBDtTx6YlOaarvUpo"/>
                                    <div className="p-2 text-center font-display font-bold text-xs uppercase tracking-widest text-gray-500">Our Sanctuary</div>
                                </div>
                            </div>
                            <div className="bg-primary/10 p-6 rounded border border-primary/20">
                                <span className="material-icons text-4xl text-secondary dark:text-primary mb-2">auto_stories</span>
                                <h4 className="font-display font-bold text-lg mb-2 text-text-main-light dark:text-white">The Charter</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">"To protect, to serve, and to lead with the quiet confidence of the jungle's king."</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-secondary text-white p-6 rounded shadow-lg">
                                <h4 className="font-display font-bold text-2xl mb-1">1,250</h4>
                                <p className="text-xs uppercase tracking-widest opacity-80">Days of Tradition</p>
                            </div>
                            <div className="stamp-container">
                                <div className="bg-white dark:bg-surface-dark p-2 stamp-edge">
                                    <img alt="Culture" className="w-full h-64 object-cover filter sepia-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARsOIqrwTQGn7YQOhaBi778msngUNJ3YfAvGG5jyv3bWQd-i2o7gbqMhiwE4_aj8h0bOYCJ7umkMgVHnmyLeF4A8mcUvKfk173Ci36I_NoI4J2S3fsl1_eJN_Vs2FMRdAc3Gl3Zh-hrAW01Bx5akamZjV54ZmGO5cmTfPsEy6QFCbz8oR-TNwOK7dKxDAT3M4D4AGcvRuzYv99p-Y4Tp3w15zyLrDHjq_UfQzmIApGdbpFP6SBfdhuSvtEDnZfL0AXEuMoTEDKo0"/>
                                    <div className="p-2 text-center font-display font-bold text-xs uppercase tracking-widest text-gray-500">Our Spirit</div>
                                </div>
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

export default Pride;
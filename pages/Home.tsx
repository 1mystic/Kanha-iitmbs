import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <header className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden z-10" id="about">
        <div className="absolute top-20 right-0 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] text-secondary dark:text-primary">verified</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative animate-enter">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-surface-dark border-2 border-primary/40 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-primary">Est. 2012 • The Jungle</span>
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-black leading-[0.9]">
                <span className="text-secondary dark:text-white block mb-2">ROAR WITH</span>
                <span className="text-primary relative inline-block">
                  PRIDE
                  <svg className="absolute w-[110%] h-4 -bottom-2 -left-2 text-secondary dark:text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
                  </svg>
                </span>
                <br />
                <span className="text-accent dark:text-gray-300 text-4xl lg:text-6xl mt-2 block">LIVE THE LEGACY.</span>
              </h1>
              <p className="text-lg font-body text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed border-l-4 border-primary pl-4">
                Inspired by the majestic tigers of Kanha National Park, we are more than a dormitory. We are a brotherhood, a sisterhood, and a force of nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link to="/pride" className="bg-secondary text-white font-display font-bold py-3.5 px-8 rounded-lg shadow-lg hover:bg-secondary/90 transition-all transform hover:-translate-y-1 relative overflow-hidden group inline-flex justify-center items-center">
                  <span className="relative z-10 flex items-center gap-2">Explore House <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                <div className="flex items-center gap-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-2 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex -space-x-3 pl-2">
                    <img alt="Member" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH5DiaXa2v1BaXPgKw0PMzAv1PTecx5DeMegmUS5G165MOLRt6rV5ILrEdNJq5K0_yWJYh7glJakWVGNw4W4fzJcFw92DFYvMBVi-HQrLLbvzyVoSQO62XtuAWfZsK73mVDYc1_C41nc73tHz_8xltTpf2iQHma_pBiLAPDrtRXWU8E_0zbL9e0D5hlvi_Gpgq__h51SVr6B5DVfPMJxJBCsB7tmRzyT_kRar4wGpLdhzGAMG08LHR-L15lhKo3tL5l5sjnI298j0"/>
                    <img alt="Member" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-B9hLoFi_oKDSOuVuZ2g3NoxXeiF8-0akkY8Us37TTezsKTiFaNOjpW3BWWqmukpjhPBHudIEx0gCL-8eZOTg1N915b6TB8F0DP6C-oOMqK6LsuVxxhmjQlFe1-jEBjLJNFeV32KfMl8E2tBHpFIPEbUTWBfKau7oAYeTqMBg3jJoBtrdH98PgsD94kfDXeGkHbNtdGGKXL1SMg8402tvvLhY6MpRa0WsKOTihDJ7_afAKe0yBshz5cLhINyzTzuFQJ84nJ5-0o"/>
                    <img alt="Member" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfLcsdq9PfsqAKHdS7Pz9Du2xD3r-km2ZBE55zcj-OFYUnVyhXjijiivsymISMC7p58CD3ncBrIVGVveMKvWklTo-gjk2vJUzMx9BBnMLodNU93MgKnRGFGYs2l5YW086HRejRLyzevjWMS_ZDtCZUiVOV9eV0ivCqvO7XtcfXJYYMUi744lphdozFKAOLjgfvgloSbFT0Mzu54cb1wBnprIaBaR1pDL_NaBDIVwpzqXgmVYdFg623JHfiNBba2xzcTVvJJgg2WX8"/>
                  </div>
                  <div className="pr-4">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Current Residents</p>
                    <p className="text-lg font-bold text-secondary dark:text-primary leading-none">500+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0 perspective-1000 animate-enter delay-300">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-float"></div>
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                <div className="tape w-32 h-8 absolute -top-4 left-1/2 -translate-x-1/2 z-20"></div>
                <div className="bg-white dark:bg-surface-dark p-3 stamp-edge shadow-2xl">
                  <div className="relative h-[480px] w-full overflow-hidden bg-gray-100 dark:bg-gray-800 group">
                    <img alt="Tiger in Kanha National Park" className="w-full h-full object-cover filter sepia-[0.2] contrast-110 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz4DubmZhp6UMiR0-2PfvddIXlQAOrMsgNojfpgHL3-rbl6FTV4t_m2bjWPoGItC-v-c3DPs-dNAZg8WYwoWqKbgCpn4glIrhq3945i-EI9lD035BaIIVAdnblBLNajWyTNM3EBa_LeH-ZUopgPTNieFYSvU8yYaKp_rIeUbLcbtr_AbQVVdee0iaVlbndAZb-39C1viBb_cJCiWQis8FLh-O2Uzws5KcuiNl4R9QKX_VYqknE8JQCQ_I87RLkOUqTqsF5X-_MxHU"/>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-accent font-display font-bold p-3 rounded shadow-lg border border-white/20">
                      <span className="block text-[0.6rem] uppercase tracking-wide opacity-80">Postage</span>
                      <span className="text-xl">25¢</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                      <h3 className="text-white font-display font-bold text-3xl mb-1 tracking-wide">THE ROYAL BENGAL</h3>
                      <div className="h-1 w-12 bg-primary mb-2"></div>
                      <p className="text-gray-200 text-sm font-bold tracking-widest uppercase">Spirit Animal of Kanha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Activities Summary */}
      <section className="py-24 relative" id="activities">
        <div className="absolute top-0 w-full h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMGw2MDAgOTAgNjAwLTkwdjEyMEgwVjB6IiBmaWxsPSIjRjRGMUVBIiBjbGFzcz0iZmlsbC1wYXBlci1saWdodCBkYXJrOmZpbGwtYWNjZW50Ii8+PC9zdmc+')] rotate-180 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-enter">
            <div className="inline-block border-b-2 border-secondary dark:border-primary pb-1 mb-4">
              <span className="text-secondary dark:text-primary font-bold tracking-[0.2em] uppercase text-sm">Campus Life</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-accent dark:text-white">HOUSE ACTIVITIES</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto font-serif italic text-lg">"Where passion meets purpose on the daily."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Activity Card 1 */}
            <div className="group relative transform hover:-translate-y-3 hover:rotate-1 transition-all duration-300 animate-enter delay-100">
                <div className="absolute inset-0 bg-accent/5 dark:bg-white/5 translate-x-2 translate-y-2 rounded-lg stamp-edge"></div>
                <div className="bg-white dark:bg-surface-dark p-3 h-full flex flex-col stamp-edge shadow-lg border border-gray-100 dark:border-gray-700 relative z-10">
                    <div className="relative h-48 overflow-hidden mb-4 bg-secondary">
                        <img alt="Cultural Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARsOIqrwTQGn7YQOhaBi778msngUNJ3YfAvGG5jyv3bWQd-i2o7gbqMhiwE4_aj8h0bOYCJ7umkMgVHnmyLeF4A8mcUvKfk173Ci36I_NoI4J2S3fsl1_eJN_Vs2FMRdAc3Gl3Zh-hrAW01Bx5akamZjV54ZmGO5cmTfPsEy6QFCbz8oR-TNwOK7dKxDAT3M4D4AGcvRuzYv99p-Y4Tp3w15zyLrDHjq_UfQzmIApGdbpFP6SBfdhuSvtEDnZfL0AXEuMoTEDKo0"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                            <span className="material-symbols-outlined text-3xl mb-1">theater_comedy</span>
                        </div>
                    </div>
                    <div className="px-2 pb-4 flex-grow flex flex-col text-center border-2 border-dashed border-gray-200 dark:border-gray-700 m-1 rounded">
                        <h3 className="font-display font-bold text-xl uppercase mt-4 text-secondary dark:text-primary">Culture</h3>
                        <p className="text-xs font-bold text-gray-400 mb-3">ANNUAL GALA</p>
                    </div>
                </div>
            </div>

             {/* Activity Card 2 */}
             <div className="group relative transform hover:-translate-y-3 hover:-rotate-1 transition-all duration-300 lg:mt-12 animate-enter delay-200">
                <div className="absolute inset-0 bg-accent/5 dark:bg-white/5 translate-x-2 translate-y-2 rounded-lg stamp-edge"></div>
                <div className="bg-white dark:bg-surface-dark p-3 h-full flex flex-col stamp-edge shadow-lg border border-gray-100 dark:border-gray-700 relative z-10">
                    <div className="relative h-48 overflow-hidden mb-4 bg-accent">
                        <img alt="Sports" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9p0RSf2wxFbq_zjj-0-DvQbod2UJcFB4rjd9wdGzhuwDVhFS6wcqT29rt98x5J0F9Xv8LmgKyomz8YAseR44IZYFIPNjpu2OgYQHjLsEUOfJp1BRa923DcLeGZilIp_sqpPVQ84JXofZDXsCt6Bzlp3VZOUx4AtUn7-Rrqwxt0czgoPid1T47g25uohkgX05XQBWmB965iT3Zi1H5diN5WR7d9orB0mET8Sunqb3mCSXDHyMz-oo7TQBeXFjCnN4w75eG1D7nqr0"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                            <span className="material-symbols-outlined text-3xl mb-1">sports_soccer</span>
                        </div>
                    </div>
                    <div className="px-2 pb-4 flex-grow flex flex-col text-center border-2 border-dashed border-gray-200 dark:border-gray-700 m-1 rounded">
                        <h3 className="font-display font-bold text-xl uppercase mt-4 text-secondary dark:text-primary">Athletics</h3>
                        <p className="text-xs font-bold text-gray-400 mb-3">WEEKLY MATCHES</p>
                    </div>
                </div>
            </div>

            {/* Activity Card 3 */}
            <div className="group relative transform hover:-translate-y-3 hover:rotate-1 transition-all duration-300 animate-enter delay-300">
                <div className="absolute inset-0 bg-accent/5 dark:bg-white/5 translate-x-2 translate-y-2 rounded-lg stamp-edge"></div>
                <div className="bg-white dark:bg-surface-dark p-3 h-full flex flex-col stamp-edge shadow-lg border border-gray-100 dark:border-gray-700 relative z-10">
                    <div className="relative h-48 overflow-hidden mb-4 bg-primary">
                        <img alt="Debate Club" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuKBpA9T7y7XqwDLBC2HFa3j4l29iMH9GlPVUQFybkJUb-ciTq5P-ZehvMHVzci1XIbQfbLy1hO6pRt4HnuO_buZiX-G60fIuQv5t6JwI1sTQxpjpEAkcRX1dFF-IkX_FWO4-bbe4QPRleI7Lt27ef2wwQY4x4w9otHisoSOP8IMIUHxcFBt2eJSFOwDWA8Hq_8bOASj8b6LQU63XquF_24tEKOs7XIo2_EF-u0jqFbYBZJHcZWDPSNLHAewDzjpjLl6Cl-_k9M6I"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                            <span className="material-symbols-outlined text-3xl mb-1">school</span>
                        </div>
                    </div>
                    <div className="px-2 pb-4 flex-grow flex flex-col text-center border-2 border-dashed border-gray-200 dark:border-gray-700 m-1 rounded">
                        <h3 className="font-display font-bold text-xl uppercase mt-4 text-secondary dark:text-primary">Academics</h3>
                        <p className="text-xs font-bold text-gray-400 mb-3">DAILY GRIND</p>
                    </div>
                </div>
            </div>

            {/* Activity Card 4 */}
            <div className="group relative transform hover:-translate-y-3 hover:-rotate-1 transition-all duration-300 lg:mt-12 animate-enter delay-500">
                <div className="absolute inset-0 bg-accent/5 dark:bg-white/5 translate-x-2 translate-y-2 rounded-lg stamp-edge"></div>
                <div className="bg-white dark:bg-surface-dark p-3 h-full flex flex-col stamp-edge shadow-lg border border-gray-100 dark:border-gray-700 relative z-10">
                    <div className="relative h-48 overflow-hidden mb-4 bg-secondary">
                        <img alt="Community Service" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABOst5IkIQGohNAiPwk2h-PW9WANG1vK2_5nUSYEyQAoBROFFqJC1ApJhXgPoSCJ_n0twsPtusA7Lt4PVZGk_cdjP7nf2rA4XI5lsHQrhH42WH5ieen4kIZwnjuTm3T4RrlAWqvx5i-iYGzEaRl3Y1c0aJTvbUPdWc1ZbLElayV62Aj5NSeri0a-xMUCgQHebzEOgCqt7_0ZD9VPbrgv1K1zqgtPGxXIrBsCX-XOlpznvqtoZedsMGFdr3NYKYkMosrV3PFcyPoJA"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                            <span className="material-symbols-outlined text-3xl mb-1">volunteer_activism</span>
                        </div>
                    </div>
                    <div className="px-2 pb-4 flex-grow flex flex-col text-center border-2 border-dashed border-gray-200 dark:border-gray-700 m-1 rounded">
                        <h3 className="font-display font-bold text-xl uppercase mt-4 text-secondary dark:text-primary">Service</h3>
                        <p className="text-xs font-bold text-gray-400 mb-3">MONTHLY OUTREACH</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy/Highlight Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-surface-dark border-t border-b border-gray-200 dark:border-gray-800" id="highlights">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-paper-light dark:bg-accent opacity-50 transform skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 animate-enter">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-12 bg-primary"></div>
                        <span className="font-display font-bold text-gray-400 text-sm tracking-widest uppercase">Since 2012</span>
                    </div>
                    <h2 className="font-display text-5xl lg:text-6xl font-black mb-8 uppercase text-accent dark:text-white leading-none">
                        The House <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-red-600 dark:from-primary dark:to-yellow-300">Heritage</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-body">
                        Kanha House isn't just a dormitory; it's a rite of passage. We have fostered a lineage of leaders and visionaries. Our alumni network spans the globe, yet their hearts remain here, in the jungle.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-5 p-4 bg-paper-light dark:bg-accent rounded-lg border-l-4 border-secondary dark:border-primary shadow-sm">
                            <div className="p-2 bg-white dark:bg-surface-dark rounded-full shadow text-secondary dark:text-primary">
                                <span className="material-symbols-outlined text-2xl">emoji_events</span>
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-xl mb-1 text-accent dark:text-white">The Golden Cup</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Undefeated champions of the Inter-House Cultural League for 3 consecutive years.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link to="/pride" className="inline-flex items-center gap-2 border-b-2 border-accent dark:border-primary pb-1 font-bold text-accent dark:text-white hover:text-secondary dark:hover:text-primary hover:border-secondary dark:hover:border-primary transition-all uppercase tracking-widest text-sm">
                            Read House Chronicles <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative animate-enter delay-200">
                    <div className="relative transform rotate-2">
                        <div className="tape w-40 h-10 absolute -top-5 right-20 z-20"></div>
                        <div className="tape w-40 h-10 absolute -bottom-5 left-20 z-20 transform -rotate-1"></div>
                        <div className="bg-white p-4 pb-12 shadow-2xl transform transition hover:scale-[1.01] duration-500">
                            <div className="border border-gray-200 p-1">
                                <img alt="Students studying in library" className="w-full h-[500px] object-cover filter contrast-125 sepia-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrKorNa3IXjWfkFoaN4j1OBROlxYvLMKa8SkCNSeTy3evybNeBtzTPLCzMpM13c4Lq3pxSYv-6udJ2iPNz_-OL3q2gLaYHajl0EvA5Dh_DIFPmMBfvRtPqbkYJqoAV_8NlqtSfW4mw79Fa-YZJYysFRJkakmhdSHoOgxXC871hEXwbVC9ESlgaRJtgulJpoSG3gb_SYZyt692iMjED6pGkqa8VRIwBWfE4Z8BQgbO4vQSnxBdn9P4fsHlbMVCBDtTx6YlOaarvUpo"/>
                            </div>
                            <div className="absolute bottom-4 left-0 w-full text-center">
                                <p className="font-display font-bold text-2xl text-accent opacity-80" style={{ fontFamily: '"Courier New", monospace' }}>LIBRARY ARCHIVES</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Plate No. 421 • Kanha Wing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-paper-light dark:bg-surface-dark relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-enter">
            <div className="bg-surface-light dark:bg-accent text-accent dark:text-white p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden border-2 border-primary/30">
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-paper-light dark:bg-surface-dark rounded-full -translate-x-1/2 -translate-y-1/2 border-r-2 border-primary/30"></div>
                <div className="absolute top-1/2 right-0 w-8 h-8 bg-paper-light dark:bg-surface-dark rounded-full translate-x-1/2 -translate-y-1/2 border-l-2 border-primary/30"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-accent dark:text-primary">MAKE YOUR MARK</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                        Ready to join the pride? Spaces are limited for the upcoming academic year. Apply to Kanha House today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-accent font-display font-bold py-4 px-10 rounded-lg hover:bg-primary/90 transition shadow-lg hover:shadow-primary/50 text-sm tracking-widest uppercase transform hover:-translate-y-1">
                            Apply Now
                        </button>
                        <button className="border-2 border-gray-300 dark:border-gray-600 text-accent dark:text-white font-display font-bold py-4 px-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm tracking-widest uppercase">
                            Contact Warden
                        </button>
                    </div>
                </div>
                <div className="absolute top-[-20px] left-[-20px] opacity-5 transform rotate-[-15deg]">
                    <span className="material-symbols-outlined text-9xl">pets</span>
                </div>
                 <div className="absolute bottom-[-20px] right-[-20px] opacity-5 transform rotate-[15deg]">
                    <span className="material-symbols-outlined text-9xl">school</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
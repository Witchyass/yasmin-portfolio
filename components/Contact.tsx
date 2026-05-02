'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Get in Touch</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <ContactCard
                        href="mailto:yasminsbii09@gmail.com"
                        icon={Mail}
                        title="Email"
                        value="yasminsbii09@gmail.com"
                        color="bg-primary-500"
                        delay={0}
                    />
                    <ContactCard
                        href="https://linkedin.com/in/yasmin-sebei"
                        icon={Linkedin}
                        title="LinkedIn"
                        value="Connect with me"
                        color="bg-[#0077b5]"
                        delay={0.1}
                    />
                    <ContactCard
                        href="https://github.com/WitchYas"
                        icon={Github}
                        title="GitHub"
                        value="Check my code"
                        color="bg-[#333]"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
}

function ContactCard({ href, icon: Icon, title, value, color, delay }: any) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform group"
        >
            <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{value}</p>

            <div className="mt-auto flex items-center text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                <span>Connect</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
        </motion.a>
    );
}

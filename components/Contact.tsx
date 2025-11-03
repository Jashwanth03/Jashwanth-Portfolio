import React from 'react';
import Section from './Section';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
    <div className="flex items-center gap-4">
        <div className="text-accent w-8 h-8">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-light">{title}</h3>
            <p className="text-slate-400">{value}</p>
        </div>
    </div>
);

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-slate-300 mb-8">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
        </p>
        <a 
          href="mailto:jashwanthem03@gmail.com"
          className="inline-block bg-accent text-dark text-lg font-bold py-4 px-8 rounded-lg transition-all transform hover:bg-dark hover:text-accent hover:scale-105 hover:border hover:border-accent"
        >
          Say Hello
        </a>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <ContactInfoItem 
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            }
            title="Email"
            value="jashwanthem03@gmail.com"
          />
          <ContactInfoItem 
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            }
            title="Location"
            value="Chennai"
          />
      </div>
    </Section>
  );
};

export default Contact;
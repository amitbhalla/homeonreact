import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../common/SectionHeader';
import '../../styles/components/contactFaq.css';

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqs = [
    {
      id: 1,
      question: "How do your consulting engagements typically work?",
      answer: "My consulting engagements are customized to your specific needs, but typically start with a detailed discovery phase to understand your challenges and goals. I then develop a tailored strategy and implementation plan, with clearly defined deliverables, timelines, and success metrics."
    },
    {
      id: 2,
      question: "What industries do you specialize in?",
      answer: "I primarily work with B2B SaaS and professional services companies, but my marketing frameworks and methodologies can be applied across various industries. The common thread is a focus on complex sales cycles and high-value customer relationships."
    },
    {
      id: 3,
      question: "How much do your services cost?",
      answer: "My pricing varies based on project scope, duration, and complexity. I offer both project-based and retainer options. The best way to get an accurate quote is to schedule a consultation where we can discuss your specific needs and goals."
    },
    {
      id: 4,
      question: "How soon can you start working with us?",
      answer: "I typically maintain limited client capacity to ensure I can deliver exceptional results for each engagement. Current availability is usually 2-4 weeks out, but this varies depending on the time of year and existing commitments."
    },
    {
      id: 5,
      question: "Do you work with startups or only established companies?",
      answer: "I work with companies at various growth stages, from funded startups to established enterprises. The key factor is a commitment to strategic marketing and a willingness to invest in sustainable growth rather than quick fixes."
    },
    {
      id: 6,
      question: "What if I'm just looking for marketing career advice?",
      answer: "In addition to business consulting, I offer personalized career coaching for marketing professionals. These sessions are tailored to your specific career goals and challenges, whether you're looking to advance in your current role or make a strategic career move."
    }
  ];

  return (
    <section className="contact-faq">
      <div className="container contact-faq-container">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Have questions about working together? Here are answers to the most common questions I receive."
          centered={true}
        />
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={faq.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-text">{faq.question}</div>
                <FontAwesomeIcon icon={faPlus} className="faq-question-icon" />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
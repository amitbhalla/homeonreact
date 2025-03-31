import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../common/SectionHeader';
import '../../styles/components/faq.css';

// Import FAQs data
import faqsData from '../../data/faqs.json';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Load FAQs data
    setFaqs(faqsData);
  }, []);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <SectionHeader
          tag="Frequently Asked Questions"
          title="Common Questions About <span class='text-accent'>Working With Me</span>"
          description="Get answers to the questions potential clients often ask before working with me. If you don't see your question here, feel free to reach out directly."
          centered={true}
          className="faq-header"
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
                {faq.question}
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="faq-answer">
                <p dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react'
import './Faq.css'

const Faq = () => {
  // Add faqs array here, this is just an example
  const faqs = [
    {
      question: "What is HackSU?",
      answer: "HackSU is a hackathon event where students collaborate to create innovative projects."
    },
    {
      question: "Who can participate?",
      answer: "Students from all disciplines and skill levels are welcome to participate."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any other hardware you might need for your project."
    },
    {
      question: "Is there a cost to attend?",
      answer: "No, HackSU is free for all participants."
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <h1 className='faq-title'>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className='faq-item'>
          {/* TODO: add animations maybe */}
          <h2 className='faq-question' onClick={() => toggleAnswer(index)}>
            {faq.question}
            <svg className={`svg ${activeIndex === index ? "rotate" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
          </h2>
          {activeIndex === index && <p className='faq-answer'>{faq.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default Faq
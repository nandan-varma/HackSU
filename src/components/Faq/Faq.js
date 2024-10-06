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

  return (
    <div className='faq-container'>
      <h1 className='faq-title'>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className='faq-item'>
          <h2 className='faq-question'>{faq.question}</h2>
          <p className='faq-answer'>{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default Faq
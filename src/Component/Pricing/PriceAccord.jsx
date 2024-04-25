import { useState } from "react";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

const AccordionItem = ({ question, answer, isActive, onClick }) => {
  return (
      <div className='flex flex-col px-4 max-md:px-4'>
        <div
          className={`flex justify-between items-center  bg-[#fff] text-black p-4 text=5xl cursor-pointer`}
          onClick={onClick}
        >
          <div className='text-black text-xl max-md:text-sm font-semibold'>{question}</div>
          {isActive ? <FaAngleDown className='text-[#000] text-xl' /> : <FaAngleRight className='text-[#000] text-xl' />}
        </div>
        {isActive && <div className='bg-[#fff] text-black text-sm p-4 border-t-2'>{answer}</div>}
      </div>

  );
};

function PriceAccord() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      question: "What types of aids does Coachfrika provide for schools?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas a doloribus ipsa molestias porro alias vitae soluta et, voluptatum earum debitis? Aperiam nam consequuntur cum ullam repellendus, saepe cumque!",
    },
    {
      question: "How can these aids benefit educators and students?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas a doloribus ipsa molestias porro alias vitae soluta et, voluptatum earum debitis? Aperiam nam consequuntur cum ullam repellendus, saepe cumque!",
    },
    {
      question: "Is your company's technology compatible with existing classrooms?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas a doloribus ipsa molestias porro alias vitae soluta et, voluptatum earum debitis? Aperiam nam consequuntur cum ullam repellendus, saepe cumque!",
    },
    {
      question: "Are there training programs available for teachers to effectively use these modern teaching aids?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas a doloribus ipsa molestias porro alias vitae soluta et, voluptatum earum debitis? Aperiam nam consequuntur cum ullam repellendus, saepe cumque!",
    },
  ];

  return (
    <>
    <div className="relative flex flex-col justify-center items-center bg-[#F7FFF6] gap-40 max-md:px-10  max-md:p-5 h-auto max-md:pt-16">
      
    <div className="px-40 max-md:px-10 pb-8">
      <div className="flex flex-col gap-4 text-center mb-5">
        <h1 className="text-4xl max-md:text-2xl font-semibold">FAQ</h1>
        <p className="text-[16px]">Frequently Asked Question</p>
      </div>
       <div className='flex flex-col bg-[#cccbc8] w-[828px] max-md:w-[628px] max-sm:w-[428px] text-white py-8 rounded-lg gap-2'>
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </div>
    </div>

    </>
  )
}

export default PriceAccord;

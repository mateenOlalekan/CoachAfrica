import './Frame.css';

export default function Main() {
  return (
    <>
    <div className="w-full h-full 
                    lg:px-24 lg:py-12 
                    md:px-10 md:py-10 
                    max-md:px-10 max-md:py-12                    
     bg-[#f]  relative">
        <div className='flex flex-col items-center relative text-center bg-[#78C504] 
        lg:px-40 lg:py-20
        max-lg:px-80 max-lg:py-20
        md:px-20 md:py-10 
                    max-md:px-4 max-md:py-10 overflow-hidden rounded-lg gap-5'>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[-30px] left-0" width="75" height="121" viewBox="0 0 75 61" fill="none">
            <path d="M18.4229 -53.5123L62.9932 21.8878L31.0839 33.1247L18.4229 -53.5123Z" fill="#EAD300"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[70px] left-[70px]" width="57" height="43" viewBox="0 0 57 43" fill="none">
            <path d="M8.22854 41.0739L10.6776 19.8579L27.7504 30.7289L29.6966 12.931L45.2696 23.7058L50.1197 4.4649" stroke="#005EEA" strokeWidth="1.58153"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-0px] left-[50px]" width="43" height="27" viewBox="0 0 43 27" fill="none">
            <rect width="58.2857" height="19.2304" transform="matrix(-0.444212 -0.895922 0.889674 -0.456596 25.8926 61)" fill="#EA0000"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-32 top-64 transform rotate-[120deg]" width="80" height="28" viewBox="0 0 100 100" fill="none">
            <rect x="14" y="24" width="250" height="56" stroke="#EA0000" fill="#EA0000"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-40 right-32 " width="36" height="31" viewBox="0 0 36 31" fill="none">
            <path d="M1.39879 30.1831C1.39879 30.1831 -0.965616 16.3526 5.82 13.5959C11.5206 11.2801 16.4628 21.5216 21.1469 17.8086C25.8915 14.0476 14.0474 8.08934 17.9046 3.59097C21.9643 -1.14338 35 3.59097 35 3.59097" stroke="#005EEA" strokeWidth="1.89784"/>
          </svg>
           <div className='relative  font-[800]
                           lg:text-[36px] max-lg:text-[20px]
           '>
                Are You Interested In Training Your Teachers With A Cutting-Edge
                Tools For Teaching?
            </div>

            <div className='text-[16px] font-normal overflow-hidden text-black z-50'>
                We are committed to revolutionizing education through modern
                teaching aids designed to inspire and engage students.
            </div>

            <div className='px-4 py-4 text-base 
                            rounded-md bg-black
                            text-white z-50'>
              Enroll to our School
            </div>

       </div>
    </div>

    </>
  );
}




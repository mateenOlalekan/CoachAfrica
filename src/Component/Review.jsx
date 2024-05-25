
const ReviewItem = ({ count, label }) => (
  <div className="text-center text-[#BEF200]">
    <h2 className="text-6xl max-lg:text-5xl font-semibold">{count}</h2>
    <p className=" text-base font-semibold">{label}</p>
  </div>
);

const Review = () => (
  <div className="grid lg:grid-cols-4 mt-10 max-md:gap-3 max-lg:grid-cols-2 max-md:grid-cols-2 bg-[#012112] py-7 lg:px-20 max-lg:px-6 transition-shadow duration-[0.75s]">
    <ReviewItem count="3" label="Leader Coaches Onboarded" />
    <ReviewItem count="5" label="School Benefitted" />
    <ReviewItem count="10" label="Teacher Leader Onboarded" />
    <ReviewItem count="500+" label="Students Impacted" />
  </div>
);

export default Review;

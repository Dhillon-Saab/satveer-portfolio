const QuestionsChallenges = () => (
  <div>
    <section className="pt-10 py-10 bg-neutral-50">
      <div className="container mx-auto text-gray-700 px-64 text-left">
        <h2 className="font-Lora flex text-7xl mb-10">Questions</h2>
        <ol className="mt-4 pl-10 list-decimal text-lg space-y-2">
          <li>How can the customer experience be improved?</li>
          {/* <li>How can the employee experience be improved?</li> */}
          <li>How will Aggüdo continue its outreach?</li>
        </ol>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg">
      <div className="container mx-auto text-white px-64 text-left">
        <h2 className="font-Lora flex text-7xl mb-10">Challenges</h2>
        <ol className="mt-4 list-none text-lg space-y-2 font-Josefin-Sans">
          <li>
            How can customers and staff feel more involved with the experience
            at Aggüdo?
          </li>
          <li>How can a company that has been operating for less than two years be encouraged to embrace the ideas of customer research and engagement?</li>
        </ol>
      </div>
    </section>
  </div>
);

export default QuestionsChallenges;

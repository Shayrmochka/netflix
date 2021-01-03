import React, { useEffect, useState } from "react";

function Questions() {
  const questionsArray = [
    {
      question: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
      closed: true,
    },
    {
      question: "How much does Netflix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.`,
      closed: true,
    },
    {
      question: "Where can I watch?",
      answer: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      closed: true,
    },
    {
      question: "How do I cancel?",
      answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
      closed: true,
    },
    {
      question: "What can I watch on Netflix?",
      answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer.`,
      closed: true,
    },
    {
      question: "How does the free trial work",
      answer: `Try us free for 30 days! If you enjoy your Netflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.`,
      closed: true,
    },
    {
      question: "Why am I seeing this language?",
      answer: `Your browser preferences determine the language shown here.`,
      closed: true,
    },
  ];

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsArray);
    // return () => {};
  }, []);

  const openInfo = (index, event) => {
    event.preventDefault();
    questionsArray[index].closed = !questionsArray[index].closed;
    //event.target.classList.add("questions__svg-closed");
    setQuestions(questionsArray);
  };

  return (
    <div className="sections__questions">
      <div className="sections__header sections__text--color">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="questions__buttons-block">
        {questions.map((element, index) => (
          <React.Fragment key={index}>
            <button
              className="questions__button"
              onClick={(event) => openInfo(index, event)}
            >
              {element.question}
              <svg
                id={`thin-x-${index}`}
                viewBox="0 0 20 20"
                className={
                  element.closed
                    ? `questions__svg-icon`
                    : `questions__svg-icon--closed`
                }
                focusable="true"
              >
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div
              className={`questions__info-block ${
                element.closed
                  ? `questions__info-block--closed`
                  : `questions__info-block--opened`
              }`}
            >
              <p className="questions__info-text">{element.answer}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="sections__trial">
        <div className="sections__trial-describe sections__text--color">
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <div className="sections__trial-subscribe">
          <input
            className="sections__trial-input"
            placeholder="Email address"
          />
          <button className="sections__trial-button">Try 30 days free</button>
        </div>
      </div>
    </div>
  );
}

export default Questions;

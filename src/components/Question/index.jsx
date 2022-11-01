import { useState } from "react";
import "./style.css";

const questions = [
  {
    id: 1,
    question: "How to contact with riders emergency ?",
    answer:
      "Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.",
  },
  {
    id: 2,
    question: "App installation failed, how to update system information?",
    answer:
      "Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects.",
  },
  {
    id: 3,
    question: "Website response taking time, how to improve?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    id: 4,
    question: "New update fixed all bug and issues",
    answer:
      "If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.",
  },
];
function Question() {

    const [active, setActive] =useState(1);
  return (
    <div className="question-wrapper">
      <div className="question wrapper">
        <div className="question-container">
          <div className="question-head">
            <h5>GET YOUR QUESTION ANSWER</h5>
            <h3 className="question-title">Frequently asked question</h3>
          </div>
          <div className="list-questions">
            {questions.map(item =>(
                <div key={item.id} onClick={()=> setActive(item.id)} className={`question-item ${item.id===active ? 'active ' :''}`}>
                    <div className="question-item-top">
                        {
                            item.id===active ?<i className="fa-solid fa-plus"></i> :<i className="fa-solid fa-minus"></i>
                        }
                    
                        <h3 className="h3">{item.question}</h3>
                    </div>
                    <div className="question-item-hide">
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;

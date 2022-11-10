import { useState } from "react";
import "./style.css";
import {questions} from '../../constants'

function Question() {

  const [active, setActive] =useState(1);


  const handleToggleActive= (id) =>{
    if(id === active){
      setActive(0);
    }
    else{
      setActive(id)
    }
    
  }
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
                <div key={item.id} onClick={(e)=> handleToggleActive(item.id,e.target)} className={`question-item ${item.id===active ? 'active ' :''}`}>
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

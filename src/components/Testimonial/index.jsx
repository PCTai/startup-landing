import { useRef } from 'react';
import './style.css'
const testUser= [
    {
        id: 1,
        star: 5,
        title: 'Layout and organized layers',
        desc: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU',
        name:'Denny Hilguston',
        email :'@denny.hil',
    },
    {
        id: 2,
        star: 4,
        title: 'Modern look & trending design',
        desc: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2-3cmIY_tWwFo0LQ-Nb5l3M04H7X86ECiA&usqp=CAU',
        name:'Denny Hilguston',
        email :'@denny.hil',
    },
    {
        id: 3,
        star: 3,
        title: 'Layout and organized layers',
        desc: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTTHl49KjkuYhMImb5ZhwYqdmsY8u2IBKnw&usqp=CAU',
        name:'Denny Hilguston',
        email :'@denny.hil',
        
    }
    ,
    {
        id: 4,
        star: 4,
        title: 'Layout and organized layers',
        desc: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2-3cmIY_tWwFo0LQ-Nb5l3M04H7X86ECiA&usqp=CAU',
        name:'Denny Hilguston',
        email :'@denny.hil',
        
    }
]


function Testimonial() {

    const renderStar=(amount)=>{
        let arr =[];
        for( let i=0; i< 5; i++){
            if(i<amount-1){
                arr.push({
                    id: i,
                    value: true
                });
            }
            else{
                arr.push({
                    id: i,
                    value: false
                })
            }
        }
        return arr;
        
    }
    
    const  handleSlide= (dir) =>{
        const widthScroll= slideRef.current.offsetWidth;
        const items= document.querySelectorAll('.testimonial-item');
        const itemWidth= items[0].offsetWidth;
        const amountScroll= Math.round(widthScroll / itemWidth);
        
        if(dir=== "prev"){
            // slideRef.current.scrollLeft -=widthScroll;
           for(let i=0; i< amountScroll; i++){
            slideRef.current.prepend(document.querySelectorAll('.testimonial-item')[items.length-1]);
           }
          }
        else{
        // slideRef.current.scrollLeft +=widthScroll;
        for(let i=0; i< amountScroll; i++){
            slideRef.current.appendChild(document.querySelectorAll('.testimonial-item')[0]);

           }
        }
       
    }
    const slideRef= useRef();
    return ( 
        <div id='testimonial' className="testimonial wrapper">
            <div className="testimonial-container">
                <div className="testimonial-head">
                    <h5>TESTIMONIAL</h5>
                    <h3 className="testimonial-title">Meet Client Satisfaction</h3>
                </div>
                <div className="testimonial-slide">
                <div
                    ref={slideRef}
                className="testimonial-items">
                    {testUser.map((item,index) =>(
                        <div key={item.id} className="testimonial-item" style={{transform: `translateX(-${index-1 * 100}%)`}}>
                            <div className="testimonial-star">
                                {renderStar(item.star).map(item =>(
                                    <i key={item.id} className={`fa-solid fa-star ${item.value ? 'fill': ''}`}></i>
                                ))}
                            </div>
                            <div className="testimonial-title">
                                {item.title}
                            </div>
                            <div className="testimonial-desc">
                                {item.desc}
                            </div>
                            <div className="testimonial-user">
                                <img className='testimonial-user-avatar' src={item.img} alt="" />
                                <div className="testimonial-user-content">
                                <p className="testimonial-name">
                                {item.name}
                                    </p>
                                    <p className="testimonial-email">
                                    {item.email}
                                    </p></div>   
                            </div>
                        </div>
                    ))}

                </div>
                </div>
                <div className="slide-control">
                    <div onClick={()=>{
                        handleSlide('prev');
                    }} className="slide-prev">
                    <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div
                    onClick={()=>{
                        handleSlide('next');
                    }} className="slide-next">
                    <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Testimonial;
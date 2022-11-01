import './style.css'
const packages = [
    {
      id: 1,
      title: "Free Plan",
      recommended: false,
      for: "For small teams or office",
      benefits: 
        {
          allowed: [
            "Ultimate access to all course, exercises and assessments",
            "Free access for all kind of exercise corrections with downloads.",
            "Total assessment corrections with free download access system",
          ],
          rejected: [
            "Unlimited download of courses on the mobile app contents",
            "Download and print courses and exercises in PDF",
          ],
        },
   
    },
    {
      id: 2,
      title: "Premium",
      recommended: true,
      for: "For startup enterprise",
      price: 29.99,
      benefits: 
        {
          allowed: [
            "Ultimate access to all course, exercises and assessments",
            "Free access for all kind of exercise corrections with downloads.",
            "Total assessment corrections with free download access system",
            "Unlimited download of courses on the mobile app contents",
            "Download and print courses and exercises in PDF",
          ],
          rejected: [],
        },
    },
  ];

function Function() {
    return ( 
        <div className="function2-wrapper">
            <div className="function2 wrapper">
                <div className="function2-container">
                    <div className="function2-head">
                        <h5>WHATS THE FUNCTION</h5>
                        <h3>Let's see how it works</h3>
                    </div>    
                    <div className="function2-packages">
                        {packages.map((item, index) =>(
                            <div key={index} className="function2-package">
                                {item.recommended && (<div className='recommended'>recommended</div>)}
                                <div className="function2-package-head">
                                    <div className="function2-package-head-item">
                                        <h3 className='function2-package-title'>{item.title}</h3>
                                        <span>{item.for}</span>
                                    </div>
                                    <div className="function2-package-head-item2">
                                        <span>{item.price?'Starting from': ''}</span>
                                        <h3 className='function2-package-price'>{item.price?"$"+item.price +'/mo': ''}</h3>
                                    </div>
                                </div>
                                <div className="function-package-benefits">
                                    {item.benefits.allowed.map((benefit)=>(
                                        <div key={benefit} className="package-benefit allowed">
                                            <i className="fa-solid fa-check"></i>
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                    {item.benefits.rejected.map((benefit)=>(
                                        <div key={benefit} className="package-benefit">
                                            <i className="fa-solid fa-xmark"></i>
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                               <div className={`function-package-btn ${item.recommended? 'active':''}`}> <button className="btn btn-package ">Signup now</button></div>
                            </div>
                        ))}
                        
                    </div>
                </div>  
            </div>
        </div>
     );
}

export default Function;
import {quanlityFeature} from '../../../constants'
import './style.css'
function Quality() {
    return ( 
        <div id='feature' className="quanlity">
            <div className="quality-head">
                <h5>QUALITY FEATURES</h5>
                <h3 className="quality-title">
                Meet exciting feature of app
                </h3>
            </div>
            <div className="quality-content">
                <div className="quality-items">
                    {quanlityFeature.map(item =>(
                        <div key={item.id} className="quality-item">
                            <div className="quality-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="quality-item-content">
                                <h3 className="quality-item-title">
                                {item.title}
                                </h3>
                                <p className="quality-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </div>
     );
}

export default Quality;
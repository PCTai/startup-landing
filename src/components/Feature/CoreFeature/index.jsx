import './style.css'
import {iconCoreFeature} from '../../../constants'
function CoreFeature() {
    return ( 
        <div className="core">
            <div className="core-img">
                <img src="https://startup-app-modern.vercel.app/_next/static/images/coreFeature-eeb06038997d171c096c54579e1a2dfe.png" alt="" />
            </div>
            <div className="core-content">
                <h5>CORE FEATURES</h5>
                <h3 className="core-title">
                Smart Jackpots that you may love this anytime & anywhere
                </h3>
                <div className="core-items">
                    {iconCoreFeature.map(item =>(
                        <div key={item.id} className="core-item">
                            <div className="core-item-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="core-item-content">
                                <h3 className="core-item-title">
                                    {item.title}
                                </h3>
                                <p className="core-item-desc">{item.desc}</p>
                            </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
     );
}

export default CoreFeature;
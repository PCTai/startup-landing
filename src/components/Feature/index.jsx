import CoreFeature from "./CoreFeature";
import CoreFeature2 from "./CoreFeature2";
import Quality from "./Quality";
import Quality2 from "./Quality2";

function Feature() {
    return ( 
        <div className="feature wrapper">
            <div className="feature-container">
                <Quality/>
                <CoreFeature/>
                <Quality2/>
                <CoreFeature2/>
            </div>
        </div>
     );
}

export default Feature;


import './style.css'

import {footers} from '../../constants'

function Footer() {
    return ( 
        <div className="footer-wrapper">
            <div className="footer wrapper">
            <div className="footer-container">
                {
                    footers.map(item =>(
                        <div key={item.id} className="footer-item">
                            <div className="footer-item-title">
                                {item.name}
                            </div>
                            <div className="footer-item-links">
                               {
                                item.list.map(link =>(
                                    <a key={link.id} href="#" className="footer-item-link">{link.name}</a>
                                ))
                               }                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
     );
}

export default Footer;
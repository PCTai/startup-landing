

import './style.css'

const footers= [
    {
        id :1,
        name: 'about us',
        list: [
            {
                id: 1,
                name: 'support center',
            },
            {
                id: 2,
                name: 'customer support',
            },
            {
                id: 3,
                name: 'about us',
            },
            {
                id:4,
                name: 'copyright',
            },
            {
                id: 5,
                name: 'Popular Campaign',
            },
        ]
    }
    ,
    {
        id :2,
        name: 'ours infomation',
        list: [
            {
                id: 1,
                name: 'return policy',
            },
            {
                id:2,
                name: 'primary policy',
            },
            {
                id: 3,
                name: 'terms Conditions',
            },
            {
                id: 4,
                name: 'site map',
            },
            {
                id: 5,
                name: 'store hours',
            },
        ]
    },
    {
        id: 3,
        name: 'my account',
        list: [
            {
                id: 1,
                name: 'press inpuiries',
            },
            {
                id:2,
                name: 'social media',
            },
            {
                id: 3,
                name: 'directories',
            },
            {
                id: 4,
                name: 'image & b-roll',
            },
            {
                id: 5,
                name: 'permission',
            },
        ]
    },
    {
        id :4,
        name: 'policy',
        list: [
            {
                id: 1,
                name: 'aplication security',
            },
            {
                id:2,
                name: 'software principles',
            },
            {
                id: 3,
                name: 'unwanted software policy',
            },
            {
                id: 4,
                name: 'reponsoble supply chain',
            },
            {
                id: 5,
                name: 'Popular Campaign',
            },
        ]
    }
]

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
import React from 'react'

export default function Contact(props) {
    return (
        <>
        <div class={`container color-${props.color}`}>
            <div className="card-group">
                <div className={`card bg-${props.color}`}>
                <img src="https://img.icons8.com/plasticine/100/undefined/contact-card.png" style={{margin: 'auto', width: '200px'}} className="card-img-top" alt=".."/>
                        <div className="card-body">
                            <h5 className="card-title">Phone Number</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
                <div className={`card bg-${props.color}`}>
                    <img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/undefined/external-Email-cryptocurrency-others-cattaleeya-thongsriphong-2.png" style={{margin: 'auto', width: '200px'}} className="card-img-top" alt=".."/>
                        <div className="card-body">
                            <h5 className="card-title">Email Address</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                </div>
                <div className={`card bg-${props.color}`}>
                    <img src="https://img.icons8.com/clouds/100/undefined/marker.png" style={{margin: 'auto', width: '200px'}} className="card-img-top" alt=".."/>
                        <div className="card-body">
                            <h5 className="card-title">Location</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

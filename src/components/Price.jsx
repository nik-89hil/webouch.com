import React from 'react'

const Price = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Pricing and Services include:</h1>
    <br />
    <div className='price' id='service'>
        <div className="classic">
            <div className="content">
                <p className="topic">#Classic</p>
                <br />
                <p>Unlock the potential of your online presence with our simple yet feature-rich web pages and landing pages. Start building today and make your mark on the digital landscape with confidence.</p>
                <br />
                <ul>
                    <li> <i className="fa-regular fa-circle-check"></i> Any 4 Pages (Home, About, Contact, Services, Pricing and FAQ etc.)  </li>
                    <li> <i className="fa-regular fa-circle-check"></i> Free name hosting (1 yr). </li>
                    <li> <i className="fa-regular fa-circle-check"></i> 3 customize change. </li>
                    <li> <i className="fa-regular fa-circle-check"></i> Free design templates.</li>
                    <li> <i className="fa-regular fa-circle-check"></i> Google Form and map.</li>
                    <li> <i className="fa-regular fa-circle-check"></i> One touch contact.</li>
                    <li> <i className="fa-regular fa-circle-check"></i> Shareable link.</li>
                    <li> <i className="fa-regular fa-circle-check"></i> With in 3 Days</li>
                    <li> <i className="fa-regular fa-circle-check"></i> Working in mobile, tablet and laptop.</li>
                    <li className='rate'>Rs. 1,999/-</li>
                    <li> <button className='want'> <a href="https://forms.gle/CydPN1JWizwmP74Q7" target='_blank'>Yes, I want</a></button></li>
                </ul>
            </div>
        </div>
        <div className="premium">
            <div className="content">
                <p className="topic">#Premium</p>
                <br />
                <p>Leverage integrated analytics tools to gain valuable insights into your website's performance, track user behavior, and make data-driven decisions to optimize your online strategy. With robust security measures in place, you can rest assured that your website and your visitors' data are protected against potential threats.</p>
                <br />
                <p> What you dream, will be in your website.</p>
                <br />
                <ul>
                    <li> <i className="fa-regular fa-circle-check"></i> MERN Website with latest tools and technologies. </li>
                    <li className='rate'> Rs. N/A </li>
                    <li><button className="want"><a href="https://forms.gle/CydPN1JWizwmP74Q7" target='_blank'>Ask now,</a></button></li>
                </ul>
            </div>

        </div>
      
    </div>

    </>
    
  )
}

export default Price

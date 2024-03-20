import React from 'react'
import img1 from '../assets/5351324.jpg'
import img2 from '../assets/4428861.jpg'
import img3 from '../assets/abv.jpg'



const Home = () => {
  return (
    <>

    <div className="home">
        <h1>Get a website at cheapest rate...</h1>
        <br />
        <h4>
            starting just <span className="rate">Rs. 1,999/-</span> + 4 pages (Home, About, Contact, Services) and so on.. check out services.

        
        </h4>
        <br />
        <div className="tag">
            <span>Increased Visibility and Reach</span>
            <span>24/7 Availability</span>
            <span>Lead Generation</span>
            <span>E-commerce Sales</span>
            <span>Brand Building and Credibility</span>
            <span>Customer Engagement and Relationship Building</span>
            <span>Analytics and Insights</span>
        </div>
        <br />
        <div className="image">
            <div className="first">
                <img src={img1} alt="img1" />
                <p className='heading'>
                    Tell Your Idea 
                </p>
                <br />
                <p>
                ideas are the lifeblood of human progress. They have the power to spark imagination, drive innovation, and shape the world in profound ways. By nurturing creativity, embracing collaboration, and fostering a culture of openness and experimentation, we can harness the power of ideas to build a brighter future for generations to come.
                </p>
            </div>
            <div className="second">
                <img src={img2} alt="img1" />
                <p className='heading'>
                    get your website and landing page
                </p>
                <br />
                <p>
                Creating a website for your business is a crucial step in establishing a strong online presence and reaching your target audience effectively. A well-designed website serves as a digital storefront, providing potential customers with essential information about your products or services, and enabling them to engage with your brand in meaningful ways
                </p>
            </div>
            <div className="third">
                <img src={img3} alt="img1" />
                <p className='heading'>
                    onboard your growth
                </p>
                <br />
                <p>
                A business website can serve as a powerful catalyst for growth, enabling you to expand your reach, attract new customers, and increase revenue.
                </p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Home



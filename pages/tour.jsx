import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={""} />
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section pb-100">
        {/* <div className="container-fluid">
          <div className="booking-form-wrapper p-r z-2">
            <form className="booking-form-two">
              <div className="form_group">
                <span>Check In</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check Out"
                />
              </div>
              <div className="form_group">
                <span>Guest</span>
                <label>
                  <i className="far fa-user-alt" />
                </label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Guest"
                  name="text"
                />
              </div>
              <div className="form_group">
                <span>Accommodations</span>
                <select className="wide">
                  <option data-display="Accommodations">Accommodations</option>
                  <option value={1}>Classic Tent</option>
                  <option value={1}>Forest Camping</option>
                  <option value={1}>Small Trailer</option>
                  <option value={1}>Tree House Tent</option>
                  <option value={1}>Tent Camping</option>
                  <option value={1}>Couple Tent</option>
                </select>
              </div>
              <div className="form_group">
                <button className="booking-btn">
                  Check Availability <i className="far fa-angle-double-right" />
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </section>
      {/*====== End Booking Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100" style={{ backgroundColor: '',             
                                                                  borderRadius: '18px', }}>
        
      
        <h2 className="" style={{ marginLeft: '12px', marginRight: '20px', fontSize: '28px' }}>About Utalii</h2>
        <hr/>
        <h5 style={{ marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '21px' }}>Utalii Africa Tourism Expo is a one-of-a kind event scheduled to take place in June 2024 in
                 the Ugandan capital, Kampala. <br/>
           <br/>
                 Africa’s mega inaugural expo will, over the course of three days, provide a unique platform
                for African countries and global tourism stakeholders to showcase their products and
                services, build crucial networks with other players in the market, learn from one another
                  and close lucrative business deals.
          <br/>
         <br/>
              Participants will have the collective opportunity to harness Africa’s rich, authentic, cultural
              and natural heritage and hold crucial conversations, with the goal of reigniting the tourism
                business in Africa and promoting inter-Africa travel and trade.</h5>

       <br />
        
           <br />
           
       
        <br />
      
          <h2 className="" style={{ marginLeft: '12px', marginRight: '20px', fontSize: '28px' }}>The Hosting Country</h2>
        <hr/>
        <h5 style={{ marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '21px' }}>
          UATE will be hosted in the bustling East Africa city of Kampala, where vibrant colour, a
            cacophony of sound, a diverse population, rich past, strong cultural traditions and promise
          for the future combine in an unforgettable visitor experience.
        
         <br/>
         The host venue, the historically significant Kololo Ceremonial Grounds, located in the heart
           of the city, will provide guests with easy access to accommodation suited to every taste as
           well as to essential social amenities.
           
           <br />
           When the expo ends, you will want to linger, and with Uganda’s lush forests, national parks,
           mountain gorillas, scenic sites, thrilling water activities, abundant bird life and colourful
           cultural life, among many others, there will be no shortage of activities to keep you
          engaged.
           
           </h5>
           <br />
           
           <h2 className="" style={{ marginLeft: '12px', marginRight: '20px', fontSize: '28px' }}>Activities</h2>
           <br />
                  <h6 style={{ marginLeft: '18px', fontWeight: 'lighter', fontSize: '21px' }}>
                   Alot of activities are scheduled to take place during the 3 day expo. These are some of the many:
                  </h6>
                  <br/>
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5" style={{ marginLeft: '20px', marginRight: '20px' }}>
                      <ul className="check-list">
                        <li>
                          <i className="fas fa-badge-check" />
                         B2B Meetings
                          
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Seminars
                         
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Exhibitions
                         
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Workshops 
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                         Deal closing
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          FAM Trips
                        
                        </li>
                        <li>
                         
                          <i className="fas fa-badge-check" />
                         Scheduled Media Interviews

                        </li>
                      </ul>
                      <br/>
                    </div>
                    
                  </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;

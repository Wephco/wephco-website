import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import { BsBuilding, BsHouseDoor, BsGlobe, BsGear, BsPeople, BsArrowBarRight } from 'react-icons/bs'
// import { FaPlane, FaAward } from 'react-icons/fa'
// // import { AiFillCar } from 'react-icons/ai'
// import { GiPartyFlags } from 'react-icons/gi'
// import { BiMoney, BiWorld, BiLocationPlus, BiTime, BiGasPump } from 'react-icons/bi'
import { Container } from 'react-bootstrap'
import StarRating from '../../common/StarRating';
import hotel1 from '../../../assets/images/hotel-1.jpeg';
import hotel2 from '../../../assets/images/hotel-2.jpeg';
import hotel3 from '../../../assets/images/hotel-3.jpeg';
import hotel4 from '../../../assets/images/hotel-4.jpeg';
import short1 from '../../../assets/images/short-1.jpeg';
import short2 from '../../../assets/images/short-2.jpeg';
import short3 from '../../../assets/images/short-3.jpeg';
import short4 from '../../../assets/images/short-4.jpeg';
import tour1 from '../../../assets/images/tour-1.jpeg';
import tour2 from '../../../assets/images/tour-2.jpeg';
import tour3 from '../../../assets/images/tour-3.jpeg';
import tour4 from '../../../assets/images/tour-4.jpeg';
import car1 from '../../../assets/images/car-1.jpeg';
import car2 from '../../../assets/images/car-2.jpeg';
import car3 from '../../../assets/images/car-3.jpeg';
import car4 from '../../../assets/images/car-4.jpeg';
import event1 from '../../../assets/images/event-1.jpeg';
import event2 from '../../../assets/images/event-2.jpeg';
import event3 from '../../../assets/images/event-3.jpeg';
import event4 from '../../../assets/images/event-4.jpeg';
import ContactModal from '../../common/ContactUsModal';

const Logistics = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const hotelRef = useRef(null);
  const shortLetRef = useRef(null)
  const tourRef = useRef(null);
  const eventRef = useRef(null)
  const carRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const setActiveNav = (ref) => (event) => {
    let navLinks = document.getElementsByClassName('nav-link');
    for(let i = 0; i < navLinks.length; i++){
      navLinks[i].classList.remove('active');
    }
    event.target.classList.add('active');

    switch (ref) {
      case 'hotel':
        hotelRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'shortLet':
        shortLetRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'tour':
        tourRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'event':
        eventRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'car':
        carRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        hotelRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  let modal = (
    <ContactModal open={modalOpen} close={closeModal} />
  )

  return (
    <div className=''>
      {modal}
      <div className="logistics-header p-5">
        <div className="header-text">
          <div className="text-center text-white">
            <h1 className='p-3'>Create Your Next Amazing Experience</h1>
            <h6>Discover top rated hotels, popular events, flights, tours and many more</h6>
          </div>
        </div>
        <div className="services mt-3 p-5">
          <div className="row">

            <div className="col">
              <Link>
                <h5 className='text-white'>
                {/* <FaPlane className='mr-3' /> */}
                Flights
                </h5>
              </Link>
            </div>

            <div className="col">
              <Link>
               <h5 className="text-white">
               {/* <BsHouseDoor className='mr-5'/> */}
               Short-Let
               </h5>
              </Link>
            </div>

            <div className="col">
              <Link>
              <h5 className='text-white'>
                {/* <BsGlobe /> */}
                Tours
              </h5>
              </Link>
            </div>

            <div className="col">
              <Link>
                <h4 className="text-white">
                  {/* <AiFillCar className='mr-5'/> */}
                  Car Rental
                </h4>
              </Link>
            </div>

            <div className="col">
              <Link>
                <h4 className="text-white">
                  {/* <GiPartyFlags /> */}
                  Events
                </h4>
              </Link>
            </div>

            <div className="col">
              <Link>
              <h4 className="text-white">
                {/* <BsBuilding className='mr-5'/> */}
                Hotel
              </h4>
              </Link>
            </div>

          </div>
        </div>
      </div>

    {/* Features */}
    <div className="features">
      <Container>
        {/* Header */}
        <div className="header-text p-3">
          <div className="text my-5">
            <h2 className="text-center">
              Top Featured
            </h2>
          </div>
        </div>
         
         {/* Tab navigation */}
        <ul class="nav justify-content-center sticky-top">
          <li class="nav-item" onClick={setActiveNav('hotel')}>
            <p class="nav-link active" aria-current="page">Hotels</p>
          </li>
          <li class="nav-item" onClick={setActiveNav('shortLet')}>
            <p class="nav-link">Short-let</p>
          </li>
          <li class="nav-item" onClick={setActiveNav('tour')}>
            <p class="nav-link">Tours</p>
          </li>
          <li class="nav-item" onClick={setActiveNav('event')}>
            <p class="nav-link">Events</p>
          </li>
          <li class="nav-item" onClick={setActiveNav('car')}>
            <p class="nav-link">Car Rental</p>
          </li>
        </ul>

        {/* Hotels */}
        <div className="hotels" ref={hotelRef}>
          <div className="header-text p-3">
            <div className="text">
              <h2 className="text-danger" style={{fontWeight:'bold'}}>Recommended Hotels</h2>
              <h6 className="text-danger">Book Hotels in Nigeria</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="card">
                <img src={hotel1} className='card-img' alt='Lagos Continental'/>
                {/* <div className="card-img-overlay"></div> */}
                <div className="card-body">
                  <StarRating starRating={5} />
                  <h5 className="card-title">Lagos Continental Hotel</h5>
                  <p className="card-text">From <strong className='text-danger'>$120</strong> /night</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={hotel2} className='card-img' alt='Eko Hotel'/>
                {/* <div className="card-img-overlay"></div> */}
                <div className="card-body">
                  <StarRating starRating={5}/>
                  <h5 className="card-title">Eko Hotel & Suites</h5>
                  <p className="card-text">From <strong className='text-danger'>$180</strong> /night</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={hotel3} className='card-img' alt='Hilton'/>
                {/* <div className="card-img-overlay"></div> */}
                <div className="card-body">
                  <StarRating starRating={5}/>
                  <h5 className="card-title">Transcorp Hilton Abuja</h5>
                  <p className="card-text">From <strong className='text-danger'>$200</strong> /night</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={hotel4} className='card-img' alt='Sheraton'/>
                {/* <div className="card-img-overlay"></div> */}
                <div className="card-body">
                  <StarRating starRating={5}/>
                  <h5 className="card-title">Sheraton Abuja</h5>
                  <p className="card-text">From <strong className='text-danger'>$220</strong> /night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            <h6 className='text-danger mt-3' onClick={openModal} >Book 
            {/* <BsArrowBarRight className='ml-4' />  */}
            </h6>
          </div>
        </div>

        {/* ShortLet */}
        <div className="short-let" ref={shortLetRef}>
          <div className="header-text p-3">
            <div className="text">
              <h2 className="text-danger" style={{fontWeight:'bold'}}>Trending Short-Lets</h2>
              <h6 className="text-danger">Book short-let apartments and houses in your preffered destination.</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={short1} className='card-img' alt='' style={{filter:'Brightness(80%)'}}/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white" style={{fontWeight:'bold'}}>Luxurious 1-Bedroom Apartment</h5>
                </div>
                <div className="card-body">
                  <StarRating starRating={4}/>
                    <h6>Lagos</h6>
                  <p className="card-text">From <strong className='text-danger'>$100</strong> /day</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={short2} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white" style={{fontWeight:'bold'}}>2-Bedroom Apartment with Swimming pool</h5>
                </div>
                <div className="card-body">
                  <StarRating />
                  <h6>Abuja</h6>
                  <p className="card-text">From <strong className='text-danger'>$180</strong> /day</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={short3} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white" style={{fontWeight:'bold'}}>2-Bedroom Penthouse Apartment with Indoor Swimming pool</h5>
                </div>
                <div className="card-body">
                  <StarRating />
                  <h6>Abuja</h6>
                  <p className="card-text">From <strong className='text-danger'>$200</strong> /day</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={short4} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white" style={{fontWeight:'bold'}}>3-Bedroom Apartment</h5>
                </div>
                <div className="card-body">
                  <StarRating />
                  <h6>Lagos</h6>
                  <p className="card-text">From <strong className='text-danger'>$200</strong> /day</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            <h6 className='text-danger mt-3' onClick={openModal} >Book
             {/* <BsArrowBarRight className='ml-4' />  */}
             </h6>
          </div>
        </div>

        {/* Tour */}
        <div className="tours" ref={tourRef}>
          <div className="header-text p-3">
            <div className="text">
              <h2 className="text-danger" style={{fontWeight:'bold'}}>Trending Tours</h2>
              <h6 className="text-danger">Book amazing tours</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={tour1} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">Take a tour of the beautiful and romantic city of Paris. Perfect for a weekend away with your significant other.</h5>
                </div>
                <div className="card-body">
                  {/* <h6> <BiLocationPlus className='mr-4' /> Paris</h6> */}
                  
                  <p className="card-text">From <strong className='text-danger'>$700</strong> /day</p>
                  {/* <p className="card-text"> <BiTime className='mr-4' /> 3 days </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={tour2} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">Witness the breathtaking architecture and beautiful skyline of the city of Rome</h5>
                </div>
                <div className="card-body">
                  {/* <h6> <BiLocationPlus className='mr-4' /> Rome</h6> */}
                  
                  <p className="card-text">From <strong className='text-danger'>$640</strong> /day</p>
                  {/* <p className="card-text"> <BiTime className='mr-4' /> 3 days </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={tour3} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">Adventure awaits you in the mountainous region of the Swiss Alps.</h5>
                </div>
                <div className="card-body">
                  {/* <h6> <BiLocationPlus className='mr-4' /> Swiss Alps</h6> */}
                  
                  <p className="card-text">From <strong className='text-danger'>$1700</strong> /day</p>
                  {/* <p className="card-text"> <BiTime className='mr-4' /> 6 days </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={tour4} className='card-img' alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">Perfect location for a honeymoon or to relax and take your mind off work</h5>
                </div>
                <div className="card-body">
                  {/* <h6> <BiLocationPlus className='mr-4' /> Seychelles</h6> */}
                  
                  <p className="card-text">From <strong className='text-danger'>$1000</strong> /day</p>
                  {/* <p className="card-text"> <BiTime className='mr-4' /> 3 days </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            {/* <h6 className='text-danger mt-3' onClick={openModal} >Book <BsArrowBarRight className='ml-4' /> </h6> */}
          </div>
        </div>

        {/* Events */}
        <div className="events" ref={eventRef}>
          <div className="header-text p-3">
            <div className="text">
              <h2 className="text-danger" style={{fontWeight:'bold'}}>Popular Events</h2>
              <h6 className="text-danger">Book tickets to all events in Nigeria</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={event1} className='card-img' alt=''/>
                <div className="card-body">
                  <h5 className="card-title">Concerts</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={event2} className='card-img' alt=''/>
                <div className="card-body">
                  <h5 className="card-title">Sporting Events</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={event3} className='card-img' alt=''/>
                <div className="card-body">
                  <h5 className="card-title">Art & Culture Events</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={event4} className='card-img' alt=''/>
                <div className="card-body">
                  <h5 className="card-title">Fashion Shows</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            {/* <h6 className='text-danger mt-3' onClick={openModal} >Book <BsArrowBarRight className='ml-4' /> </h6> */}
          </div>
        </div>

        {/* Car Rentals */}
        <div className="cars" ref={carRef}>
          <div className="header-text p-3">
            <div className="text">
              <h2 className="text-danger" style={{fontWeight:'bold'}}>Trending Car Rentals</h2>
              <h6 className="text-danger">Rent a chaffeur driven car to any destination of your choice</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={car1} className='card-img' style={{filter:'Brightness(80%)'}} alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">Mercedes-Benz</h5>
                </div>
                <div className="card-body">
                  {/* <h6> <BiLocationPlus className='mr-4' /> Abuja</h6> */}
                  {/* <p className="card-text"> <BsGear className='mr-4' /> Auto Transmission</p>
                  <p className="card-text"> <BsPeople className='mr-4' /> 2 Seater</p>
                  <p className="card-text"> <BiGasPump className='mr-4' /> Fuel </p> */}
                  <p className="card-text">From <strong className='text-danger'>$1000</strong> /day</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={car2} className='card-img' style={{filter:'Brightness(80%)'}} alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">BMW</h5>
                </div>
                <div className="card-body">
                {/* <h6> <BiLocationPlus className='mr-4' /> Abuja</h6>
                  <p className="card-text"> <BsGear className='mr-4' /> Auto Transmission</p>
                  <p className="card-text"> <BsPeople className='mr-4' /> 4 Seater</p>
                  <p className="card-text"> <BiGasPump className='mr-4' /> Diesel </p> */}
                  <p className="card-text">From <strong className='text-danger'>$1200</strong> /day</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={car3} className='card-img' style={{filter:'Brightness(80%)'}} alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">TOYOTA</h5>
                </div>
                <div className="card-body">
                {/* <h6> <BiLocationPlus className='mr-4' /> Abuja</h6>
                  <p className="card-text"> <BsGear className='mr-4' /> Auto Transmission</p>
                  <p className="card-text"> <BsPeople className='mr-4' /> 5 Seater</p>
                  <p className="card-text"> <BiGasPump className='mr-4' /> Fuel </p> */}
                  <p className="card-text">From <strong className='text-danger'>$700</strong> /day</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            <div className="card">
                <img src={car4} className='card-img' style={{filter:'Brightness(80%)'}} alt=''/>
                <div className="card-img-overlay">
                <h5 className="card-title text-white">HONDA</h5>
                </div>
                <div className="card-body">
                {/* <h6> <BiLocationPlus className='mr-4' /> Abuja</h6>
                  <p className="card-text"> <BsGear className='mr-4' /> Auto Transmission</p>
                  <p className="card-text"> <BsPeople className='mr-4' /> 5 Seater</p>
                  <p className="card-text"> <BiGasPump className='mr-4' /> Fuel </p> */}
                  <p className="card-text">From <strong className='text-danger'>$800</strong> /day</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-end">
            {/* <h6 className='text-danger mt-3' onClick={openModal} >Book <BsArrowBarRight className='ml-4' /> </h6> */}
          </div>
        </div>

      </Container>
    </div>

    {/* Why Choose Us */}
    <div className="choose-us">
      <Container>
        <div className="header-text">
          <div className="text-center mt-5">
            <h2>Why Choose Us</h2>
          </div>
        </div>
        
        <div className="reasons p-3">
          <div className="row">
            <div className="col-md-4 col-sm-12 text-center">
              <h1>
                {/* <BiMoney color='#0275d8' size={100}/> */}
              </h1>
              <h4>Competitive Pricing</h4>
              <p>With 100+ suppliers and the purchasing power of thousands of members, Wephco can save you more.</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h1>
                {/* <FaAward color='#0275d8' size={100}/> */}
              </h1>
              <h4>Award-Winning Service</h4>
              <p>Travel worry-free knowing that we're here for you 24 hours a day</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h1>
                {/* <BiWorld color='#0275d8' size={100}/> */}
              </h1>
              <h4>Worldwide Coverage</h4>
              <p>Thousands of hotels in more than 200 countries and flights to over 1,000 cities worldwide</p>
            </div>
          </div>
        </div>
      </Container>
    </div>

    </div>
  )
}

export default Logistics;

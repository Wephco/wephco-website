import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHouseDoor, BsGlobe, BsGear, BsPeople, BsArrowBarRight } from 'react-icons/bs'
import { FaPlane, FaAward } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { GiPartyFlags } from 'react-icons/gi'
import { BiMoney, BiWorld, BiLocationPlus, BiTime, BiGasPump } from 'react-icons/bi'
import { Container } from 'react-bootstrap'
import StarRating from '../../common/StarRating';
import home1 from '../../../assets/images/home1.jpeg';
import home2 from '../../../assets/images/home2.jpeg';
import home3 from '../../../assets/images/home3.jpeg';
import home4 from '../../../assets/images/home4.jpeg';
import event1 from '../../../assets/images/event-1.jpeg';
import event2 from '../../../assets/images/event-2.jpeg';
import event3 from '../../../assets/images/event-3.jpeg';
import event4 from '../../../assets/images/event-4.jpeg';
import ContactModal from '../../common/ContactUsModal';

const RealEstate = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const saleRef = useRef(null);
  const rentRef = useRef(null);
  const buildRef = useRef(null);
  const jointVentureRef = useRef(null);
  const eventProgramRef = useRef(null);
 

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const setActiveNav = (ref) => (event) => {
    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
    event.target.classList.add('active');

    switch (ref) {
      case 'sale':
        hotelRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'rent':
        shortLetRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'build':
        tourRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'jointVenture':
        eventRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'eventProgram':
        eventRef.current.scrollIntoView({ behavior: 'smooth' });
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
    <container>
    <div className=''>
      {modal}
      <div className="logistics-header p-5">
        <div className="header-text">
          <div className="text-center text-white">
            <h1 className='p-3'>Get The Comfort You Deserve!</h1>
            <h6> Your home should tell the story of who you are and be a collection of what you love.</h6>
          </div>
        </div>
        <div className="services mt-3 p-5">
          <div className="row">

            <div className="col">
              <Link>
                <h5 className='text-white'>
                  <FaPlane className='mr-3' />
                  Sale
                </h5>
              </Link>
            </div>

            <div className="col">
              <Link>
                <h5 className="text-white">
                  <BsHouseDoor className='mr-5' />
                  Rent
                </h5>
              </Link>
            </div>

            <div className="col">
              <Link>
                <h5 className='text-white'>
                  <BsGlobe />
                  Build
                </h5>
              </Link>
            </div>

            <div className="col">
              <Link>
                <h4 className="text-white">
                  <AiFillCar className='mr-5' />
                  Joint Venture
                </h4>
              </Link>
            </div>

            <div className="col">
              <Link>
                <h4 className="text-white">
                  <GiPartyFlags />
                  Estate Programs
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
                Featured
              </h2>
            </div>
          </div>

          {/* Tab navigation */}
          <ul class="nav justify-content-center sticky-top">
            <li class="nav-item" onClick={setActiveNav('sale')}>
              <p class="nav-link active" aria-current="page">Sale</p>
            </li>
            <li class="nav-item" onClick={setActiveNav('rent')}>
              <p class="nav-link">Rent</p>
            </li>
            <li class="nav-item" onClick={setActiveNav('build')}>
              <p class="nav-link">Build</p>
            </li>
            <li class="nav-item" onClick={setActiveNav('jointVenture')}>
              <p class="nav-link">Joint Venture</p>
            </li>
            <li class="nav-item" onClick={setActiveNav('eventProgram')}>
              <p class="nav-link">Estate Programs</p>
            </li>
          </ul>

          {/* Hotels */}
          <div className="hotels" ref={saleRef}>
            <div className="header-text p-3">
              <div className="text">
                <h2 className="text-danger" style={{ fontWeight: 'bold' }}>FOR SALE</h2>
                <h6 className="text-danger">Best Homes in Nigeria</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home1} className='card-img' alt='Abuja - Wuse 2' />
                  {/* <div className="card-img-overlay"></div> */}
                  <div className="card-body">
                    <StarRating starRating={5} />
                    <h5 className="card-title">Abuja - Wuse 2</h5>
                    <p className="card-text">Asking Price <strong className='text-danger'>$140</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home2} className='card-img' alt='Lagos - Ajah' />
                  {/* <div className="card-img-overlay"></div> */}
                  <div className="card-body">
                    <StarRating starRating={5} />
                    <h5 className="card-title">Lagos - Ajah</h5>
                    <p className="card-text">Asking Price <strong className='text-danger'>$100</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home3} className='card-img' alt='Abuja - Gwarinpa Estate' />
                  {/* <div className="card-img-overlay"></div> */}
                  <div className="card-body">
                    <StarRating starRating={5} />
                    <h5 className="card-title">Gwarinpa Estate - Abuja</h5>
                    <p className="card-text">Asking Price <strong className='text-danger'>$180</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home4} className='card-img' alt='Lagos - Festac' />
                  {/* <div className="card-img-overlay"></div> */}
                  <div className="card-body">
                    <StarRating starRating={5} />
                    <h5 className="card-title">Festac - Lagos</h5>
                    <p className="card-text">Asking Price <strong className='text-danger'>$200</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <h6 className='text-danger mt-3' onClick={openModal} >Book <BsArrowBarRight className='ml-4' /> </h6>
            </div>
          </div>

          {/* For-rent */}
          <div className="for-rent" ref={rentRef}>
            <div className="header-text p-3">
              <div className="text">
                <h2 className="text-danger" style={{ fontWeight: 'bold' }}>FOR RENT</h2>
                <h6 className="text-danger">Homes and apartments for rent in Nigeria.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home1} className='card-img' alt='' style={{ filter: 'Brightness(80%)' }} />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white" style={{ fontWeight: 'bold' }}>Luxurious Semi-detached duplex</h5>
                  </div>
                  <div className="card-body">
                    <StarRating starRating={4} />
                    <h6>Abuja</h6>
                    <p className="card-text">Rent <strong className='text-danger'>$200</strong> /annum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home2} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white" style={{ fontWeight: 'bold' }}>2-Bedroom Apartment </h5>
                  </div>
                  <div className="card-body">
                    <StarRating />
                    <h6>Abuja</h6>
                    <p className="card-text">Rent <strong className='text-danger'>$180</strong> /annum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home1} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white" style={{ fontWeight: 'bold' }}>2-Bedroom Penthouse Apartment </h5>
                  </div>
                  <div className="card-body">
                    <StarRating />
                    <h6>Abuja</h6>
                    <p className="card-text">Rent <strong className='text-danger'>$200</strong> /annum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home2} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white" style={{ fontWeight: 'bold' }}>3-Bedroom Apartment</h5>
                  </div>
                  <div className="card-body">
                    <StarRating />
                    <h6>Lagos</h6>
                    <p className="card-text">Rent <strong className='text-danger'>$200</strong> /annum</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <h6 className='text-danger mt-3' onClick={openModal} >Rent <BsArrowBarRight className='ml-4' /> </h6>
            </div>
          </div>

          {/* Tour */}
          <div className="tours" ref={buildRef}>
            <div className="header-text p-3">
              <div className="text">
                <h2 className="text-danger" style={{ fontWeight: 'bold' }}>Build With Us</h2>
                <h6 className="text-danger">Let us help you build that dream home for commercial, industrial, living purposes.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home3} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Owning a home is a keystone of wealth... both financial affluence and emotional
                      security</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Abuja</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$700</strong> /project</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 3 Months </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home1} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Real estate cannot be loast or stolen, nor can it be carried away.</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Lagos</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$640</strong> /property</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 4 Months </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home4} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Invest in properties in Rivers State Nigeria, Port Harcourt city center.</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Port Harcourt</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$1700</strong> /property</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 6 Months </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home2} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Benin City, Edo State is another location full of properties to be developed. Join Us!</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Benin City</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$1000</strong> /property</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 3 Months </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <h6 className='text-danger mt-3' onClick={openModal} >Invest <BsArrowBarRight className='ml-4' /> </h6>
            </div>
          </div>

          {/* Tour */}
          <div className="tours" ref={jointVentureRef}>
            <div className="header-text p-3">
              <div className="text">
                <h2 className="text-danger" style={{ fontWeight: 'bold' }}>Joint Ventures</h2>
                <h6 className="text-danger">Join to develop and build amazing properties for sale & rent.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home1} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Owning a home is a keystone of wealth... both financial affluence and emotional
                      security</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Abuja</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$700</strong> /project</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 3 Months </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home2} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Real estate cannot be loast or stolen, nor can it be carried away.</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Lagos</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$640</strong> /property</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 4 Months </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home3} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Invest in properties in Rivers State Nigeria, Port Harcourt city center.</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Port Harcourt</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$1700</strong> /property</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 6 Months </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={home4} className='card-img' alt='' />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Benin City, Edo State is another location full of properties to be developed. Join Us!</h5>
                  </div>
                  <div className="card-body">
                    <h6> <BiLocationPlus className='mr-4' /> Benin City</h6>

                    <p className="card-text">Invest <strong className='text-danger'>$1000</strong> /property</p>
                    <p className="card-text"> <BiTime className='mr-4' /> 3 Months </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <h6 className='text-danger mt-3' onClick={openModal} >Invest <BsArrowBarRight className='ml-4' /> </h6>
            </div>
          </div>

          {/* Estate Programs */}
          <div className="events" ref={eventProgramRef}>
            <div className="header-text p-3">
              <div className="text">
                <h2 className="text-danger" style={{ fontWeight: 'bold' }}>Estate Programs / Events</h2>
                <h6 className="text-danger">Connect with realtors at events nationwide.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={event4} className='card-img' alt='' />
                  <div className="card-body">
                    <h5 className="card-title">Estate Blogs</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={event3} className='card-img' alt='' />
                  <div className="card-body">
                    <h5 className="card-title">Valuers Events</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={event2} className='card-img' alt='' />
                  <div className="card-body">
                    <h5 className="card-title">Sponsored Events</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="card">
                  <img src={event1} className='card-img' alt='' />
                  <div className="card-body">
                    <h5 className="card-title">Estate Shows</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <h6 className='text-danger mt-3' onClick={openModal} >Subscribe to events <BsArrowBarRight className='ml-4' /> </h6>
            </div>
          </div>

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
                  <BiMoney color='#0275d8' size={100} />
                </h1>
                <h4>Competitive Pricing</h4>
                <p>With 100+ suppliers and the purchasing power of thousands of members, Wephco can save you more.</p>
              </div>
              <div className="col-md-4 col-sm-12 text-center">
                <h1>
                  <FaAward color='#0275d8' size={100} />
                </h1>
                <h4>Award-Winning Service</h4>
                <p>Buy & rent with ease because we're here for you 24 hours a day</p>
              </div>
              <div className="col-md-4 col-sm-12 text-center">
                <h1>
                  <BiWorld color='#0275d8' size={100} />
                </h1>
                <h4>Worldwide Coverage</h4>
                <p>We connect you to that property, distance notwithstanding. With us you are limitless.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default RealEstate;

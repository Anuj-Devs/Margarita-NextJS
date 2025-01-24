'use client';
// src/app/dashboard/page.tsx
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { openPoppup } from '../action/index'
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import imageVal from "../../public/pngegg.png";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaLink } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LuClock9 } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";
import Carousel from '@/components/Carousel';
export default function Dashboard() {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };
  const center = {
    lat: 29.6610477438159,
    lng: -95.16138566145514,
  };
  const [floatTitle, setFloatTitle] = useState('');
  const [zipValue, setZipValue] = useState('70051');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactDetail, setContactDetail] = useState<any[]>([]); // To store the contact data
  const stateRefs = useRef<any>({});
  const servicesRef = useRef<HTMLDivElement>(null);
  const tabDetailScreen = useRef<HTMLDivElement>(null);
  const opt1 = [
    '10 "Spaceman" model 6650-C Frozen Drink Machines',
    '10 Rubbermaid Carts',
    '10 Mixing Buckets',
    '30 Cases of MR. MARGARITA MIX',
    '10 Twelve gauge cords',
    '1 MR. MARGARITA WEBSITE WITH DOMAIN & HOSTING!!!'
  ]
  const data13 = {
    name: "Houston, TX",
    number: "713-664-RITA"
  }
  const [selectedData, setSelectedData] = useState(data13);
  const [option1, setOption1] = useState(opt1);
  const opt2 = [
    '5 "Spaceman" model 6650-C Frozen Drink Machines',
    '5 Rubbermaid Carts',
    '5 Mixing Buckets',
    '15 Cases of MR. MARGARITA MIX',
    '5 Twelve gauge cords',
    '1 MR. MARGARITA WEBSITE WITH DOMAIN & HOSTING!!!'
  ]
  const [option2, setOption2] = useState(opt2);
  const opt3 = [
    '3 "Spaceman" model 6650-C Frozen Drink Machines',
    '3 Rubbermaid Carts',
    '3 Mixing Buckets',
    '10 Cases of MR. MARGARITA MIX',
    '3 Twelve gauge cords',
    '1 MR. MARGARITA WEBSITE WITH DOMAIN & HOSTING!!!'
  ]
  const [option3, setOption3] = useState(opt3);
  const obj = [
    'Home',
    'ONLINE RESERVATIONS',
    'MARGARITA MACHINE RENTALS',
    'PARTY RENTALS (TABLES CHAIRS etc)',
    'MACHINE SALES',
    'MARGARITA MACHINE MIXES & RECIPES',
    'THE BUSINESS OPPORTUNITY',
    'FREQUENTLY ASKED QUESTIONS (faq)',
    'OUR LOCATIONS'
  ]
  const queAns = [
    {
      "question": "Do I own the name?",
      "answer": "MR MARGARITA IS A UNIVERSAL TRADEMARKED & PROTECTED NAME. YOU WILL BE GRANTED A LICENSE TO USE THE NAME."
    },
    {
      "question": "Is my territory restricted?",
      "answer": "No, your territory is not restricted."
    },
    {
      "question": "Do you really want to travel 100 miles - ONE WAY?",
      "answer": "No, you will not need to travel such long distances regularly."
    },
    {
      "question": "Can I shop for deals on supplies?",
      "answer": "YES - WE WILL HELP"
    },
    {
      "question": "Do I have to buy a certain amount of mix every month?",
      "answer": "NOT AT ALL"
    },
    {
      "question": "Do I have flexibility & control of my operations?",
      "answer": "OF COURSE - ITS YOUR COMPANY"
    },
    {
      "question": "Does MR. MARGARITA produce its own mix?",
      "answer": "YES - UNLIKE MOST OF OUR COPYCAT COMPETITORS - WE ACTUALLY HAVE OUR OWN MIX PLANT!!! ASK AND SEE FOR YOURSELF!!!"
    },
    {
      "question": "Do I get support from MR.MARGARITA?",
      "answer": "YOU HAVE A FULL FAMILY OF SUPPORT HERE TO GUIDE YOU TOWARD SUCCESS."
    },
    {
      "question": "Can I build my own website?",
      "answer": "YES"
    },
    {
      "question": "Can you help build one for us?",
      "answer": "YES"
    },
    {
      "question": "Do you pay for the hosting?",
      "answer": "YES"
    },
    {
      "question": "Do you pay for the domain name?",
      "answer": "YES"
    },
    {
      "question": "Can I make changes in that website?",
      "answer": "YES"
    },
    {
      "question": "Do you put a link on your site to mine?",
      "answer": "OF COURSE"
    },
    {
      "question": "Will you list our number on your site as well?",
      "answer": "MOST DEFINITELY"
    },
    {
      "question": "Does MR. MARGARITA do Internet advertising?",
      "answer": "YES"
    },
    {
      "question": "In MY Territory?",
      "answer": "YES"
    },
    {
      "question": "Does MR. MARGARITA do Radio Commercials?",
      "answer": "YES"
    },
    {
      "question": "Does MR. MARGARITA do Newspaper ads?",
      "answer": "YES"
    },
    {
      "question": "Does MR. MARGARITA do PRESS RELEASES?",
      "answer": "YES"
    },
    {
      "question": "How do you help advertise for me?",
      "answer": "SEE ABOVE - YES"
    },
    {
      "question": "Do I have to pay renewal fees every year?",
      "answer": "YES, TO HELP THE TEAM PAY FOR THE ABOVE. THE FEE IS LESS THAN 5 RENTALS! LOOK FOR THE 'HIDDEN FEES' LIKE 'YEARLY WEBSITE MAINTENANCE FEES' WITH OUR 'network partner' COMPETITORS!"
    }
  ]
  const [QueAnswerObejct, setQueAnswer] = useState(queAns);
  const faqList = [
    {
      "question": "How much is it to rent a margarita machine from Mr Margarita?",
      "answer": "Our prices are $125.00 for a single which includes a single Mr Margarita margarita machine, 25 - 10oz. cups, extension chord (if needed), 1 of our 5-gal. pre-measured mixing buckets, and a heavy duty Rubbermaid cart. $175.00 for a double which includes a double Mr Margarita margarita machine, 50 - 10oz. cups, extension chord (if needed), 2 of our 5-gal. pre-measured mixing buckets, and a heavy duty Rubbermaid cart. We will also set it up for you. Each additional bottle of mix is $20.00. Any unopened bottles are returnable and refundable. It is better to be long than short on mix supply."
    },
    {
      "question": "Are the machines easy to use?",
      "answer": "Yes indeedee! At delivery, each easy step of machine operation and refilling procedures are covered verbally to ensure a successful event. Easy to follow instructions are always left behind for reference. We mix your first batch and show you how to use the machine! NO BARTENDER REQUIRED, NO CO2 CARTRIDGES, NO BLENDER, NO ICE, NO MESS!"
    },
    {
      "question": "How many drinks does one batch yield?",
      "answer": "One batch of margaritas makes about 55 ten-ounce drinks. The machine will hold about one whole batch (5 gallons of mix). Our experience shows that usually half or more guests drink the frozen drinks even if you offer a choice. We recommend one batch for every 25 frozen beverage drinkers. Extra margarita mix is $20.00 and refundable if unopened."
    },
    {
      "question": "How long does the first batch take?",
      "answer": "Indoors about 30-45 minutes, outside on warm days, up to an hour. There is no waiting between batches because you add to the reservoir when the mix-low light comes on. We recommend that if you use a machine outdoors, you will get the best performance if you keep it in the shade."
    },
    {
      "question": "Who provides the liquor and how much will I need?",
      "answer": "The customer provides all liquor. A medium strength batch of margaritas calls for two liters of tequila, and 1 liter of triple sec. Check out the Recipes page to judge other mix ratios."
    },
    {
      "question": "Are other kinds of drinks available?",
      "answer": "Absolutely. You can serve Strawberry Daiquiris, Margaritas, Piña Coladas, Louisiana Hurricanes. All can be made as non-alcoholic fruit slushies FOR KIDS!"
    },
    {
      "question": "How far in advance should I reserve my machine?",
      "answer": "We recommend 2-4 weeks and longer for holiday seasons and traditional party dates like Halloween and New Year's Eve. One machine will deliver frozen drinks for up to 75 frozen beverage drinkers. If more guests are expected, a second machine is strongly recommended; otherwise, the machine will not perform properly."
    }
  ]
  const [faqScreen, setFaqScreen] = useState(faqList);
  const data1 = [
    "Margarita Machine Rentals Houston",
    "Houston Party Equipment Rentals Friendswood",
    "Party Equipment Rental Clear Lake",
    "Wedding Equipment Rentals Alvin",
    "Rental",
    "Rentals Pearland",
    "Margarita Machines Deer Park Pasadena",
    "Party Rental",
    "League City Party Rentals",
    "Wedding Rental",
    "Tents",
    "Tables",
    "Chairs Pearland Alvin",
    "Party Equipment Dickinson",
    "Margarita Machine",
    "Santa Fe Wedding Rentals Galveston",
    "Memorial Party Equipment Rentals Friendswood Party Equipment Rental Clear Lake Wedding Equipment Rentals Alvin Rental",
    "Rentals Pearland",
    "Margarita Machines Deer Park And Pasadena",
    "Party Rental",
    "League City Party Rentals Houston",
    "Wedding Rental Seabrook",
    "Tents Tables Chairs Kemah",
    "San Leon Party Equipment Dickinson",
    "Margarita Machine South Houston",
    "Wedding Rentals Galveston"
  ]
  const [bottomData, setBottomdata] = useState(data1);
  const [optionValue, setOptionValue] = useState(obj);
  const [activeTab, setActiveTab] = useState<string>('Home');
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactMePageRef = useRef<HTMLDivElement>(null);
  const handleTabClick = (tab: string, index: number, isScroll: boolean) => {
    setActiveTab(tab);
    console.log('tab', tab)
    if (tab !== 'OUR LOCATIONS') {
      if (index === 1) {
        setFloatTitle('NO EASIER WAY TO BOOK YOUR EVENT - JUST FILL OUT FORM BELOW');
      } else if (index === 2) {
        setFloatTitle('DO WE HAVE MARGARITA MACHINES? WE SURE DO!!!');
      } else if (index === 3) {
        setFloatTitle(`IT'S PARTY TIME!!! GET THE BEST AND CHEAPEST GOODS AROUND!!`);
      } else if (index === 4) {
        setFloatTitle(`FROZEN BEVERAGE MACHINES - MARGARITA MACHINES! - DAIQUIRI'S - WE GOT EM!!!`);
      } else if (index === 5) {
        setFloatTitle('MARGARITAS - STRAWBERRY - RUM RUNNER - PINA COLADA - HURRICANE -  LEMONADE - AND MORE!!!');
      } else if (index === 6) {
        setFloatTitle('THE BEST GIG IN TOWN - JOIN OUR TEAM!!!');
      } else if (index === 7) {
        setFloatTitle('YOU GOT QUESTIONS? WE GOT ANSWERS!!');
      } else if (index === 0) {
        setFloatTitle('');
      }
    }
    // If the "OUR LOCATIONS" tab is clicked, scroll to the contact information section
    if (tab === 'OUR LOCATIONS' && contactInfoRef.current) {
      const elementPosition = contactInfoRef.current.getBoundingClientRect().top + window.pageYOffset;
      setFloatTitle('');
      window.scrollTo({
        top: elementPosition - 30, // Adjust for offset
        behavior: 'smooth',
      });
    }
    if (isScroll && tab !== 'OUR LOCATIONS') {
      if (tabDetailScreen.current) {
        tabDetailScreen.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  useEffect(() => {
    const fetchContactData = async () => {
      const response = await fetch('/ContactData.json');
      const data = await response.json();
      setContactDetail(data); // Set the data to state
    };

    fetchContactData();
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let obj = {
      name: "Houston, TX",
      number: "713-664-RITA"
    }
    setSelectedData(obj);
  }, []);

  const selectName = (values: object) => {
    console.log('values', values)
    handleCardClick();
    setSelectedData(values);
  }

  const openMap = (val: string) => {
    const searchQuery = encodeURIComponent(val);
    const url = `https://www.google.com/maps/search/?q=${searchQuery}`;

    // Open the URL in a new tab
    window.open(url, '_blank');
  }
  const redirectFB = () => {
    const url = `https://www.facebook.com/people/Mr-Margarita/100063973035011/?ref=hl`;
    window.open(url, '_blank');
  }

  const scrollToState = (state: string) => {
    console.log('state', state, stateRefs);
    let data = state === 'AZ' ? 'Arizona' : state === 'CA' ? 'California' : state === 'FL' ? 'Florida' : state === 'LA' ? 'Louisiana' : 'Texas'
    stateRefs.current[data]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleCardClick2 = () => {
    setIsPopupOpen1(!isPopupOpen1);
  };
  const handleCardClick = () => {
    setIsPopupOpen(!isPopupOpen);
    dispatch(openPoppup(false));
  };

  const handleContactsClick = () => {
    console.log("Contacts button clicked!");
    if (contactMePageRef.current) {
      contactMePageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    handleCardClick();
  };
  const handleserviceArea = () => {
    if (contactInfoRef.current) {
      const elementPosition = contactInfoRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 20, // Adjust for offset
        behavior: 'smooth',
      });
    }
  };
  const handleAboutmore = () => {
    if (tabDetailScreen.current) {
        tabDetailScreen.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setFloatTitle('');
      setActiveTab('Home');
  };

  const mySTatte = useSelector((state: any) => state.changeTheNumber);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mySTatte.isPopupOpen === true) {
      handleCardClick();
    }
  }, [mySTatte]);

  console.log('TEST---->', mySTatte);

// form code
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [dayPhone, setDayPhone] = useState('');
  const [eveningPhone, setEveningPhone] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [machineType, setMachineType] = useState('');
  const [mixFlavors, setMixFlavors] = useState([]);
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form data to your server here
    console.log({
      name,
      deliveryAddress,
      zipCode,
      dayPhone,
      eveningPhone,
      email,
      guests,
      date,
      time,
      machineType,
      mixFlavors,
      comments,
    });
  };
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      console.log('window.scrollY', window.scrollY)
      // Scroll position kitni hai
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navbar selectedData={selectedData} onContactsClick={handleContactsClick} aboutMore={handleAboutmore} serviceArea={handleserviceArea} />
      <div className="subTheme h-screen min-h-screen bg-gray-100">
        <div className='bgImage h-full text-center justify-center flex items-center'>
          <div className='absolute'>
            <div className='titleText mx-64 justify-center text-center '>Margarita machine rentals Houston, Pasadena, League City, Pearland, Galveston party rentals, tables for rent, chairs - Houston parties.</div>
            <div className='subtitleText mx-96 justify-center text-center pt-8'>
            <TypeAnimation
              sequence={[
                "For margarita machines & party rentals inside beltway 8 - south houston - pearland - deer park - laporte - friendswood - clear lake - galveston",
                1000,
                "",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>
            {/* <div className='subtitleText mx-96 justify-center text-center pt-8'>For margarita machines & party rentals inside beltway 8 - south houston - pearland - deer park - laporte - friendswood - clear lake - galveston</div> */}
            <div className='pt-12 flex items-center justify-center'>
              <button className=' rounded-md shadow-xl mx-4 p-4 px-8 bg-red-500 text-white hover:bg-white hover:text-black ' onClick={scrollToServices}>CHECK SERVICES</button>
              <button onClick={() => handleContactsClick()} className=' rounded-md shadow-xl mx-4 p-4 px-8 bg-white text-black hover:bg-red-500 hover:text-white '>GET QUOTE</button>
            </div>
          </div>
        </div>
        {/* <div>
          <Carousel />
        </div> */}
        <div ref={servicesRef} className='pt-4 text-black bg-white pb-8 bg_custom'>
          <div className='text-center heading1111 font-bold text-text2'>Services</div>
          <div className='grid lg:grid-cols-2'>
            <div>
              <div className='flex justify-end pr-20'>
                <svg style={{ width: '400px' }} viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="blob-674080084d755">
                      <path fill="#474bff" d="M395.5,302.5Q312,365,233.5,376.5Q155,388,97.5,314Q40,240,90,153.5Q140,67,243.5,61Q347,55,413,147.5Q479,240,395.5,302.5Z"></path>
                    </clipPath>
                  </defs>
                  <image
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    clipPath="url(#blob-674080084d755)"  // Update to clipPath
                    href="https://vendomat.modeltheme.com/wp-content/uploads/2020/08/Main-Blog_post2.jpg"  // Use href instead of xlink:href
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
                {/* <Image alt='Images' className='border rounded-full w-80 hover:scale-105 cursor-pointer transition delay-100 shadow-2xl' src={imageVal} /> */}
              </div>
            </div>
            {/* <div className="">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="svg-block">
                    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="blob-674080084d755">
                          <path fill="#474bff" d="M395.5,302.5Q312,365,233.5,376.5Q155,388,97.5,314Q40,240,90,153.5Q140,67,243.5,61Q347,55,413,147.5Q479,240,395.5,302.5Z"></path>
                        </clipPath>
                      </defs>
                      <image
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        clipPath="url(#blob-674080084d755)"  // Update to clipPath
                        href="https://vendomat.modeltheme.com/wp-content/uploads/2020/08/Main-Blog_post2.jpg"  // Use href instead of xlink:href
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='cardPadding flex items-center'>
              <div className='px-4 my-6'>
                <div className=''>
                  <div className='heading2 font-semibold text-gray-800'>Enter Your Zip Code Below To See Which Location You Need!!</div>
                  <div className='pr-2 heading5 font-semibold pt-5'><i className="fas fa-magnifying-glass"></i> Enter your zip code here</div>
                  <div>
                    <input placeholder='Search Zip Here...' onChange={(e) => setZipValue(e.target.value)} type='text' value={zipValue} className='h-10 border border-gray-600 rounded-lg heading4 card cardPadding w-96 bg-white ring-0 space letterspaccing' />
                  </div>
                  {zipValue !== '' ? (
                    <div className='pt-4'>
                      <button className='w-96 rounded-md shadow-xl p-4 px-8 bg-red-500 text-white hover:bg-white hover:text-black '>GO</button>
                    </div>
                  ) : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='bg-white card' ref={tabDetailScreen}>
          <div className='cursor-pointer text-center flex'>
            {optionValue.map((city, index) => (
              <div
                key={city}
                onClick={() => handleTabClick(city, index, false)}
                className={`rounded my-2 cursor-pointer transition border border-transparent flex items-center mx-1 ${activeTab === city
                    ? 'bg-green-800'
                    : 'bg-white'
                  } ${activeTab === city ? 'border border-green-800' : 'hover:border hover:border-gray-400'}`}
              >
                <div
                  className={`p-1 heading6 font-semibold ${activeTab === city ? 'text-white' : 'text-black'
                    }`}
                >
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='divider'></div>
        {/* Content Section */}
        {(floatTitle || activeTab !== 'OUR LOCATIONS') && (
          <div className='text-black bg-white pb-8 pt-2'>
            {floatTitle && (
              <div className='px-4 pb-4 text-center'>
                <div className='animate-marquee text-red-600 font-bold heading2'>{floatTitle}</div>
              </div>
            )}
            <div className=''>
              {activeTab === 'Home' && (
                <div className='pt-4 text-black  pb-4 cardBg'>
                <div className=''>
                  <div className=' cardPadding text-center'>
                    <div className='heading4 text2'>MR. MARGARITA's PARTY RENTALS STORE started out in Houston renting margarita machines in 1999. We have been in the frozen beverage business since 1986 working in and around daiquiri shops during college in Louisiana.Frozen Daiquiri's (especially hurricanes) are the perfect way to cool off on those hot humid Louisiana nights. In 1998 we moved to Houston, Texas and couldn't find any Daiquiri Shops to quench our thirsts for home. So we bought a slushy machine from a daiquiri supply store in Louisiana and soon found it at our neighbors houses more than ours! We quickly realized that we had a really unique market. So our Houston, TX party rentals business began with three frozen slushy machines as MR. MARGARITA (Mr. Daiquiri machine rentals just did not sound right in Texas!). Now we rent out over 50 daiquiri and margarita machines (same thing!) and have created a network of home based MR. MARGARITA party machine rental companies across America. Come on in and see why Mr. Margarita has become a trusted source for party rentals!</div>
                  </div>
                  <div className='bg-white card cardPadding col-span-2 grid lg:grid-cols-2 m-8 my-4 mx-20'>
                    <div className='p-2'>
                      <div className='text-center'>YOU CAN RENT THIS...</div>
                      <div className='flex items-center justify-center border border-gray-400 rounded-lg'>
                        <img className='hover:scale-110 transition py-4' src='/image2.png' style={{ width: '280px' }} />
                      </div>
                      <div className='text-center'>STAINLESS COMMERCIAL</div>
                    </div>
                    <div className='p-2'>
                      <div className='text-center'>INSTEAD OF THIS...</div>
                      <div className='flex items-center justify-center border border-gray-400 rounded-lg'>
                        <img className='hover:scale-110 transition py-4' src='/image1.png' style={{ width: '280px' }} />
                      </div>
                      <div className='text-center'>PLASTIC</div>
                    </div>
                  </div>
                  <div className='heading4 text2 cardPadding text-center'>
                  Clear Lake Margarita Machine Rentals, League City Margarita Machine Rental, Seabrook Kemah Margarita Machine Rentals, Texas City Pearland Margarita Machine Rentals, Pearland Friendswood Margarita Machine Rentals, Pasadena Deer Park Margarita Machines for Rent, Webster LaPorte.
                  </div>
                </div>
              </div>
              )}
              {activeTab === 'ONLINE RESERVATIONS' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">Reserve your Machine online!</div>
                  <div className='pt-4 pb-4'>Use the form below to make your reservation. All that is required is your name and some contact information. However, the more information you provide, the better able we will be to serve you. Thanks in advance for your interest in Mr Margarita.</div>
                  <div className='p-4 card bg-white border border-gray-300 mx-6'>
                    <div className='text-center font-semibold text-text2'>Reserve a Margarita Machine</div>
                    <div>
                    <form onSubmit={handleSubmit}>
                      <div className='grid lg:grid-cols-2 gap-2'>
                        <div className="mb-4">
                          <label htmlFor="name" className="-mb-3 heading7 text-text3 font-semibold">
                            Your Name:
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="deliveryAddress"
                            className="-mb-3 heading7 text-text3 font-semibold"
                          >
                            Delivery Address:
                          </label>
                          <input
                            type="text"
                            id=" deliveryAddress"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <div className='grid lg:grid-cols-2 gap-2'>
                        <div className="mb-4">
                          <label htmlFor="zipCode" className="-mb-3 heading7 text-text3 font-semibold">
                            Zip Code:
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="dayPhone" className="-mb-3 heading7 text-text3 font-semibold">
                            Day Phone:
                          </label>
                          <input
                            type="text"
                            id="dayPhone"
                            value={dayPhone}
                            onChange={(e) => setDayPhone(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <div className='grid lg:grid-cols-2 gap-2'>
                        <div className="mb-4">
                          <label htmlFor="eveningPhone" className="-mb-3 heading7 text-text3 font-semibold">
                            Evening Phone:
                          </label>
                          <input
                            type="text"
                            id="eveningPhone"
                            value={eveningPhone}
                            onChange={(e) => setEveningPhone(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="-mb-3 heading7 text-text3 font-semibold">
                            Email:
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <div className='grid lg:grid-cols-3 gap-2'>
                        <div className="mb-4">
                          <label htmlFor="guests" className="-mb-3 heading7 text-text3 font-semibold">
                            Number of Guests:
                          </label>
                          <input
                            type="number"
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="date" className="-mb-3 heading7 text-text3 font-semibold">
                            Party Date:
                          </label>
                          <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="date" className="-mb-3 heading7 text-text3 font-semibold">
                            Party Time:
                          </label>
                          <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <div className='grid lg:grid-cols-2 gap-2'>
                        <div className="mb-4">
                          <label htmlFor="machineType" className="-mb-3 heading7 text-text3 font-semibold">
                            Machine Type:
                          </label>
                          <input
                            type="text"
                            id="machineType"
                            value={machineType}
                            onChange={(e) => setMachineType(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      <div className="mb-4">
                          <label htmlFor="mixFlavors" className="-mb-3 heading7 text-text3 font-semibold">
                            Mix Flavors:
                          </label>
                          <input
                type="text"
                            id="mixFlavors"
                            value={mixFlavors.join(', ')}
                            onChange={(e) => setMixFlavors(e.target.value.split(',').map(flavor => flavor.trim()))}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <div className='grid lg:grid-cols-2 gap-2'>
                        <div className="mb-4">
                          <label htmlFor="comments" className="-mb-3 heading7 text-text3 font-semibold">
                            Comments:
                          </label>
                          <textarea
                            id="comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <div className='grid justify-center'>
                        <button type="submit" className=' rounded-md shadow-xl mx-4 p-4 px-8 bg-red-500 text-white hover:bg-white hover:text-black '>Send Reservation</button>
                        
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'MARGARITA MACHINE RENTALS' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">Margarita Machine Rentals</div>
                  <div className='text-center pt-2'>
                    <div className='heading5 pb-1'>Want to enjoy your party?</div>
                    <div className='heading5 pb-1'>Want great tasting Margaritas?</div>
                    <div className='heading5 pb-1'>Want your equipment to work???</div>
                    <div className='heading5 pb-1'>Then your at the right place....</div>
                    <div className='font-bold'>Houstons ONLY Choice for frozen Margarita Machine Rentals!!!</div>
                    <div className='bg-white card cardPadding col-span-2 grid lg:grid-cols-2 m-8 my-2 mx-20'>
                      <div className='p-2'>
                        <div className='text-center'> WHY RENT THIS -</div>
                        <div className='flex items-center justify-center border border-gray-400 rounded-lg'>
                          <img className='hover:scale-110 transition py-4' src='/image3.jpg' style={{ width: '190px' }} />
                        </div>
                      </div>
                      <div className='p-2'>
                        <div className='text-center'>WHEN YOU CAN HAVE THIS?? </div>
                        <div className='flex items-center justify-center border border-gray-400 rounded-lg'>
                          <img className='hover:scale-110 transition py-4' src='/image4.webp' style={{ width: '190px' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'PARTY RENTALS (TABLES CHAIRS etc)' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">Even More Rentals items for your Party</div>
                  <div className='pt-4'>Mr Margarita provides so much more than just margarita machines and mixes.  We stock everything you need to outfit your party.  Tents, tables and chairs are just the beginning of what we can provide for your party.</div>
                  <div className='flex items-center justify-center rounded-lg'>
                    <img className='hover:scale-105 transition py-4 cursor-pointer' onClick={() => openMap('Mr. Margarita')} src='/image6.jpg' style={{ width: '490px' }} />
                  </div>
                </div>
              )}

              {activeTab === 'MACHINE SALES' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">We sell Commercial Machines at DISCOUNT PRICES</div>
                  <div className='heading4 pt-4'>Mr Margarita is the FROSTY FACTORY beverage freezer distributor for ALL of Texas.</div>
                  <div className='heading4 pt-4'>These commercial frozen beverage machines come in a variety of sizes for various applications. We are sure to have a machine to fit your needs! We Sell and Ship our products nation-wide. Call or Email today for current pricing and let our experienced staff find the right machine for your needs!</div>
                  <div className='pt-4 font-semibold'>713.664.RITA</div>
                </div>
              )}

              {activeTab === 'MARGARITA MACHINE MIXES & RECIPES' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">THE MIXES AND RECIPES PAGE!!!</div>
                  <div className='py-4 font-semibold pl-20'> go ahead - ask!!!!</div>
                  <div className='heading5 italic pb-4'>Why should you purchase our product instead of what you can find at your local liquor store?</div>
                  <div className='font-semibold pl-32'> duh....</div>
                  <div className='heading5 pt-4'>We are NOT hard liquor manufacturers that produce a product just to increase our liquor sales. These types of companies are satisfied with serving artificial flavors and add extreme amounts of preservatives which always - always, leave an aftertaste. <span className='font-semibold'>SHAME ON THEM!!!</span> Mr. Margarita takes pride in producing its very own products which we consider to be the best around - not too tart - not too sweet. Perfect for even those picky palates. We believe you just can't find a better flavored</div>
                  <div className='heading5 pt-4'>BESIDES - OUR PRODUCTS ARE MADE ESPECIALLY FOR MARGARITA MACHINES</div>
                  <div className='heading5 pt-4'>Mr. margarita's products are the benchmark of the industry. far too many companies have tried to copy our unique tastes and blends and have fallen short. WE ARE ALWAYS THE LEADERS!</div>
                </div>
              )}

              {activeTab === 'THE BUSINESS OPPORTUNITY' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">How to become a Mr. Margarita Distributor</div>
                  <div className='text-center pt-4 heading4 text-text2'>
                    <div className='pb-2'>Want to be your own boss?</div>
                    <div className='pb-2'>Want more time with your kids?</div>
                    <div className='pb-2'>Want to earn more money?</div>
                    <div className='pb-2'>Want a better life?</div>
                    <div className='pb-2'>This is the place!!!</div>
                  </div>
                  <div className='text-center'>
                    <div className='justify-center items-center flex text-white h-12  font-semibold bg-red-500 italic'>BECOME YOUR OWN BOSS TODAY!!!</div>
                    <div className='py-3'>NOW IS THE TIME TO BECOME YOUR OWN BOSS!</div>
                    <div className='pb-2'>For further information, call</div>
                    <div className='pb-2'>713-664-RITA (7482)</div>
                    <div >Mr. Margarita - Margarita Machine Rentals, Margarita Machine Sales and Mixes.  Houston, Texas</div>
                    <div className='pt-2'>Mr. Margarita Distributorship Offer</div>
                    <div className='underline text-blue-500 py-4'>Come see why "The Good Times are Rolling at Mr. Margarita"</div>
                    <div>HOUSTON BUSINESS JOURNAL 7/4/2003</div>
                    <div className='pt-4 text-text2 font-semibold'>Note: If you have already rented a Margarita Machine or other products from Mr Margarita here in Houston Texas, you know what a great service it is. We are currently in the process of offering distributorships for the purpose of frozen beverage margarita machine rentals and sales throughout the United States. Through the years, we have continued to refine our system and improve our award-winning line of mixes. We have what we believe to be the BEST mix with the BEST machines and many years of training and experience along with our cheerful Mr. Margarita trademarked design logo all add up to satisfied customers, steady growth and a quicker profit picture. We would now like to introduce this great opportunity to YOU.</div>
                  </div>
                  <div className='grid lg:grid-cols-2 gap-4'>
                    <div className='pt-6'>
                      <div className='font-semibold'>OPTION 1 - Suggested start up items for $81,000</div>
                      <div className='pl-4 heading5 text-text2 pt-2'>*This is assuming you have a delivery vehicle such as a pickup truck, van or SUV</div>
                      <div className='pt-2 pl-4'>
                        {option1.map((data) => (
                          <div key={data} className={`mb-1`}>
                            <li className={`p-1 heading5 font-semibold`}>
                              {data}
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='pt-6'>
                      <div className='font-semibold'>OPTION 2 - Suggested start up items for $42,000</div>
                      <div className='pl-4 heading5 text-text2 pt-2'>*This is assuming you have a delivery vehicle such as a pickup truck, van or SUV</div>
                      <div className='pt-2 pl-4'>
                        {option2.map((data) => (
                          <div key={data} className={`mb-1`}>
                            <li className={`p-1 heading5 font-semibold`}>
                              {data}
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                    <div className='font-semibold'>OPTION 3 - Suggested start up items for $27,000</div>
                    <div className='pl-4 heading5 text-text2 pt-2'>*This is assuming you have a delivery vehicle such as a pickup truck, van or SUV</div>
                    <div className='pt-2 pl-4'>
                      {option3.map((data) => (
                        <div key={data} className={`mb-1`}>
                          <li className={`p-1 heading5 font-semibold`}>
                            {data}
                          </li>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='text-center pt-8'>
                    <div className='text-text2 font-semibold'>ANY SELECTION LESS IS JUST PLAIN FALSE HOPE!!!</div>
                    <div className='text-text2 heading6 font-semibold'>(OUR QUICK MONEY COMPETITORS WILL NEVER TELL YOU THAT)</div>
                    <div className='text-text2 heading5 font-semibold italic pt-2'>**Option 2 is your best bet but you can get started with Option 3. You can be up and running instantly!**</div>
                    <div className='pt-2 heading5'>You will receive the exclusive rights to do business as "Mr Margarita" in your hometown, and surrounding area.</div>
                    <div className='pt-2'>There are no up front fees and no royalties! You keep all of your profits!</div>
                  </div>
                  <div className='pt-8'>
                    <div className='font-semibold heading4'>YOUR QUESTIONS ANSWERED...</div>
                    <div className='pt-2 pl-4'>
                      {QueAnswerObejct.map((data, index) => (
                        <div key={data.question} className={`mb-2`}>
                          <div className='items-start'>
                            <div className='text-text4 heading5 font-semibold'><span className='pr-2 heading3 font-bold text-blue-600'>Q.</span>{data.question}</div>
                            <div className='text-text2 heading5'><span className='pr-2 heading3 font-bold text-red-600'>A.</span>{data.answer}</div>
                          </div>
                          <div className='simple-divider'></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='text-center text-text2 heading5'>
                    <div className='py-4'>ITS THAT SIMPLE</div>
                    <div>There is an initial three year contract with a $1000.00 renewal fee in April of each anniversary year.  This fee is used to continuously promote your business and websites as well as your team members.</div>
                    <div className='py-4'>All mix and frozen beverage machines or margarita machines will be purchased from the headquarters of Mr Margarita. All other supplies will be purchased at the distributor's discretion. (We charge our clients $20.00 per bottle of mix and $125.00 for a machine rental) You can set your own rates. Your quality is assured by selling only Mr Margarita mix to your customers. So you see, our prosperity depends on your success.</div>
                    <div className='py-4'>We now have a small network of Mr Margarita distributors and associates in Houston Texas. To date that's over 80 machines in Houston and growing! As a network, we help each other out with rentals if short on machines and share our marketing and advertising ideas. You would also receive any waiting list customers from neighboring counties or populaces if needed. The larger we become, the more name recognition Mr Margarita receives. About 90% of all our customers say what a great idea Mr Margarita is and they wished they had thought of it.  <span className='font-semibold'>WHEN QUALITY & INTEGRITY COUNT - MR. MARGARITA DELIVERS</span></div>
                    <div className='text-start'>Always has Always will.</div>
                    <div className='py-4 italic'>
                    Our website has not been reviewed or approved by the California Department of Corporations. Any complaints concerning the content of this website may be directed to the California Department of Corporations at www.corp.ca.gov.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'FREQUENTLY ASKED QUESTIONS (faq)' && (
                <div className='card border border-gray-200 rounded-lg mx-4 p-4'>
                  <div className="heading2 font-semibold">Frequently Asked Questions</div>
                  <div className='pt-2 pl-4'>
                    {faqScreen.map((data, index) => (
                      <div key={data.question} className={`mb-2`}>
                        <div className='items-start'>
                          <div className='text-text4 heading5 font-semibold'><span className='pr-2 heading3 font-bold text-blue-600'>Q.</span>{data.question}</div>
                          <div className='text-text2 heading5'><span className='pr-2 heading3 font-bold text-red-600'>A.</span>{data.answer}</div>
                        </div>
                        {index < faqScreen.length - 1 && <div className='simple-divider'></div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'Home' && (
          <div>
            <div className=' text-black bg-white pb-8 pt-4'>
              <div className='grid lg:grid-cols-3 gap-4 pb-4 mx-20'>
                <div className=' card '>
                  <div className='static top-0 z-10 justify-center items-center flex text-white h-12  font-semibold bg-red-500'>PARTY RENTALS</div>
                  <div className='heading6 overflow-auto h-80 pt-4 px-4'>
                    <div>Mr. Margarita's party rentals now offers almost everything for your special event . From wedding to parties. Let us help make your party a memorable one. </div>
                    <div className='pt-1'>{`30TH BIRTHDAY PARTY, 40TH BIRTHDAY PARTY IDEAS, HALLOWEEN PARTY IDEAS, BACHELORETTE, BACHELORETTE PARTIES, BACHELORETTE PARTY, BACHELORETTE PARTY IDEAS, BIRTHDAY, BIRTHDAY PARTY IDEAS, CHAIR RENTAL, CHAIRS, CHRISTMAS PARTIES, PARTY RENTALS, COLLEGE GRADUATION PARTY IDEAS, DAIQUIRI, DANCE FLOOR RENTAL,  DISCOUNT PARTY SUPPLIES, DRINK, DRINK MACHINE, DRINK MACHINE RENTALS, MIXES, FROZEN, FROZEN BEVERAGE MACHINE, DAIQUIRI, DRINK MACHINE, RENTALS, FROZEN DRINK MACHINES, FROZEN MARGARITA, GRADUATION PARTY IDEAS, HALLOWEEN PARTY IDEAS, HIGH SCHOOL GRADUATION PARTY IDEAS, WEDDING, WEDDING IDEAS, WEDDING RECEPTION RENTALS, WEDDING RENTALS, WEDDING RENTALS HOUSTON, WEDDINGS`
                      .split(',') // Split by commas
                      .map((item, index) => (
                        <span key={index} className="block">{item.trim()},</span> // Trim spaces and display each on a new line
                      ))}</div>
                  </div>
                </div>
                <div className=' card '>
                  <div className='static top-0 z-10 justify-center items-center flex text-white h-12  font-semibold bg-red-500'>SPECIALS!!!</div>
                  <div className='text-center heading6 overflow-auto h-80 pt-4 px-4'>
                    <div className='hover:underline cursor-pointer text-blue-500'> WEEKEND RENTAL SPECIAL </div>
                    <div>YOU PICK IT UP!!!!</div>
                    <div className='pt-1'>SINGLE</div>
                    <div className='pt-1 font-bold'>$125</div>
                    <div className='pt-1'>YOU PICK UP FRIDAY -</div>
                    <div className='pt-1'>YOU RETURN IT MONDAY!!!</div>
                    <div className='pt-1'>THREE DAY RENTAL!!!</div>
                    <div className='pt-1'>3410 Bluebonnet St.</div>
                    <div>Pasadena TX 77505</div>
                    <div>(This location only!!)</div>
                    <div className='underline font-bold heading5'>YOU CAN'T</div>
                    <div className='underline font-bold heading5'>BEAT THAT</div>
                    <div className='underline font-bold heading2'>ANYWHERE!</div>
                    <div className='pt-1 heading3'>*MR.MARGARITA*MAN HOUSTON- WHAT A PARTY!!!</div>
                    <div className='heading6 pt-2'>{`Margarita machine houston, margarita machine rental, margarita machine rentals houston, margarita machine rentals, margarita machine sales, margarita machines, margarita machines houston, margarita machines rentals, margarita maker, margarita mix, margarita mix tequila, margarita party, margarita recipe, margarita houston, margarita machine recipes, margarita rental, margarita rentals, margarita rentals houston, mix, mixes, new, parties, party, party city, party equipment rentals, party games, party ideas, party machine, party machine rentals, party machines, party rental, machines rentals, daiquiri, margarita`
                      .split(',') // Split by commas
                      .map((item, index) => (
                        <span key={index} className="block">{item.trim()},</span> // Trim spaces and display each on a new line
                      ))}</div>
                  </div>
                </div>
                <div className=' card '>
                  <div className='static top-0 z-10 justify-center items-center flex text-white h-12  font-semibold bg-red-500'>What you'll need</div>
                  <div className='text-center heading6 overflow-auto h-80 pt-4 px-4'>
                    <div className='pt-2 font-bold'>For Margaritas - <span className='font-medium'>2 Liter's of Tequila and 1 Liter of Triple Sec</span></div>
                    <div className='pt-2 font-bold'>Don't Like Triple Sec or want Top Shelf? </div>
                    <div className='pt-2'>1 Liter of Tequila, 1/2 Liter Cointreau and 1 Liter Grand Marnier</div>
                    <div className='pt-2 font-bold'>For Rum Drinks <span className='font-medium'>2 Liter's Rum</span></div>
                    <div className='pt-2 font-bold'>For Vodka Drinks <span className='font-medium'>2 Liter's Vodka</span></div>
                    <div className='pt-2'>Save your money and buy the cheap stuff!!!</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative grid lg:grid-cols-3 items-center cardBg py-5 px-2'>
              <div className='lg:col-span-2'>
                <LoadScript googleMapsApiKey="AIzaSyDh2R6MnQKmSiWrmK8uEfwPU0l70q6J85Q">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className='p-4 bg-white w-96 absolute right-56 top-36 shadow-xl hover:scale-110  transition  z-30 text-red-600 '>
                <div className='italic font-bold font-mono'>WE OFFER CUSTOMER PICK UPS AT THIS LOCATION ONLY!!!</div>
                <div onClick={() => openMap('3410 Bluebonnet St, Pasadena, TX 77505, USA')} className='hover:underline cursor-pointer pt-4 hover:text-gray-700 text-gray-600 heading5 flex items-center'><FaLink /><span className='pl-1'>View Large Map</span></div>
              </div>
            </div>
            <div className='text-black bg-white py-4 px-2'>
              <div className='font-semibold text-center heading5 pb-2'>For margarita machines & party rentals inside beltway 8 - south houston - pearland - deer park - laporte - friendswood - clear lake - galveston</div>
              <div className='flex flex-wrap'>
                {bottomData.map((data, index) => (
                  <div key={index} className='m-1 border cursor-pointer hover:border-red-500 hover:text-red-500 transition border-gray-400 heading5 text-text1 rounded-md px-4 py-0.5'>{data}</div>
                ))}
              </div>
            </div>
            <div className='cardBg py-4'>
              <div className='p-4 card bg-white border border-gray-300 mx-6'>
                <div className='italic heading4 text-text2 font-semibold '>JOIN OUR WINNING TEAM!!!</div>
                <div className='pt-4 heading5'>MR. MARGARITA is growing nationwide by offering his <span className='cursor-pointer hover:underline font-semibold italic text-blue-500'>DISTRIBUTOR OPPORTUNITY</span> to the right individual who wants to start their own home based MR. MARGARITA MACHINE RENTAL company and be MR. MARGARITA in his or her town. Wouldn't you like to see huge profits from a margarita machine rentals business? This is like a franchise, but better!! Visit our <span className='cursor-pointer hover:underline font-semibold italic text-blue-500'>MR. MARGARITA DISTRIBUTOR OPPORTUNITY</span> page to see how you can get started in the frozen drink machine rentals business.</div>
                <div className='flex justify-center items-center py-4'>
                  <div className='px-2 hover:scale-105 hover:shadow-2xl'><img src='/image7.jpeg' /></div>
                  <div className='px-2 hover:scale-105 hover:shadow-2xl'><img src='/image8.jpeg' /></div>
                  <div className='px-2 hover:scale-105 hover:shadow-2xl'><img src='/image9.jpeg' /></div>
                  <div className='px-2 hover:scale-105 hover:shadow-2xl'><img src='/image10.jpeg' /></div>
                </div>
                <div className='font-semibold heading4 text-text2 text-center'>GREAT REFERENCES!!! WE CANT MAKE THIS UP!!!</div>
                <div className='flex justify-center pt-4'><img className='cursor-pointer' onClick={() => redirectFB()} src="./image11.jpg" alt="Image" /></div>
              </div>
            </div>
          </div>
        )}
        <div ref={contactMePageRef} className='py-2 text-text2 bg-white bg_custom2'>
          <div className='text-center heading1111 font-bold pb-12 pt-6'>Contact Us</div>
          <div className='grid lg:grid-cols-2 gap-6 px-8'>
            <div>
              <div>
              <div className='grid lg:grid-cols-2 gap-6'>
                <div className='flex items-center'>
                  <div className='w-20 h-20 heading1 text-white font-bold flex items-center justify-center bg-green-900 text-center rounded-lg shadow-md'><IoCall /></div>
                  <div className='p-4'>
                    <div className='heading3 text-text2 font-bold'>Phone number</div>
                    <div className='text-text1 heading4'>{selectedData.number}</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-20 h-20 heading1 text-white font-bold flex items-center justify-center bg-green-900 text-center rounded-lg shadow-md'><MdOutlineMail /></div>
                  <div className='p-4'>
                    <div className='heading3 text-text2 font-bold'>Email Address</div>
                    <div className='text-text1 heading4'>info@MrMargarita.com</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-20 h-20 heading1 text-white font-bold flex items-center justify-center bg-green-900 text-center rounded-lg shadow-md'><FaLocationDot /></div>
                  <div className='p-4'>
                    <div className='heading3 text-text2 font-bold'>Location</div>
                    <div className='text-text1 heading4'>{selectedData.name}</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-20 h-20 heading1 text-white font-bold flex items-center justify-center bg-green-900 text-center rounded-lg shadow-md'><LuClock9 /></div>
                  <div className='p-4'>
                    <div className='heading3 text-text2 font-bold'>Schedule</div>
                    <div className='text-text1 heading4'>	10 am–7 pm</div>
                    <div className='heading6 text-text2 -mt-1'>(Sunday closed)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mt-16 -mb-16">
              <svg style={{ width: '100%', maxWidth: '520px', height: 'auto' }} viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <clipPath id="blob-6745504db2e41">
                          <path fill="#474bff" d="M409.5,279.5Q363,319,331.5,345Q300,371,262.5,359Q225,347,194.5,337Q164,327,126.5,305.5Q89,284,89,240Q89,196,105,149.5Q121,103,173,119Q225,135,257.5,132Q290,129,337,138Q384,147,420,193.5Q456,240,409.5,279.5Z"></path>
                      </clipPath>
                  </defs>
                  <image x="0" y="0" width="100%" height="100%" clipPath="url(#blob-6745504db2e41)" href="https://vendomat.modeltheme.com/wp-content/uploads/2020/08/Main-Blog_post2.jpg" preserveAspectRatio="xMidYMid slice"></image>
              </svg>
          </div>
                </div>
            <div>
              <div className='card bg-white shadow-lg border border-gray-100 p-8 px-2 lg:px-12 md:px-8 relative'>
                <h2 className="text-2xl text-center text-gray-800 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                      <span className="mr-2 text-xl">👤</span>
                      <input
                        type="text"
                        id="name"
                        className="flex-1 p-2 outline-none heading4 text-text4"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                      <span className="mr-2 text-xl">📧</span>
                      <input
                        type="email"
                        id="email"
                        className="flex-1 p-2 outline-none heading4 text-text4"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-start border border-gray-300 rounded-md p-2">
                      <span className="mr-2 text-xl">💬</span>
                      <textarea
                        id="message"
                        className="flex-1 outline-none resize-y heading4 text-text4 h-32"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 mb-4 text-center justify-center w-20 h-20 flex items-center bg-red-600 text-white heading111 transition py-3 rounded-md hover:bg-gray-700 duration-300"
                  >
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='cardBg text-text2 pt-8' ref={contactInfoRef}>
          <div className='text-center heading1111 font-bold'>Contact Information for Our Mr. Margarita Locations</div>
          {/* <ul className="flex space-x-8 list-disc items-center justify-center heading4">
            {['AZ', 'CA', 'FL', 'LA', 'TX'].map((state) => (
              <li
                key={state}
                className="hover:text-blue-500 cursor-pointer"
              >
                {state}
              </li>
            ))}
          </ul> */}
          <div className='mx-32 pt-4'>
            <div className="grid lg:grid-cols-5 gap-4">
              {contactDetail && Array.isArray(contactDetail) && contactDetail.length > 0 ? (
                contactDetail.map((region, regionIndex) => (
                  <div
                    key={regionIndex}
                    ref={(el) => { stateRefs.current[region.title.trim()] = el; }} // Set ref to state title
                    className="col-span-1 w-full" // Make each region div flexible and column-based
                  >
                    {/* Title */}
                    <div className="font-bold text-red-600 letterspaccing mb-2">{region.title}</div>

                    {/* Loop through each subData (cities and phone numbers) */}
                    <div className="my-2">
                      {region.subData.map((city, cityIndex) => (
                        <div key={cityIndex} className="mb-1">
                          <div className="font-semibold heading6 hover:text-blue-600 cursor-pointer" onClick={() => selectName(city)}>
                            {city.name}
                          </div>
                          <div className="font-normal text-gray-700 heading5">{city.number}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>No contact information available</p>
              )}
            </div>
          </div>
        </div>
        <div className='py-8 bg-green-900'>
          <div className='grid lg:grid-cols-2 items-center text-center'>
            <div>
              <div className='text-gray-300 heading2 font-semibold'>{selectedData.name} Margarita Machine Rentals</div>
              <div className='text-gray-300 heading2 font-semibold'>call {selectedData.number}</div>
              <div className='text-gray-300 heading2 font-semibold '>info@MrMargarita.com</div>
            </div>
          <div className='flex text-start'>
            <div className='m-2'>
              {optionValue.map((city, index) => (
                <div onClick={() => handleTabClick(city, index, true)} key={index} className='min-w-max border border-transparent hover:border-gray-300 transition heading6 rounded-md cursor-pointer m-1 px-2'><li>{city}</li></div>
              ))}
            </div>
          </div>
          </div>
            {/* <div className='flex'>
              <div className=' flex flex-wrap text-center justify-center m-2'>
                {optionValue.map((city, index) => (
                  <div className='min-w-max border border-gray-300 heading6 rounded-md cursor-pointer m-1 px-2'>{city} </div>
                ))}
              </div>
            </div> */}
            <div className='text-gray-100 heading6 text-center'>© Copyright 2025 All rights Reserved.</div>
        </div>
        {isVisible && (
          <div
          className='bg-red-500 hover:bg-red-600 transition p-2 cursor-pointer hover:shadow-xl hover:scale-110 rounded-full fixed bottom-5 right-5 animate__animated animate__fadeInUp'
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} color="#fff" />
        </div>
        )}
      </div>
    </div>
  );
}
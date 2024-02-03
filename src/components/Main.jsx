import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import prot from '../Asset/prot.png'
import fur from '../Asset/furniture.png'
import travel from '../Asset/travel.png'
import luminar from '../Asset/luminar.png'
import health from '../Asset/health.png'
import bmi from '../Asset/bmi.png'
import doctor from '../Asset/doctor.png'
import weather from '../Asset/weather.png'
import contact from '../Asset/contact.png'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
// import Paper from '@mui/material/Paper';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Darkmode from './Darkmode';
import Footer from './Footer';



function Main()
   
{
    // const darkTheme = createTheme({
    //     palette: {
    //       mode: 'light',
    //     },
    //   });
      
  return (

    // <ThemeProvider theme={darkTheme}>
    //  <Paper elevation={0} sx={{height:'100%'}} square={}>
     <div>
        <nav style={{zIndex:"1"}}>
             <b><h5 style={{fontSize:'30px'}}>portfolio</h5></b>
            <ul type='none'>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a href="/">
                <button >
            connect+
        </button>
                </a>
        </li>
        <li>
           <div style={{position:'absolute',top:'13px',right:'37px'}}>
           <Darkmode/>
           </div>
        </li>
            </ul>
        </nav>

       
      
        {/* //home */}
        <div id='Home' style={{display:'flex',zIndex:'0'}}  className='main '>
            {/* <div style={{backgroundColor:"rgb(255, 136, 0)",width:'190px',height:'100px',position:"absolute",top:'100px'}}>
                
            </div>
            <div style={{backgroundColor:"rgb(255, 136, 0)",width:'190px',height:'100px',position:"absolute",top:'350px'}}>
                
                </div> */}
            <div className="ps-5">
                <div style={{marginTop:'230px',marginLeft:'100px'}}>
                    <h1 style={{fontSize:'90px'}}>DEEPAK TG</h1>
                    <div className='underline'></div>
                    {/* ............... */}
                    <div>
                        <div className=" mt-3"><h3>Web developer</h3>
                        <p style={{opacity:"75%"}}> welcome to my portfolio 
                            </p></div>
                        <div  className="text-end mt-3"><button className='btn ' style={{borderRadius:'50px',backgroundColor:'rgb(67, 67, 67)',color:'white'}}>cv</button></div>
                    </div>
                </div>
            </div>
            <div>
               <div style={{marginTop:'100px',marginLeft:'50px'}}>
               <img style={{width:'530px'}} src="https://www.dynamsoft.com/webres/wwwroot/images/banner/HomeIllustrations_Benefits.png" alt="" />
               </div>
            </div>
        </div> 

        {/* /................................../ */}

        <div id='About' className=''>

            <div className="row mx-auto p-3">
                <div className="col-5 "> 
                    <div className='ms-3'>
                    <img style={{width:'590px'}} src="https://i.pinimg.com/originals/6b/61/86/6b618621463b85f33e0dba9f872ad25f.png" alt="" /></div></div>
                <div className="col-7">
                    <div className='p-3' style={{width:'530px',backgroundColor:'orange',marginTop:'70px',marginLeft:'130px'}}>
                           <h3>About Me</h3>
                           <hr />
                           <p>
                          <b> Hi, I’m Deepak TG, a full-stack web developer with a passion for creating beautiful and functional websites.</b>
                           I'm a beginner to web developing,working with technologies such as HTML, CSS, JavaScript, React, Node.js,Angular js and MongoDB.you can go a check out some of my projects given below <br />
                           Education : <br />
                           <hr style={{margin:'0'}} />
                          <b>Bachelor of Technology in Computer Science and Engineering </b> <br />
                          <b>ME(A)RN</b> stack
<hr />
                           
                           </p>
                          
                    </div>
                </div>
            </div>

        </div>
{/* ................................................. */}
          <div id="skills">
            <div className="row mx-auto p-3">
                <div className="col p-3">
                    <div style={{display:'flex'}}>
                        <div style={{marginTop:'70px',marginLeft:'90px'}}><h1 style={{fontSize:'60px'}}><b>SKILLS</b></h1></div>

                        <div className='ms-3' style={{width:'3px',height:'250px',backgroundColor:'orange'}} >
                        </div>
                       <div style={{marginTop:'23px'}}> 
                         <ul style={{fontSize:'21px'}} type='none'>
                             <li><b>HTML</b></li>
                             <li><b>CSS</b></li>
                             <li><b>JAVASCRIPT</b></li>
                             <li><b>REACT</b></li>
                             <li><b>ANGULAR</b></li>
                             <li><b>MONGODB</b></li>
                         </ul></div>
                    </div>
                </div>
                <div className="col ">
                    <div className='edu mt-5'>
                        <div style={{position:'absolute' ,left:'500px'}}>
                            <img  src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" alt="" />
                        </div>
                        <div style={{position:'absolute',left:"600px"}}>
                            <img  src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png" alt="" />
                        </div>
                        <div style={{position:'absolute',left:"700px"}}>
                            <img  src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png" alt="" />
                        </div>
                        <div style={{position:'absolute',left:"770px"}}>
                            <img  src="https://www.pngkit.com/png/full/80-804117_javascript-logo-png.png" alt="" />
                        </div>
                        <div style={{position:'absolute',left:"810px"}}>
                            <img  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png" alt="" />
                        </div>
                        <div style={{position:'absolute',left:"870px",top:'1157px'}}>
                            <img  src="https://freepngdesign.com/content/uploads/images/p-1698-1-angular-logo-png-transparent-logo-214688437269.png" alt="" />
                        </div>
                        <div style={{position:'absolute',left:"950px"}}>
                            <img  src="https://keestalkstech.com/wp-content/uploads/2019/09/nodejs-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
{/* ............................................................ */}

            <div  id='projects' className='p-3'  >

            <h3 style={{fontSize:'50px'}} className='text-center pt-5 pb-5'><b>Projects</b></h3>   

            <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem interval="1000" itemId={1}>
      <div className='projectcards'>
                <div className='card'> 
                    <img src={prot} alt="" />
                <div className='info'>
                    <h3>portfolio</h3>
                </div>
                </div>
                <div className='card'>  <img src={fur} alt="" />
                <div className='info'>
                    <h3>Furniture</h3>
                </div>
                </div>
                <div className='card'> <img src={travel} alt="" />
                <div className='info'>
                    <h3>Travel.com</h3>
                </div>
                </div>
               
               
                
            </div>
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem interval="1000" itemId={2}>
      <div className='projectcards'>
                <div className='card'> <img src={luminar} alt="" />
                <div className='info'>
                    <h3>Luminar Clone</h3>
                </div>
                </div>
                <div className='card'> <img src={health} alt="" />
                <div className='info'>
                    <h3>Clone</h3>
                </div>
                </div>
                <div className='card'> <img src={bmi} alt="" />
                <div className='info'>
                    <h3>BMI Calculator</h3>
                </div>
                </div>
                
            </div>
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem interval="1000" itemId={3}>
      <div className='projectcards'>
               
               <div className='card'> <img src={doctor} alt="" />
               <div className='info'>
                   <h3>Doctor Appoiment</h3>
               </div>
               </div>
               <div className='card'> <img src={weather} alt="" />
               <div className='info'>
                   <h3>Weather App</h3>
               </div>
               </div>
               <div className='card'> <img src={contact} alt="" />
               <div className='info'>
                   <h3>Contact App</h3>
               </div>
               </div>
           </div>
        <MDBCarouselCaption>
        
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
            </div>

               {/* .................................. */}
               <div className='morepro p-5'>
                <p><b><i style={{opacity:'75%'}}>This are some of my projects,for more :</i> <a href="/"> <i class="fa-brands fa-github"></i></a> </b></p>
               </div>

<div id='contact'>
    <Footer/>
</div>
               
    </div>
//      </Paper>
//   </ThemeProvider>
  
    
  )
}

export default Main
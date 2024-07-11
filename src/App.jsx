import './App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import GaugeComponent from 'react-gauge-component'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';




function App() {

  // width
  const Input = styled(MuiInput)`
  width: 142px;
`;

  const [value, setValue] = React.useState(0);


  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };


  //height 
  const [height, setHeight] = React.useState(0);

  const handleHeightSliderChange = (event, newValue) => {
    setHeight(newValue);
  };

  const handleHeightInputChange = (event) => {
    setHeight(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleHeightBlur = () => {
    if (height < 0) {
      setHeight(0);
    } else if (height > 200) {
      setHeight(200);
    }
  };
  // reset and calculate

  const [BMI,setBMI] = React. useState(0)
  const [category,setcategory]=React.useState("condition")
  const [discription,setdiscription]= React.useState("instruction to be")
  const [src,setsrc]=useState("/obs.gif")


  const handleRest=()=>{
    setHeight('0')
    setValue('0')
    setBMI('0')
    
  }
  
  
  const result=()=>{
     let rel=((value / (height / 100) ** 2).toFixed(1))
     setBMI(rel)

      if (rel<=18.5) {
  
        setcategory('UNDERWEIGHT');
        setdiscription('Eat healthy foods');
        setsrc("/food-yummy.gif")
        
      }
      else if(rel>=18.5 && rel<24.9){
        setcategory('HEALTHY !');
        setdiscription('Stay healthy');
        setsrc("/normalweight.gif")

  
      }
      else if(rel>=25.0 && rel<39.9){
        setcategory('OVERWEIGHT');
        setdiscription('reduced-calorie diet and exercise regularly');
        setsrc("/workout.gif")

      }
    
     
   else {
       setcategory("OBESE !");
        setdiscription('go to medical checkup');
        setsrc("/obs.gif")

      
    }
  
  
  

  }

  

  return (
    <>
<div className='d-flex align-items-center justify-content-center'>
        <div className="row w-75">
          <div className="col-md-2"></div>
          <div className="col-md-8 ">

              <div className="row  p-3 mb-5 shadow-lg  mt-5  rounded-4 p-3 py-4 " data-aos="fade-right"
                data-aos-duration="1000" style={{backgroundColor:'#1A2421', opacity: '0.9'}}>
              
             <h2 className='text-center mt-3 fw-bold text-white '  data-aos="fade-left"
              data-aos-duration="1000">BMI calculator</h2>
              <div className="col-md-6 "> 
             <div>
                  <GaugeComponent  className='w-100  '
                    value={BMI}
                    type="radial"
                    labels={{
                      valueLabel: {
                        formatTextValue: (value) => `${BMI}`,
                      },
                      tickLabels: {
                        type: "inner",
                        ticks: [
                          { value: 20 },
                          { value: 40 },
                          { value: 60 },
                          { value: 80 },
                          { value: 100 }
                        ]
                      }
                    }}
                    arc={{
                      colorArray: ['#5BE12C', '#EA4228'],
                      subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
                      padding: 0.02,
                      width: 0.3
                    }}
                    pointer={{
                      elastic: true,
                      animationDelay: 0
                    }}
                  />
                 <div className='w-100 text-center'>
                    <h4 className=' fw-bold text-success ' data-aos="fade-left"
              data-aos-duration="1000">{category}</h4>
                       <img src={src} alt="" width={'60px'} height={'50px'}/>
                    <p className='text-white' data-aos="fade-left"
              data-aos-duration="1000">{discription}</p>
                 </div>
    
               </div>           
                </div>
              <div className="col-md-6 mt-3 ">
              <div className='mt-2 '>
                <Chip  style={{paddingRight:'18px', color:'black', backgroundColor:'whitesmoke'}} avatar={<Avatar   src="https://img.freepik.com/premium-vector/boy-with-dental-braces-dental-care-little-boy-portrait-circular-frame_254685-975.jpg"  />} 
                 label="Male" />
                <Chip  style={{paddingRight:'14px' ,color:'black', backgroundColor:'whitesmoke'}} className='ms-md-3' avatar={<Avatar   src="https://img.freepik.com/premium-vector/little-smiling-girl-cute-portrait-child-vector-illustration_254685-2049.jpg"  /> }
                 label="Female"  />
    
             </div> 
               {/* width */}
                <div  style={{ width: "250px" }} className='mt-4' >
                  <Typography id="input-slider" gutterBottom>
                   <span className='fw-bolder text-white ms-2'> weight</span>
                   <FontAwesomeIcon icon={faArrowRight} fade className='ms-2 text-white' />
                  </Typography>
                 <div className='px-2'data-aos="fade-left"
              data-aos-duration="1000">
                    <Slider 
                      value={typeof value === 'number' ? value : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                    />
                 </div>
                  <Input className='text-white shadow-lg ms-2'
                    value={value}
                    size="small"
                    variant="standard"
                    color=''
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </div>
  
                {/* height */}
  
                <div  style={{ width: '250px', marginTop: '20px' }}>
                  <Typography id="height-slider" gutterBottom>
                   <span className='fw-bolder text-white ms-2'> Height</span>
                    <FontAwesomeIcon icon={faArrowRight} fade className='ms-2 text-white' />
                  </Typography>
               <div className='px-2'data-aos="fade-left"
              data-aos-duration="1000">
                    <Slider 
                      value={typeof height === 'number' ? height : 0}
                      onChange={handleHeightSliderChange}
                      aria-labelledby="height-slider"
                      min={0}
                      max={200}
                      step={1}
                    />
               </div>
                  <Input className='text-white shadow-lg ms-2'
                    value={height}
                    size="small"
                    onChange={handleHeightInputChange}

                    onBlur={handleHeightBlur}
                    inputProps={{
                      step: 2,
                      min: 0,
                      max: 200,
                      type: 'number',
                      'aria-labelledby': 'height-slider',
                    }}
                  />
                </div>
                <div className='mt-5'>
                <Button className=' fw-bold  border-white text-white border-1' variant="outlined" type='submit' size='mediam' onClick={result}>CALCULATE</Button>
                <Button  variant="outlined" className='  ms-3 text-black border-white text-white'  size='mediam' onClick={handleRest}>RESET</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
  
  
</div>



    </>
  )
}

export default App

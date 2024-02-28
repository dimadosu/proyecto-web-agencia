import './ServicesModule.css'
import image from '../assets/webImage.jpg'
export const Services = () => {
  return (
    <>
      <div name="Services" className={'services'}>
        <p>We solve your company is problems by creating amazing web pages.</p>
        <img
          className={'webImage'}
          src={image}
        ></img>
      </div>
    </>
  )
};

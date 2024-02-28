import { Step } from "../Components/Step";
import "./HowWeWorkModule.css";

export const HowWeWork = () => {
  //Un array de objetos
  const steps = [
    {
      text: " You tell us your proposal.",
      id: 1,
    },
    {
      text: " We design your site and do a review.",
      id: 2,
    },
    {
      text: " We develop your website.",
      id: 3,
    },
    {
      text: " We deploy your website.",
      id: 4,
    },
    {
      text: " You enjoy all the benefits of having a website for your company.",
      id: 5,
    },
  ];

  return (
    <>
      <div name="HowWeWork" className={"howWeWork"}>
        <h2 className={"title"}>How We Work</h2>
        {steps.map((item) => (
          <Step key={item.id} text={item.text} step={item.id}></Step>
        ))}
      </div>
    </>
  )
}

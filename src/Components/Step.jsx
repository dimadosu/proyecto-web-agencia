import "./StepModule.css";

export const Step = ({step, text}) => {
  return (
    <>
      <div className={'container'}>
        <div className={'stepContainer'}>
          <p className={'stepNumber'}>{step}</p>
          <p className={'text'}>{text}</p>
        </div>
        <div className={'stepBorder'}></div>
      </div>
    </>
  );
};

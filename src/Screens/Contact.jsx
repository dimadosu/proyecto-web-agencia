import './ContactModule.css'

export const Contact = () => {
  return (
    <>
      <div name="Contact" className={'contact'}>
        <h2>Contact</h2>
        <form
          className={'form'}
          method="POST"
          action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
        >
          <label >Name</label>
          <input id="Name" name="Name" className={'input'}></input>
          <label >Email</label>
          <input
            id="Email"
            name="Email"
            type="Email"
            className={'input'}
          ></input>
          <label >Message</label>
          <textarea id="Message" className={'textArea'}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

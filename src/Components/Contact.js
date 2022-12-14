import React from 'react'
import fooda from "../assets/fooda.jpeg"

const Contact = () => {
  return (
    <div class="contact__container">
      <div class="contact__inner__form">
        <img src={fooda} alt="" className='abt_img' />

        <div class="contact__form__container">
          <div class="contact__title">Contact Us</div>
          <div class="contact__name__email">
            <div class="contact__input__container">
              <label class="contact__label">Name</label>
              <input type="text" class="contact__name" placeholder="Name" />
            </div>
            <div class="contact__input__container">
              <label class="contact__label">Email</label>
              <input type="email" class="contact__email" placeholder="Email" />
            </div>
          </div>
          <div class="contact__input__container2">
            <label class="contact__label">Message</label>
            <textarea
              name="textarea"
              class="contact__message"
              placeholder="Write a message ..."
            ></textarea>
          </div>
          <input type="submit" value="Submit" class="contact__submit" />
        </div>
      </div>
    </div>
  );
}

export default Contact
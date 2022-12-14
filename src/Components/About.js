import React from 'react';
import masala from "../assets/masala.jpg"

const About = () => {
  return (
    <div className="abt">
      <img src={masala} alt="masala" className="masala"></img>
      <p className='abttxt'>
        MoKsh means freedom or liberation. It also means to attain the highest
        level of satisfaction. India is famous for its exotic cuisine prepared
        with artful and exquisite combinations of spices. All our chefs are
        trained in and recruited from India – they have great knowledge of
        Indian cuisine and a passion for the food that they prepare. At MoKsh,
        the chefs provide our guests with the authentic cuisine from North
        India, famous for its savoury clay oven dishes and exotic curries. We
        cater especially for families and prepare each individual meal just the
        way you like it: mild, medium or hot. We also cater for private
        functions, birthdays and corporate functions. Moksh guarantees you the
        freshest and finest ingredients of India. We believe that “The quality
        of food lies in the honesty of its ingredients.” All our food is
        prepared from scratch on the premises, so no preservatives are used. We
        strive to achieve the highest level of satisfaction with the best
        quality food and excellent service.
      </p>
    </div>
  );
}

export default About
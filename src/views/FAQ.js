import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import Pricing from '../components/sections/Pricing';
import Team from '../components/sections/Team';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';

class Secondary extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {  

    const genericSection04Header = {
      title: 'FAQ - Commonly Asked Questions'
    }

    return (
      <React.Fragment>
        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection04Header} className="center-content" />
            <Accordion>
              <AccordionItem title="What Is BlockGood's Goal?" active>
                BlockGood’s goal was to develop an easy, quick, and efficient to use platform to facilitate the distribution of these supplies directly to the people who need it most, with the inclusion of government incentives using blockchain technology.
              </AccordionItem>
              <AccordionItem title="Who Is It For?">
                During these uncertain times, our application provides an easy to use platform for governments working alongside with its people to combat COVID-19. Blockgoods’ users can rest assured that they can distribute and/or obtain high-demand goods at very affordable prices -- all from the comfort of their homes and without having to sacrifice their own personal well-being. We encourage all governments to consider implementing this and using our app in order to achieve a global effect!
              </AccordionItem>
              <AccordionItem title="What Was Your Source Of Inspiration?">
                We were inspired by the shortage of masks and other essential supplies for frontline workers during the COVID-19 pandemic. An increase in demand of essential supplies like hand sanitizer, soap, face masks, medicine, and toilet paper have caused many of these items to be either heavily inflated in price or sold out in stores. 
              </AccordionItem>
              <AccordionItem title="How Was BlockGoods Built?">
                Using the Blockstack decentralized app service, a permanent storage system was created for transactions and listing information. The front-end was built using React, Material-UI, SCSS, and BootStrap with clean UI/UX. MongoDB, Express.js, Node.js, and React.js (MERN stack) was used along with  
                JWT, Firebase, and the BlockStack API were used for the back-end.
              </AccordionItem>
               <AccordionItem title="How Does It Work?">
                Through the use of BlockGoods, a government or any kind of state can create a new cryptocurrency in the form of a debt security which is used to support the state’s spendings and obligations. The currency will then be distributed reasonably amongst the people at the beginning of each month to regulate supply and demand, allowing everyone to have equal access to these essential materials. People can use these coins through the platform to buy essential goods from sellers in their community, whether it be from the producers themselves or retail stores. Once the pandemic is over, these coins can then be exchanged between sellers and the government for monetary value. 
              </AccordionItem>
              <AccordionItem title="What Is Next For BlockGoods?">
                Due to the nature of our app, we can easily scale our platform to allow transactions of goods beyond just the essentials. BlockGoods aims to not only be of great use during the pandemic but after it is over as well, by relying on the decentralized applications of blockchain to gain the support of users all around the world.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>        
        <Cta split />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

const modalFormStyle = {
  maxWidth: '320px',
  margin: '0 auto'
}

export default Secondary;
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

    const genericSection01Header = {
      title: 'Modal - Lorem ipsum is placeholder text commonly used.'
    } 

    const genericSection02Header = {
      title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection03Header = {
      title: 'Subscribe To Our Mailing List/Contact Us!'
    }   

    const genericSection04Header = {
      title: 'FAQ - Commonly Asked Questions'
    }

    return (
      <React.Fragment>
        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection03Header} className="center-content" />
            <form style={formStyle}>
              <div className="mb-24">
                <Input
                  type="Full Name"
                  label="Name"
                  placeholder="Full Name"
                  formGroup="desktop"
                  labelHidden>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Your Best Email Address"
                  formGroup="desktop"
                  labelHidden>
                </Input>
              </div>              
              <div className="mb-24">
                <Input
                  type="email"
                  label="Comment"
                  placeholder="Leave A Comment"
                  formGroup="desktop"
                  labelHidden>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="Access"
                  placeholder="Want Early Access? (Y/N)"
                  formGroup="desktop"
                  labelHidden>
                  
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
            </form>
          </div>
        </GenericSection>
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
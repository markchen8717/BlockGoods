import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Clients extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <ul className="list-reset">
              <li className="reveal-from-top">
                <Image
                  src={require('./../../assets/images/clients-01.png')}
                  alt="Client 01"
                  width={124}
                  height={24} />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="150">
                <Image
                  src={require('./../../assets/images/clients-02.png')}
                  alt="Client 02"
                  width={80}
                  height={27} />
              </li>
              <li className="reveal-from-top" data-reveal-delay="300">
                <Image
                  src={require('./../../assets/images/clients-03.png')}
                  alt="Client 03"
                  width={115}
                  height={29} />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="450">
                <Image
                  src={require('./../../assets/images/clients-04.png')}
                  alt="Client 04"
                  width={100}
                  height={30} />
              </li>
              <li className="reveal-from-top" data-reveal-delay="600">
                <Image
                  src={require('./../../assets/images/clients-05.png')}
                  alt="Client 05"
                  width={80}
                  height={23} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Words From Our Co-Founders',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — BlockGoods users can rest assured that they can distribute and obtain goods at very affordable prices -- all from the comfort of their homes and without having to sacrifice their own personal well-being.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Eric Liu</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Co-Founder</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — During these uncertain times, our application provides an easy to use platform for governments working alongside with its people to combat COVID-19.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Mark Chen</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Co-Founder</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Our app can be easily integrated in places all around the world to flatten the curve and put an end to this concerning pandemic. Whether it’s average consumers or local businesses, our app is there to provide a more socially-distant experience when purchasing essentials like medicine, toiletries, hygienic products, and so on.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Krishdev Sutar</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Co-Founder</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Blockgoods can be continued to be used as a trading platform for people willing to donate their unwanted materials for the greater good of humanity after the pandemic ends.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Ben Lin</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">Co-Founder</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
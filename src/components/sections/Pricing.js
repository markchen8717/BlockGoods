import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false
}

class Pricing extends React.Component {

  state = {
    pricingSwitchOn: true
  }

  handlePricingSwitch = (e) => {
    this.setState({ pricingSwitchOn: e.target.checked });
  }

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
      pricingSwitcher,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Engage Your Visitors with a beautiful template',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content reveal-from-bottom" />
            {pricingSwitcher &&
              <div className="pricing-switcher center-content reveal-from-top">
                <Switch
                  checked={this.state.pricingSwitchOn}
                  onChange={this.handlePricingSwitch}
                  rightLabel="Billed Annually">
                  Billed Monthly
                </Switch>
              </div>
            }
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-right" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h3">$</span>
                        <span className="pricing-item-price-amount h1">{this.state.pricingSwitchOn ? '27' : '34'}</span>
                        <span className="text-sm">/m</span>
                      </div>
                      <div className="text-xs text-color-low">
                        Lorem ipsum is a common text
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="http://cruip.com/">Start free trial</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h3">$</span>
                        <span className="pricing-item-price-amount h1">{this.state.pricingSwitchOn ? '47' : '54'}</span>
                        <span className="text-sm">/m</span>
                      </div>
                      <div className="text-xs text-color-low">
                        Lorem ipsum is a common text
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="http://cruip.com/">Start free trial</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h3">$</span>
                        <span className="pricing-item-price-amount h1">{this.state.pricingSwitchOn ? '67' : '74'}</span>
                        <span className="text-sm">/m</span>
                      </div>
                      <div className="text-xs text-color-low">
                        Lorem ipsum is a common text
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="http://cruip.com/">Start free trial</Button>
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
import * as React from 'react';

export const RuleImageBlock = ({ images }) => (
  <div className='row RuleImageBlock'>
  {images.map(i => 
    <div key={i.path} className='col'>
      <img className='RuleImageBlock__image' src={i.path} />
      <p>{i.label}</p>
    </div>
  )}
  </div>
)

export const RuleNumber = ({ number, matchedNumber }) => (
  <span>
    <a className='RuleNumber__anchor' id={number}></a> 
    <a href={'#' + number} className={'RuleNumber' + (matchedNumber ? ' RuleNumber-match' : '')}>
      <span className='RuleNumber__decoration'>#</span>
      {number}
    </a>
  </span>
);

export const RuleSection = ({ number, title, children, matchedNumber, matchedHeading }) => ( 
  <div>
    <h4 className={'RuleSection__heading' + (matchedHeading ? ' RuleSection__heading-match' : '')}>
      {number && <RuleNumber number={number} matchedNumber={matchedNumber} />}
      {title}
    </h4>

    {children}
  </div>
);

export const RuleText = ({ subheading, number, children, matchedNumber, matchedHeading }) => {
  var numberDisplay = 'none';

  if (number && subheading) {
    numberDisplay = 'header';
  } else if (number) {
    numberDisplay = 'inline';
  }

  const hasMultipleChildren = React.Children.count(children) > 1;

  return (
    <div>
      {subheading &&
        <h5 className={'RuleText__subheading' + (matchedHeading ? ' RuleText__subheading-match' : '')}>
          {numberDisplay == 'header' && <RuleNumber number={number} matchedNumber={matchedNumber} />}
          {subheading}
        </h5>}
      <div className='RuleText'>
        {React.Children.map(children, child => (
          (typeof (child) == 'string')
            ? <p className={'RuleText__text' + (hasMultipleChildren ? ' RuleText__text-lead' : '')}>
                {numberDisplay == 'inline' && <RuleNumber number={number} matchedNumber={matchedNumber} />} {child}
              </p>
            : child
        ))}
      </div>
    </div>
  );
}
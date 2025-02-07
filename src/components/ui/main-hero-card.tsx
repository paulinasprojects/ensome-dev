import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
};

const MainHeroTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={className}
    {...props}
  />
));

MainHeroTitle.displayName = "MainHeroTitle";

const MainHeroDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={className}
    {...props}
  />
));

MainHeroDescription.displayName = "MainHeroDescription";


const MainHeroButton = React.forwardRef<HTMLButtonElement, React.HtmlHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={className}
    {...props}
  />
));

MainHeroButton.displayName = "MainHeroButton";


const MainHeroImage = React.forwardRef<HTMLImageElement, Props>(({className, src, alt, ...props}, ref) => (
  <img src={src} alt={alt} ref={ref} className={className} {...props} />
));

MainHeroImage.displayName = "MainHeroImage";



export { MainHeroTitle, MainHeroDescription, MainHeroButton, MainHeroImage };
import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customeFallBack = images.noImage,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleErrot = () => {
      setFallback(images.noImage);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleErrot}
      />
    );
  },
);

export default Image;

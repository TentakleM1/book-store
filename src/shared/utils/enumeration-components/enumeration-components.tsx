import React from "react";

type enumerationComponentsType = <Option>(Component: React.FC<Option>, options: Option[]) => React.ReactElement<Option>[] | []

export const enumerationComponents: enumerationComponentsType = (
  Component,
  options
) => {
  if(!Component || !options) return []

  return options.map((option, index) => {
    return <Component key={index} {...option} />;
  });
};

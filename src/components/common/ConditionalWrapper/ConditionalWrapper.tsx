import React, { ReactNode, FunctionComponent } from 'react';

interface ConditionalWrapperProps {
  condition: boolean;
  wrapperIfTrue: (typeof React.createElement.arguments)[0];
  wrapperIfTrueProps: (typeof React.createElement.arguments)[1];
  wrapperIfFalse?: (typeof React.createElement.arguments)[0];
  wrapperIfFalseProps?: (typeof React.createElement.arguments)[1];
  commonProps?: (typeof React.createElement.arguments)[1];
  children: NonNullable<ReactNode>;
}

export const ConditionalWrapper: FunctionComponent<ConditionalWrapperProps> = ({
  condition,
  wrapperIfTrue,
  wrapperIfTrueProps,
  wrapperIfFalse = React.Fragment,
  wrapperIfFalseProps = {},
  commonProps = {},
  children,
}) => {
  return condition ? (
    React.createElement(
      wrapperIfTrue, 
      { 
        ...wrapperIfTrueProps,
        ...commonProps,
      }, 
      [children],
    )
  ) : (
    React.createElement(
      wrapperIfFalse, 
      { 
        ...wrapperIfFalseProps,
        ...commonProps,
      }, 
      [children],
    )
  );
};
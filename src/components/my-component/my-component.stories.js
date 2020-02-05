/*import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { MyComponent } from '../my-component/my-component';
 
export default {
  title: "Storybook Knobs",
  decorators: [withKnobs]
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
 
// Knobs for React props
export const withAButton = () => (
  <>
    <button disabled={boolean("Disabled", false)}>
      {text("Label", "Hello Storybook")}
    </button>
    <MyComponent first="Stencil" last="'Don't call me a framework' JS"></MyComponent>
  </>
);
 
// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;
 
  return <div>{content}</div>;
};*/

import { storiesOf } from '@storybook/html';
import {
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';
import readme from './readme.md';

const stories = storiesOf('My component', module);
stories.addDecorator(withKnobs);
stories.add('All props', () => {
  const first = text('First', 'John Doe');
  const last = text('Last', "'Don't call me a framework' JS");

  const yearDefaultValue = 44;
  const yearOptions = {
     range: true,
     min: 1,
     max: 90,
     step: 1,
  };
  const yearGroupId = 'GROUP-Year';  
  const year = number("Year", yearDefaultValue, yearOptions, /* yearGroup */);
  return (`<my-component first="${first}" last="${last}" year="${year}"></my-component>`)
},{
  notes: {readme}
});
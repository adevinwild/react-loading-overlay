import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoadingOverlay, Props } from '../src';

const meta: Meta = {
  title: 'Loading Overlay',
  component: LoadingOverlay,
  argTypes: {
    visible: {
      description: 'Whether or not to show the overlay',
      control: {
        type: 'boolean',
      },
    },
    color: {
      defaultValue: '#001219',
      description: "by default it's black but you can specify a color",
      control: {
        type: 'color',
      },
    },
    size: {
      defaultValue: 32,
      description: 'The size of the spinner',
      control: {
        type: 'number',
      },
    },
    strokeWidth: {
      defaultValue: 4,
      description: 'The width of the spinner',
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <LoadingOverlay {...args} />;

const TemplateWithElements: Story<Props> = args => {
  const [isLoading, toggleLoading] = React.useReducer(
    (state: boolean) => !state,
    false
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleLoading();
  };

  return (
    <div style={{ position: 'relative' }}>
      <LoadingOverlay visible={isLoading} {...args} />
      <form
        style={{
          display: 'grid',
          maxWidth: '20rem',
          gap: '1rem',
          margin: '0 auto',
        }}
        onSubmit={onSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const WithBackgroundElements = TemplateWithElements.bind({});

Default.args = {};

// Create a new type for the Storybook component

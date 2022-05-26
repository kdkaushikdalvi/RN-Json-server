import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';
import {ListDetails} from '../ListDetails';
import renderer from 'react-test-renderer';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('render ListDetails component ', async () => {
    const {getByText, getByTestId, debug} = render(<ListDetails />);
  });
});

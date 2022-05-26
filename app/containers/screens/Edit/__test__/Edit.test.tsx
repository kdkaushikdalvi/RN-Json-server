import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {EditSong} from '../Edit';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EditSong />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('render EditSong component ', async () => {
    const {getByText, getByTestId, debug} = render(<EditSong />);
    debug();
  });
});

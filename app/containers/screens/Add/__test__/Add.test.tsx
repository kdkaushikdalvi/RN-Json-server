import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {SongList as AddSong} from '../SongList';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AddSong />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('render AddSong component ', async () => {
    const {getByText, getByTestId, debug} = render(<AddSong />);
    const inputLable = getByText('Enter Song Description');
  });
});

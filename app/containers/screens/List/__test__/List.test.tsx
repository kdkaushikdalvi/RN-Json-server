import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {expect, it} from '@jest/globals';
import {SongList as ListSong} from '../List';
import renderer from 'react-test-renderer';

describe('Some component', () => {
  it('renders correctly', () => {
    // const tree = renderer.create(<ListSong />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import {shallow, mount} from 'enzyme'
import MyApp from "../../../App";

describe('Filter component', () => {

    const props = {
        news: {
            activeTag: 'activeTag',
            activeCategory: 'activeCategory',
            searchValue: 'searchValue'
        }
    };

    it('render Filter', () => {
        const wrapper = mount(<MyApp />);
        const note = wrapper.find('Filter');
        expect(note.length).toBe(1);
    });

});
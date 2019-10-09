import React from 'react';
import {shallow, mount} from 'enzyme'
import MyApp from "../../../../../App";

describe('AddNote component', () => {
    it('render AddNote', () => {
        const wrapper = mount(<MyApp />);
        const note = wrapper.find('AddNote');
        expect(note.length).toBe(1);
    });

    it('note form not showing before click AddNote', () => {
        const wrapper = mount(<MyApp />);
        const NoteForm = wrapper.find('NoteForm');
        expect(NoteForm.length).toBe(0);

    });

    it('note form showing after click AddNote', () => {
        const wrapper = mount(<MyApp />);
        const note = wrapper.find('AddNote');
        const input = note.find('input');
        input.simulate('click');
        const NoteForm = wrapper.find('NoteForm');
        expect(NoteForm.length).toBe(1);
    });

});
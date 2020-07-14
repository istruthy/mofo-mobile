// import React from 'react';
// import renderer from 'react-test-renderer';

// import HeroBlock from './HeroBlock';

// <Text style={styles.headline}>{state.displayTitle}</Text>
// <Text style={styles.byline}>{state.subtitle}</Text>
// <Text style={styles.buttonStyle}>{state.buttonText}</Text>

// describe('My Test Suite', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// });

import { shallow } from 'enzyme';
import HeroBlock from './HeroBlock';
import mofo from 'mofo';

jest.mock('mofo');

describe('ToDoList component', () => {
  describe('when rendered', () => {
    it('should fetch a list of tasks', () => {
      const getSpy = jest.spyOn(mofo, 'get');
      const toDoListInstance = shallow(<HeroBlock />);
      expect(getSpy).toBeCalled();
    });
  });
});

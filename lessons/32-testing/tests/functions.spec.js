import { isValid, sendData, FormHandler } from '../src/functions'

describe('Tests', () => {
  
  // units
  describe('isValid', () => {
    it('Should be valid', () => {
      expect(isValid('Alex')).toBeTruthy();
    })
    it('Should be undefined', () => {
      expect(isValid()).toBeFalsy();
    })
    it('Should be invalid with empty', () => {
      expect(isValid('   ')).toBeFalsy();
    })
  })
  
  describe('sendData', () => {
    it('Should send data', () =>{
      const saveFn = jest.fn();
      sendData('alex', saveFn)
      expect(saveFn).toHaveBeenCalledWith('alex')
    })
  })
  // integration
  describe('FormHandler', () => {
    it('If name is valid should send data', () => {
      const isValidFn = jest.fn().mockImplementation(() => true);
      const sendDataFn = jest.fn();
      const formHandler = new FormHandler(isValidFn,sendDataFn);
      const name = 'art';
      formHandler.onSubmit(name)
      expect(isValidFn).toHaveBeenCalledWith(name)
      expect(sendDataFn).toHaveBeenCalledWith(name)
    })

    it('If name is invalid should send data', () => {
      const isValidFn = jest.fn().mockImplementation(() => false);
      const sendDataFn = jest.fn();
      const formHandler = new FormHandler(isValidFn,sendDataFn);
      const name = 'art';
      formHandler.onSubmit(name)
      expect(isValidFn).toHaveBeenCalledWith(name)
      expect(sendDataFn).not.toHaveBeenCalledWith()
    })
  })
})

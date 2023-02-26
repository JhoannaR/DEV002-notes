import '@testing-library/jest-dom';

import { auth, signOut } from '../init.js';
import { logOut, loginWithGoogle } from '../lib/firebase/methodsAuth.js';

jest.mock('../init.js', () => {
    return {
        auth: jest.fn(() => {//la función fn crea una función interceptada por JEST
            return { auth: 'TEST' }
        }),
        signOut: jest.fn((auth) => {
            if (!auth)
                return Promise.reject('no auth parameter')
        }),
        loginWithGoogle: jest.fn((email) => {
            if (email === 'jhoannarosameradavila@gmail.com') {
                return ('Correo verificado');
            }
        }),
    }
  })
  
  
  
  describe('Tests for the logOut function', () => {
  
    it('Should call signOut', async () => {
         logOut(auth)
        expect(signOut).toHaveBeenCalled()
    })
  
    it('Shoul call signOut',  () => {
         logOut(auth)
        expect(signOut).toHaveBeenCalledWith(auth)
    })
  
    it('Should throw an error if executed without arguments', async () => {
        try {
              await logOut()
             //expect().toBe(false)
        }
        catch (error) {
            expect(error).toBe('no auth parameter')
        }
    })
  })
  
  describe('Tests for the loginWithGoogle funtion', () => {
    const email = 'jhoannarosameradavila@gmail.com';
    it('should return is a valid email', async () => {
        try {
            await loginWithGoogle(email);
        } catch (error) {
            expect(error.message).toBe('ERROR');
        }
    });
});
  
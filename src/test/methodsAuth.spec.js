import '@testing-library/jest-dom';
import { auth, signOut } from 'src/init.js';
import { logOut } from '../src/lib/firebase/methodsAuth.js';

jest.mock('src/init.js', () => {
    return {
        auth: jest.fn(() => {//la función fn crea una función interceptada por JEST
            return { auth: 'TEST' }
        }),
        signOut: jest.fn((auth) => {
            if (!auth)
                return Promise.reject('no auth parameter')
        })
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
  
  
  
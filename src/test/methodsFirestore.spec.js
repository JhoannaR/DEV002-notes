
// import { getFirestore, deleteDoc} from '../init.js'
// import { deleteNote } from '../lib/methodsFirestore'

// jest.mock('../init.js', () => {
//     return {
//       getFirestore: jest.fn(() => {
//         return { firestore: 'TEST' }
//       }),

//       deleteNote: jest.fn(),
      
//       doc: jest.fn(() => 'doc'),

//     }
// })


// describe("test for the deleteNote function", () => {
//     const id = "2pEJYUZXuGAiHsT0g4PS"
  
//     it('Should call deleteDoc', async () => {
//       await deleteNote(id)
//       expect(deleteDoc).toHaveBeenCalled();
//     })
  
//     it('Should call deleteDoc with doc as its parameter', async () => {
//       deleteNote.mockClear();
//       await deleteData(id)
//       expect(deleteDoc).toHaveBeenCalledWith('doc');
  
//     })
//   });
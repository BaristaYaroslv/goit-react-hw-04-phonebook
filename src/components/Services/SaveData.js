// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const NAME_STORAGE = 'Contacts_Phonebook';

// function saveData(data) {
//   try {
//     const serializedState = JSON.stringify(data);
//     localStorage.setItem(NAME_STORAGE, serializedState);
//   } catch (error) {
//       Notify.failure(`Set state error: ${error.message} `);
//   }
// }

// function loadData() {
//   let restoredSession = [];
//   try {
//     restoredSession = JSON.parse(localStorage.getItem(NAME_STORAGE));
//   } catch {
//     restoredSession = [];
//   }

//   console.log(restoredSession);

//   return restoredSession || [];
// }

// export { saveData, loadData };
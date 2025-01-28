const initialStates = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
/* 

1. Reducer is not allow to modify existing state.

2. and they're also not allowed to do any asynchronous logic and other side effects.

3. Instead is to place as much logic as possible inside of them, okay?

4. But anyway, one thing that is actually different between this reducer and the reducer in the useReducer hook is that usually we directly pass in the initialState as a default state. 


*/
function reducer(state = initialStates, action) {
  switch (action.type) {
  }
}

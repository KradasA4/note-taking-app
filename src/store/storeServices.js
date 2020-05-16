const loadState = () => {
  const serializedState = localStorage.getItem('noteStore');
  if(serializedState) {
    return JSON.parse(serializedState);
  } else {
    return undefined;
  }
}

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('noteStore', serializedState);
}

export { loadState, saveState}
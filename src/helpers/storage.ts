export const saveToLocalStorage = (state: unknown) => {
  try {
    const appState = JSON.stringify(state)
    localStorage.setItem('appState', appState)
  } catch (e) {
    console.warn(e)
  }
}

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem('appState')
    if (!appState) return undefined
    return JSON.parse(appState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

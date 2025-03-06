
// import create from "zustand"   

export const useMyStore = create((set) => ({
  darkMode: false, 
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}))



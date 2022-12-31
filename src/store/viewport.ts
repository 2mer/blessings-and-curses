import create from 'zustand'

type ViewportStore = {
	width: number,
	height: number,
	setSize: (width: number, height: number) => void,
}

const useViewport = create<ViewportStore>((set) => ({
	width: 0,
	height: 0,
	setSize: (width: number, height: number) => set(() => ({ width, height })),
}))

export default useViewport;
function square(sideLenIn: number): Shape {
    let sideLen: number = sideLenIn
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }
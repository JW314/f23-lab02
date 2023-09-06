interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(widthIn: number, heightIn: number): Shape {
    let width: number = widthIn
    let height: number = heightIn
    return {

        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }

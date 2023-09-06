function circle(radiusIn: number): Shape {
    let radius: number = radiusIn
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }

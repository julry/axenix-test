export const sides = {
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    top: 'top'
}

const line1 = [
    {x: 0, [sides.bottom]: true},
    {x: 1},
    {x: 2, [sides.bottom]: true},
    {x: 3},
    {x: 4, [sides.bottom]: true},
    {x: 5, [sides.bottom]: true},
].map(sqr => ({...sqr, y: 0}));

const line2 = [
    {x: 0, [sides.bottom]: true, [sides.top]: true},
    {x: 1, [sides.right]: true},
    {x: 2, [sides.left]: true, [sides.right]: true, [sides.top]: true},
    {x: 3, [sides.bottom]: true, [sides.left]: true},
    {x: 4, [sides.right]: true, [sides.top]: true},
    {x: 5, [sides.left]: true, [sides.top]: true},
].map(sqr => ({...sqr, y: 1}));

const line3 = [
    {x: 0, [sides.top]: true, [sides.right]: true},
    {x: 1, [sides.bottom]: true, [sides.left]: true},
    {x: 2, [sides.bottom]: true, [sides.right]: true},
    {x: 3, [sides.left]: true, [sides.top]: true},
    {x: 4},
    {x: 5, [sides.bottom]: true}
].map(sqr => ({...sqr, y: 2}));

const line4 = [
    {x: 0},
    {x: 1, [sides.top]: true},
    {x: 2, [sides.top]: true, [sides.bottom]: true},
    {x: 3, [sides.bottom]: true},
    {x: 4, [sides.right]: true, [sides.bottom]: true},
    {x: 5, [sides.left]: true, [sides.top]: true}
].map(sqr => ({...sqr, y: 3}));

const line5 = [
    {x: 0, [sides.right]: true},
    {x: 1, [sides.left]: true, [sides.right]: true},
    {x: 2, [sides.left]: true, [sides.right]: true, [sides.top]: true},
    {x: 3, [sides.left]: true, [sides.top]: true},
    {x: 4, [sides.top]: true, [sides.bottom]: true},
    {x: 5, [sides.bottom]: true}
].map(sqr => ({...sqr, y: 4}));

const line6 = [
    {x: 0, [sides.right]: true},
    {x: 1, [sides.left]: true},
    {x: 2},
    {x: 3},
    {x: 4, [sides.top]: true, isFinal: true},
    {x: 5, [sides.top]: true, isFinal: true}
].map(sqr => ({...sqr, y: 5}));

export const lines = [
    ...line1,
    ...line2,
    ...line3,
    ...line4,
    ...line5,
    ...line6
].map(sqr => ({
    ...sqr,
    [sides.left]: sqr[sides.left] || sqr.x === 0,
    [sides.top]: sqr[sides.top] || sqr.y === 0,
    [sides.right]: sqr[sides.right] || sqr.x === 5,
    [sides.bottom]: sqr[sides.bottom] || sqr.y === 5,
}));

let tareaPosicion = [0, 0];
let observer = null;

function emitChange(){
    observer(tareaPosicion);
};

export function observe(o) {
    observer = o
    emitChange();
}

export function moverTarea(toX, toY) {
    tareaPosicion = [toX, toY]
    emitChange();
}


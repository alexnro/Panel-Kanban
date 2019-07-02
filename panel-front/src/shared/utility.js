export const getJSON = a => {
    if (typeof a !== "string" || !a || a == null) return null;
    a = a.replace(/\r\n|\r|\n|\t/g, '').replace(/\\/g, '/');
    return new Function("return " + a)();
}
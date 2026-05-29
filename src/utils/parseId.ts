export function parseId(value: string | string[] | number) {
    const id = typeof value === "string"
        ? Number(value)
        : Array.isArray(value)
            ? Number(value[0])
            : value;

    if (Number.isNaN(id)) {
        throw new Error("Invalid ID");
    }

    return id;
}

function solve(names) {
    return [...names]
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => `${index + 1}.${name}`)
    .join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));

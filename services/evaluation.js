const evaluate = (first, second, operator) => {
    switch (operator) {
        case "+":
            return Number(first) + Number(second);
        case "-":
            return Number(first) - Number(second);
        case "*":
            return Number(first) * Number(second);
        case "/":
            if (second === 0) {
                return "kaden!";
            } else {
                return Number(first) / Number(second);
            }
        case "modulus":
            return Number(first) % Number(second);
        default:
            return "kaden!";
    }
};

export { evaluate };

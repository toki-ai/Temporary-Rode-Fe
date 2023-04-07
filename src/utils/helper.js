export const formatUserName = (firstName, lastName) => {
    return [firstName, lastName].join(' ');
};
export function percentToNumber(percent = 0) {
    var roundedNumber = parseFloat(percent.toFixed(2));
    return roundedNumber;
}

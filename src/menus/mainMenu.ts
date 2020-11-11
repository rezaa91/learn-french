export const menuItems: Array<string> = ['VERBS', 'LIST VERBS'];

export function displayMainMenu(): string {
  return menuItems.reduce((acc, item, index) => {
    return `${acc}\n${index + 1}: ${item}`;
  }, '').concat('\n');
}

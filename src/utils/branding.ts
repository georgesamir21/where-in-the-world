import { Theme } from '../types/Countries';

export const changeTheme = (theme: Theme) => {
  let cssRule;
  switch (theme) {
    case 'dark':
      cssRule = `
            :root {
                --background: hsl(207, 26%, 17%);
                --text-color: hsl(0, 0%, 100%);
                --elements: hsl(209, 23%, 22%);
                --input-color: hsl(0, 0%, 100%);
            }
            `;
      break;
    case 'light':
    default:
      cssRule = `
            :root {
                --background: hsl(0, 0%, 98%);
                --text-color: hsl(200, 15%, 8%);
                --elements: hsl(0, 0%, 100%);
                --input-color: hsl(0, 0%, 52%);
            }
            `;
      break;
  }
  const styleSheets = document.styleSheets[document.styleSheets.length - 1];
  styleSheets.insertRule(cssRule, styleSheets.cssRules.length);
};

import lightTheme from "./light.setting";
import darkTheme from "./dark.setting";

const themeSettings = {
    light: lightTheme,
    dark: darkTheme,
};

const getTheme = (current: 'light' | 'dark') => {
    return themeSettings[current]
}

export {themeSettings, getTheme};

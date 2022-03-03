import {getTheme, themeSettings} from "../../utils/settings/theme/index.setting"
import TAction from "../types/action"
import { CHANGE_THEME } from "../types/dispatch"


const initialState = {
    current: 'light',
    settings: {
        ...themeSettings.light
    },
}

const ThemeReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                current: action.data.current,
                settings: getTheme(action.data.current)
            }
        default:
            return { ...state }
    }
}

export default ThemeReducer

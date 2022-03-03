export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state")
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("state", serializedState)
    } catch {
        console.log('Save state failed!')
    }
}

export const loadToken = () => {
    try {
        const token = localStorage.getItem("token");
        if (token === null) {
            return undefined;
        }
        return token;
    } catch (err) {
        return undefined;
    }
};

export const saveToken = (token: string) => {
    try {
        localStorage.setItem("token", token);
    } catch {
        console.log("Save token failed!");
    }
};

export const removeToken = () => {
    try {
        localStorage.removeItem("token");
    } catch {
        console.log("Remove token failed!");
    }
};

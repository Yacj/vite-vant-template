export const local = {
    getItem(key) {
        try {
            let value = window.localStorage.getItem(key);
            if (!value || value === '') {
                return null;
            }
            return JSON.parse(value);
        } catch (e) {
            return null
        }
    },
    // 添加
    setItem(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },

    // 删除
    removeItem(key) {
        window.localStorage.removeItem(key);
    },

    // 清除
    clear() {
        window.localStorage.clear()
    },

    // 长度
    length() {
        return window.localStorage.length;
    }
}
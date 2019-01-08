class saveUtil {
    constructor(type = 'sessionStorage', data = '', expire = 7) {
        if (!(this instanceof saveUtil)) { return new saveUtil() }
        this.support = {} //兼容性检查
        this.type = type
        this.data = data
        this.expire = expire
        this.field = '_save_datas'
        this.value = this.dataFilter(data)
        this.isCookie = type === 'cookie' ? true : false
        this.canUse()
    }
    canUse() {
        if (window.sessionStorage) {
            this.support.session = true
        }
        if (window.localStorage) {
            this.support.local = true
        }
        if (document.cookie) {
            this.support.cookie = true
        }
    }
    dataFilter(data) {
        if (typeof data === 'object') {
            return JSON.stringify(data)
        }
        return data
    }
    setData() {

        if (!this.support.cookie) {
            window[this.type].setItem(this.field)
        }
    }
    getData(keyname = 'default') {
        let obj, fields
        if (!this.support.cookie) {
            fields = window[this.type].getItem(this.field)
        }
    }

    changeData() {}
    remove() {

    }
    clear() {}
    setCookie() {}
    getCookie() {}
}
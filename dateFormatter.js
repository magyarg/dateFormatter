var DateFormatter = class {

    constructor(rawDate, locale) {
        this.date = moment(rawDate);
        let paramterLocale = locale || 'en';
        this.pattern = '';
        this.localeData = moment.localeData(/*paramterLocale*/);
    }

    /**
     * Formats the current date object an returns
     * with a String NOT an object.
     * @param {String} pattern
     */
    format(pattern) {
        this.pattern = pattern;
        return this.date.format(pattern);
    }

    /**
     * Get month names with localization
     * Note: Moment JS locale files needs to be injected. Defaults to 'en'.
     */
    months() {
        return this.localeData.months();
    }

    /**
     * Returns the weekDays for a current
     * dateObject.
     */
    weekDays() {
        return this.localeData.weekdays();
    }

    /**
     * Add amount of type to the current date object
     * @param {String} type
     * @param {Number} amount
     */
    add(type, amount) {
        return this.date.add(type, amount).format(this.pattern);
    }

    /**
     * Sub amount of type to the current date object
     * @param {String} type
     * @param {Number} amount
     */
    sub(type, amount) {
        return this.date.subtract(type, amount).format(this.pattern);
    }

    /**
     * Return a specific month based on a numeric
     * identifier. Ex.: 1 - January
     * @param {Number} key
     */
    month(key) {
        if (!isNaN(key) && (key > 0 && key < 13)) {
            return this.localeData.months()[key - 1];
        } else {
            console.log('dateFormatter.error', `${key} is not a valid identifier`);
            return {};
        }
    }

};
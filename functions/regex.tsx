// ==================== REGEX ====================
export const regex = {
    email: /^(?!.*\.\.)(^[^\s@]+@[^\s@]+\.[^\s@]{2,}$)/,

    password:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,20}$/,

    username: /^(?!.*\.\.)(?!.*_$)(?!^_)[a-zA-Z0-9._]{3,20}$/,

    name: /^[a-zA-Z\s]{2,30}$/,
};

// ==================== SMART SANITIZE ====================
export const sanitize = (value: string = '', type: string = '') => {
    let clean = value;

    // Global cleaning (security)
    clean = clean
        .replace(/[<>]/g, '')        // remove HTML
        .replace(/['";\\]/g, '')     // remove SQL breaking chars
        .trim();

    // Field-specific cleaning
    switch (type) {
        case 'name':
            // ❗ REMOVE numbers automatically
            clean = clean.replace(/[^a-zA-Z\s]/g, '');
            break;

        case 'username':
            // allow only a-z A-Z 0-9 . _
            clean = clean.replace(/[^a-zA-Z0-9._]/g, '');
            break;

        case 'email':
            // allow valid email characters only
            clean = clean.replace(/[^a-zA-Z0-9@._-]/g, '');
            break;

        case 'password':
            // allow only defined secure chars
            clean = clean.replace(/[^A-Za-z\d@$!%*?&#^()_\-+=]/g, '');
            break;

        default:
            break;
    }

    return clean;
};

// ==================== VALIDATION ====================
export type RegexType = keyof typeof regex;

export const validateField = (type: RegexType | string, value: string) => {
    const clean = sanitize(value, type);

    if (!(type in regex)) {
        return { valid: true, value: clean };
    }

    return {
        valid: regex[type as RegexType].test(clean),
        value: clean,
    };
};
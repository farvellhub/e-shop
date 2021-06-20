import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_CHECK_PUBLIC_KEY, true
);

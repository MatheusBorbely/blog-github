const size = {
    mobile: '500px',
    mobileL: '768px',
    tablet: '900px',
}

export const device = {
    mobile: ` @media (max-width: ${size.mobile})`,
    mobileL: ` @media (max-width: ${size.mobileL})`,
    tablet: ` @media (max-width: ${size.tablet})`,
};
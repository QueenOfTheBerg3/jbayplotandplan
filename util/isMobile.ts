// Returns true if on mobile device (To a reasonable degree, might get it wrong on
// odd configurations)

const userAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const isMobile = (): boolean => {
    return userAgentRegex.test(navigator.userAgent);
};

export default isMobile;

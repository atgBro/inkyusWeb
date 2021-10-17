function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const typing = (blinkTimer) => {

    const process = async (blinkTimer, el) => {
        await sleep(blinkTimer);
        const content = el.innerHTML;
        el.innerHTML = "";
        for (let i = 0; i < content.length; i++) {
            el.innerHTML += content[i]
            await sleep(blinkTimer);
        }
    }

    const typingEls = document.getElementsByClassName("typing");
    for (let index = 0; index < typingEls.length; index++) {
        process(blinkTimer, typingEls[index])
    }
        
}

typing(100);
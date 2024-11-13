document.querySelector('.view').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1FQZT8wzoyIpvuH27j3AKn-zIGodqcyor/view', '_blank');
});
document.querySelector('.down').addEventListener('click', () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1FQZT8wzoyIpvuH27j3AKn-zIGodqcyor';
});
const iframe = document.getElementById('frame');
iframe.onload = function() {
    try {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    } catch (e) {
        console.log("Unable to adjust iframe height due to cross-origin restrictions.");
    }
};

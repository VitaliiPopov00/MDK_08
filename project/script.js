function setWidthScreen() {
    let widthScreen = document.querySelector('body').offsetWidth;
    let infoMessage = document.querySelector('.info_message');
    let styleInfo = 'Применены стандартные стили';
    
    if (widthScreen < 1400) {
        styleInfo = 'Стили применены для экранов шириной меньше 1400px';

        if (widthScreen < 1200) {
            styleInfo = 'Стили применены для экранов шириной меньше 1200px';
            
            if (widthScreen < 768) {
                styleInfo = 'Стили применены для экранов шириной меньше 768px';
                
                if (widthScreen < 480) {
                    styleInfo = 'Стили применены для экранов шириной меньше 480px';
                }
            }
        }
        
    }
    
    document.querySelector('.screen_width').textContent = `${widthScreen}px`;
    infoMessage.textContent = styleInfo;
}

setWidthScreen();

window.addEventListener('resize', setWidthScreen);

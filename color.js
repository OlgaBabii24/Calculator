document.addEventListener('DOMContentLoaded', function() {
    let answer = prompt('Вибери колір: темний чи світлий?','');
    if (answer === 'світлий') {
        document.getElementById('display').style.backgroundColor = 'white';
        document.getElementById('display').style.color = 'black';
        document.getElementById('keysColor').style.backgroundColor = 'white';
        document.getElementById('AC').style.backgroundColor = '#606060';
        document.getElementById('AC').style.color = 'white';
        document.getElementById('plusm').style.backgroundColor = '#606060';
        document.getElementById('plusm').style.color = 'white';
        document.getElementById('percent').style.backgroundColor = '#606060';
        document.getElementById('percent').style.color = 'white';

        document.getElementById('div').style.color = 'black';
        document.getElementById('mult').style.color = 'black';
        document.getElementById('sub').style.color = 'black';
        document.getElementById('add').style.color = 'black';
        document.getElementById('eq').style.color = 'black';

        document.getElementById('key1').style.backgroundColor = '#b8b8b8';
        document.getElementById('key1').style.color = 'black';
        document.getElementById('key2').style.backgroundColor = '#b8b8b8';
        document.getElementById('key2').style.color = 'black';
        document.getElementById('key3').style.backgroundColor = '#b8b8b8';
        document.getElementById('key3').style.color = 'black';
        document.getElementById('key4').style.backgroundColor = '#b8b8b8';
        document.getElementById('key4').style.color = 'black';
        document.getElementById('key5').style.backgroundColor = '#b8b8b8';
        document.getElementById('key5').style.color = 'black';
        document.getElementById('key6').style.backgroundColor = '#b8b8b8';
        document.getElementById('key6').style.color = 'black';
        document.getElementById('key7').style.backgroundColor = '#b8b8b8';
        document.getElementById('key7').style.color = 'black';
        document.getElementById('key8').style.backgroundColor = '#b8b8b8';
        document.getElementById('key8').style.color = 'black';
        document.getElementById('key9').style.backgroundColor = '#b8b8b8';
        document.getElementById('key9').style.color = 'black';
        document.getElementById('key0').style.backgroundColor = '#b8b8b8';
        document.getElementById('key0').style.color = 'black';
        document.getElementById('keyDot').style.backgroundColor = '#b8b8b8';
        document.getElementById('keyDot').style.color = 'black';     
        
    } else if (answer !== 'темний') {
        answer = prompt('Вибери колір: темний чи світлий?','');
    }
})


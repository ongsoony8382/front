const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen', $screen);
console.log('toggleButton', $toggleButton);

/* js에선 주소값이 있으면 true임 */
if ($screen && $toggleButton) {
  //첫 번째 아규먼트: 문자열(이벤트 이름)
  // 두 번째 아규먼트: 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert('하하');
  }

  const cb = clickBtn;

  // $toggleButton.addEventListener('click', clickBtn);

  /* $toggleButton.addEventListener('click', function(){
    alert('호호');
  });
  
  */

  $toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn; // 현재는 true
    console.log('stopWatchOn: ', stopWatchOn);
    $toggleButton.innerText = stopWatchOn ? '■' : '▶';
    // $toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    $toggleButton.classList.toggle('stop-color');

    /*stopWatchOn이 켜져 있으면

    매 0.01초마다 seconds를 올리고

    분:초:센티초로 계산해서

    화면에 보여준다 ($screen.innerText)*/

    if (stopWatchOn) {
      // 첫 번째 인자: 콜백함수
      // 두 번째 인자: Number - ms
      timeInterval = setInterval(() => {
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0');
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0');
        const cs = String(seconds % 100).padStart(2, '0');
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10); // 0.01초마다 이 함수 실행
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = '00:00:00';
    }
  });
}

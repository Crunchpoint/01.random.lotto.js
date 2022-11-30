const elLotto = document.querySelector(".lotto>.winnerNum"),
  elLotto2 = document.querySelector(".lotto>.myNum"),
  elLotto3 = document.querySelector(".lotto>.howMany"),
  elBtn = document.querySelectorAll(".lotto>button");
//   랜덤함수
function ranFun(n) {
  return Math.ceil(Math.random() * n);
}
// 변수선언
let lottoWinner = [2, 8, 14, 27, 38, 42];
// 중복 숫자확인
function pickLotto(btn, key) {
  num = [];
  count = 0;
  function set(n) {
    return num.find(function (element) {
      return element == n;
    });
  }
  // 중복숫자가 있다면 다시, 없다면 변수에 내 숫자 입력
  for (let i = 1; i <= lottoWinner.length; i++) {
    n = ranFun(45);
    if (set(n)) {
      i--;
    } else {
      num.push(n);
    }
  }
  // 첫번째 버튼 클릭시 이번주 1등 번호 확인
  // 두번째 버튼 클릭시 내 번호 및 당첨결과 확인
  if (key == 0) {
    elLotto.innerHTML = `1등 번호 : [${lottoWinner}]`;
    return;
  } else if (key == 1) {
    num.sort(function (a, b) {
      return a - b;
    });
    elLotto2.innerHTML = `내 번호 : [${num}]`;
  }
  // 내 변수와 1등 번호중 동일한 숫자 카운팅
  lottoWinner.forEach(function (v, k) {
    if (lottoWinner[k] == num[k]) {
      count++;
    }
    if (count == 6) {
      elLotto3.innerHTML = `${count}개 번호 일치! 1등 당첨을 축하드립니다!!!`;
    } else if (count == 5) {
      elLotto3.innerHTML = `${count}개 번호 일치! 2등에 당첨 되셨습니다!!`;
    } else if (count == 4) {
      elLotto3.innerHTML = `${count}개 번호 일치! 3등에 당첨 되셨습니다!`;
    } else if (count == 3) {
      elLotto3.innerHTML = `${count}개 번호 일치! 4등에 당첨 되셨습니다!`;
    } else if (count == 2) {
      elLotto3.innerHTML = `${count}개 번호 일치! 5등에 당첨 되셨습니다`;
    } else if (count == 1) {
      elLotto3.innerHTML = `${count}개 번호 일치! 아쉽지만 6등에 당첨 되셨습니다`;
    } else if (count == 0) {
      elLotto3.innerHTML = `${count}개 번호 일치! 이런... 다음 기회에 다시 도전!`;
    }
    console.log(count);
  });
}

// forEach 버튼
elBtn.forEach(function (btn, key) {
  btn.onclick = function () {
    pickLotto(btn.dataset.lotto, key);
  };
});

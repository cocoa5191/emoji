$(document).ready(function() {

  
  function getRandomYear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const groupsByYear = {
    2020: {
      group1: ['Beetle', 'Cockroach', 'Fly'],
      group2: ['Firefly', 'Biscuit', 'Mask'],
    },
    2021: {
      group1: ['Coral', 'Lotus', 'Troll'],
      group2: ['3D Printer', 'Dandelion', 'Ketchup'],
    },
    2022: {
      group1: ['Donkey', 'Goose', 'Wing'],
      group2: ['Cabbage', 'Seaweed', 'VR'],
    },
  };

  const randomYear = getRandomYear(2020, 2022);
  const words2 = groupsByYear[randomYear].group1;
  const words3 = groupsByYear[randomYear].group2;

  console.log('Random Year:', randomYear);
  console.log('Random Group 1 Item:', words2);
  console.log('Random Group 2 Item:', words3);

  function replaceText(match, words) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  }

  // "202N"을 년도로 대체
  document.body.innerHTML = document.body.innerHTML.replace(/202N/g, randomYear);

  // "wordN"과 "rejectedN"을 해당 그룹의 단어로 대체
  document.body.innerHTML = document.body.innerHTML.replace(/wordN/g, (match) => replaceText(match, words2));
  document.body.innerHTML = document.body.innerHTML.replace(/rejectedN/g, (match) => replaceText(match, words3));



//   const descriptionContainer = document.getElementById("description-container");
//   const descriptions = [
//     "혹은 누군가에게 적절하거나 적절하지 못한 제안으로 분류되는 정보를 전달하기 위해, ",
//     "아니면 이 아카이브를 보고 자극받아 새로운 이모티콘 제안서를 제출할 누군가를 위해, ",
//     "또는 이모티콘을 열렬히 사랑하는 사람들을 위해 만들어졌습니다."
//   ];
//   let currentDescriptionIndex = 0;

//   function showNextDescription() {
//     const descriptionText = descriptions[currentDescriptionIndex];
//     let currentIndex = 0;

//     function displayNextCharacter() {
//         if (currentIndex < descriptionText.length) {
//             const char = document.createElement("span");
//             char.textContent = descriptionText.charAt(currentIndex);
//             descriptionContainer.appendChild(char);
//             currentIndex++;
//             setTimeout(displayNextCharacter, 50); // 글자 단위로 나타나도록 지연
//         } else {
//             setTimeout(() => {
//                 descriptionContainer.innerHTML = ""; // 현재 텍스트 지우기
//                 currentDescriptionIndex++;
//                 if (currentDescriptionIndex < descriptions.length) {
//                     showNextDescription(); // 다음 문장으로 이동
//                 }
//             }, 500); // 2초 후 다음 문장 또는 종료
//         }
//     }

//     displayNextCharacter();
// }




//   // 페이지 로드 후 2초 후에 텍스트 표시 시작
//   setTimeout(showNextDescription, 500);
const descriptionContainer = document.getElementById("description-container");
const descriptionContainerEng = document.getElementById("description-containerE");
const descriptions = [
  [
    ", 혹은 누군가에게 적절하거나 적절하지 못한 제안으로 분류되는 정보를 전달하기 위해, ",
    "아니면 이 아카이브를 보고 자극받아 새로운 이모티콘 제안서를 제출할 누군가를 위해, ",
    "또는 이모티콘을 열렬히 사랑하는 사람들을 위해 "
  ],
  [
    "to convey information about proposals that are deemed appropriate or inappropriate to someone, ",
    "to inspire someone who might submit a new emoji proposal after viewing this archive, ",
    "or for those who have a deep love for emojis."
  ]
];

let currentDescriptionIndex = 0;
let currentCharIndex = 0;

function showNextDescription() {
  if (currentDescriptionIndex < descriptions[1].length || currentCharIndex < descriptions[1][currentDescriptionIndex].length) {
    const charKor = document.createElement("span");
    const charEng = document.createElement("span");

    if (currentDescriptionIndex < descriptions[1].length) {
      charKor.textContent = descriptions[0][currentDescriptionIndex].charAt(currentCharIndex);
      charEng.textContent = descriptions[1][currentDescriptionIndex].charAt(currentCharIndex);
      descriptionContainer.appendChild(charKor);
      descriptionContainerEng.appendChild(charEng);
    }

    currentCharIndex++;

    if (currentCharIndex >= descriptions[1][currentDescriptionIndex].length) {
      currentDescriptionIndex++;
      currentCharIndex = 0;
      setTimeout(showNextDescription, 150); // 문장 간 딜레이 (세 문장이 동시에 나타납니다.)
    } else {
      setTimeout(showNextDescription, 50); // 글자 단위로 나타나도록 지연
    }
  }
}

// 페이지 로드 후 2초 후에 텍스트 표시 시작
setTimeout(showNextDescription, 3500);

const $blur = $('#blur');
const $glossary = $('.glossary');

$('#btnAcv').on('click', function() {
console.log("hide");
  $blur.hide();
  $glossary.hide();
});

$('#blur').on('click', function() {
  console.log("hide");
    $blur.hide();
    $glossary.hide();
  });


const left = $('.left');
const right = $('.right');


left.on('scroll', function () {
  // 왼쪽 스크롤 위치를 오른쪽 스크롤 위치로 동기화
  right.scrollTop(left.scrollTop());
});
right.on('scroll', function () {
  // 오른쪽 스크롤 위치를 왼쪽 스크롤 위치로 동기화
  left.scrollTop(right.scrollTop());
});

});

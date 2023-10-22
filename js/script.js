$(document).ready(function() {
  const left = $('.left');
  const right = $('.right');
  const $blur = $('#blur');
  const $glossary = $('.glossary');
  const thirdOfPageWidth = window.innerWidth / 3;
  const thirdPageWidth = (window.innerWidth * 2) / 3;

  left.on('scroll', function () {
    // 왼쪽 스크롤 위치를 오른쪽 스크롤 위치로 동기화
    right.scrollTop(left.scrollTop());
  });
  right.on('scroll', function () {
    // 오른쪽 스크롤 위치를 왼쪽 스크롤 위치로 동기화
    left.scrollTop(right.scrollTop());
  });

  /*
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


  $(document).on('click', function (event) {
    if (event.clientX < thirdOfPageWidth) {
      $blur.hide();
      $glossary.hide();
      console.log('Blur and Glossary elements clicked.');
    } else if (event.clientX > thirdPageWidth) {
      $blur.hide();
      $glossary.hide();
      console.log('Blur and Glossary elements clicked.');
    }
  });
  */
});

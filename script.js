document.getElementById("animeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const userName = document.getElementById("name").value.trim();
  const characterName = document.getElementById("animeCharacter").value.trim();
  const responseDiv = document.getElementById("response");
  const imageDiv = document.getElementById("animeImage");

  if (userName && characterName) {
    // 名前とキャラクターに基づいたレスポンスを生成
    const greetingMessage = `こんにちは、${userName}さん！`;
    const message = `あなたの好きなキャラクター「${characterName}」にぴったりなアニメは...<br><strong>オススメアニメ:</strong><br>`;
    const animeList = getAnimeSuggestions(characterName);
    
    // 新しい要素を動的に表示
    responseDiv.innerHTML = greetingMessage + "<br>" + message + animeList.join('<br>');

    // アニメ画像を表示
    const animeImage = getAnimeImage(characterName);
    imageDiv.innerHTML = `<img src="${animeImage}" alt="${characterName}" class="img-fluid" />`;
  } else {
    responseDiv.innerHTML = "名前とキャラクター名を入力してください！";
    imageDiv.innerHTML = '';
  }
});

// キャラクター名に基づいたオススメアニメを返す関数！
function getAnimeSuggestions(character) {
  const suggestions = generateAnimeSuggestions();
  
  return suggestions[character] || ["他にも素晴らしいアニメがあります！"];
}

// キャラクター名に応じたアニメ画像を返す関数！！！！！！！！！！！！！！！！！！！！
function getAnimeImage(character) {
  const images = generateAnimeImages();
  
  return images[character] || "assets/img/default.jpg";
}

// アニメキャラクターとオススメアニメのデータ生成！！！！！
function generateAnimeSuggestions() {
  let suggestions = {};
  const characters = [
    "ナルト", "ルフィ", "悟空", "アスカ", "シャンクス", "リヴァイ", "エレン", "カカシ", "デク", "シンジ", 
    "ドラえもん", "サザエさん", "ポケモン", "コナン", "ワンピース", "進撃の巨人", "鬼滅の刃", "バカボン",
    "銀魂", "チュウチュウ", "ブラッククローバー", "ドクターストーン", "ヒロアカ", "ボボボーボ・ボーボボ"
  ]; // 例としてキャラクター数を少しだけ増やしました！

  const animeTitles = [
    "ワンピース", "ドラゴンボール", "エヴァンゲリオン", "進撃の巨人", "ナルト", "鬼滅の刃", 
    "コードギアス", "新世紀エヴァンゲリオン", "BLEACH", "ジョジョの奇妙な冒険", "魔法少女まどか☆マギカ",
    "東京リベンジャーズ", "デスノート", "モンスター", "ブラッククローバー", "アタック・オブ・ザ・キラー・トマト",
    "デジモンアドベンチャー", "未来少年コナン", "ハンターハンター", "グリムガル", "ソードアート・オンライン"
  ];
  
  // キャラクターにランダムにアニメを3つ選んで追加！
  characters.forEach(character => {
    suggestions[character] = [];
    while (suggestions[character].length < 3) {
      const anime = animeTitles[Math.floor(Math.random() * animeTitles.length)];
      if (!suggestions[character].includes(anime)) {
        suggestions[character].push(anime);
      }
    }
  });
  
  return suggestions;
}

// アニメキャラクターと対応する画像データ生成！
function generateAnimeImages() {
  let images = {};
  const characters = [
    "ナルト", "ルフィ", "悟空", "アスカ", "シャンクス", "リヴァイ", "エレン", "カカシ", "デク", "シンジ", 
    "ドラえもん", "サザエさん", "ポケモン", "コナン", "ワンピース", "進撃の巨人", "鬼滅の刃", "バカボン",
    "銀魂", "チュウチュウ", "ブラッククローバー", "ドクターストーン", "ヒロアカ", "ボボボーボ・ボーボボ"
  ];

  characters.forEach(character => {
    images[character] = `assets/img/${character.toLowerCase()}.jpg`; // キャラクター名を小文字にして画像ファイル名にする！
  });
  
  return images;
}
const characters = Array.from({ length: 10000 }, (_, i) => `キャラクター${i + 1}`); // 1万個のキャラクター名を生成する機能ー！！
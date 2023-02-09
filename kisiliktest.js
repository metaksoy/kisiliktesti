window.addEventListener("load", function () {
  // referansları getirdim
  const quizForm = document.getElementById("wpt-test-form-308");
  const questions = document.querySelectorAll(".question");
  const results = document.getElementById("results");
  const sonuc1 = document.getElementById("sonuc1");

  // ilk skor
  let score = 0;

  // sorulardaki değişikleri getiriyoruz
  questions.forEach((question) => {
    question.addEventListener("change", (event) => {
      // skoru güncelliyoruz
      score += parseInt(event.target.value);
    });
  });

  // submitleyince gerçekleşecek fonksiyon
  quizForm.addEventListener("submit", (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Display the results
    // results.innerHTML = `Skorunuz: ${score}`;

    if (score < 30) {
      sonuc1.innerHTML = ` Lütfen Tüm Soruları Cevaplayınız, Kisilik Testi Yapılamadı`;
    } else if (score < 60 && score >= 30) {
      sonuc1.innerHTML = `47 ve Aşağısı: Kendinizi pek seven bir insan değilsiniz. Belki de geçici olarak kendinizi aşağılama döneminde bulunuyorsunuz. Herkes böyle bir dönemden ara sıra geçer. Eğer kendinizle ilgili kanınız çoğu kez böylesine olumsuzsa kendi hakkınızdaki düşüncelerinizi, duygularınızı bir arkadaşınızla, sizi iyi tanıyan biriyle konuşmanızda yarar olabilir. Onların sizin iyi ve kötü yönlerinizi dışarıdan daha iyi değerlendirebilme durumunda olabilir. Kendinizle ilgili kanınızı onlarınkiyle karşılaştırmanızı ve üzerinde tartışmanızı öneririz.`;
    } else if (score < 90 && score >= 60) {
      sonuc1.innerHTML = `48-71 Arası: Kendinizle ilgili karışık duygularınız var. Bazı güçlü yönlerinizin farkındasınız, ancak zayıf yönlerinizi gözünüzde daha çok abartıyor olabilirsiniz. Büyük bir olasılıkla, bu hatalı yönlerinizi kabullenip kendinizi geliştirmek için bir çaba harcamıyorsunuz. İnsanın isterse kendini değiştirip gelişebileceğini unutmayın.`;
    } else if (score < 120 && score >= 90) {
      sonuc1.innerHTML = `72-95 Arası: Eğer puanınız bu değerler arasındaysa, kendisini seven ve kendisiyle barış içinde yaşayan şanslı insanlardan birisiniz. Mükemmel olmadığınızı bildiğiniz halde, karşılaştığınız kişisel sorunları çözebilecek inancı kendinizce bulabiliyorsunuz ve gelişmeye istekli bir insansınız.`;
    } else if (score <= 150 && score >= 120) {
      sonuc1.innerHTML = `96 ve Yukarısı: Eğer içtenlikle vermişseniz, kendiniz hakkında oldukça olumlu düşünen bir insansınız. Ama eğer puanınız 105’in üstündeyse, herhalde işi biraz şakaya vurdunuz. Bir insanın her yönüyle kendini tam anlamıyla beğenmesi biraz güçtür. Yoksa kendinize ait bazı eksiklikleri göremeyecek kadar kendinizi beğenmiş bir kimse misiniz? Eğer kendinizi bu denli beğenmiş biriyseniz, ilişkide bulunduğunuz, kimseleri bu yönünüzle hep itiyor, kaçırıyor olabilirsiniz!`;
    } else if (score >= 151) {
      sonuc1.innerHTML = `Yanlış giden bir şeyler var.`;
    }
  });
});

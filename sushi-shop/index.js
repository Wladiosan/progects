init()

/*
const slider = {
    arrayImg: [],
    currentIndexImg: 1,
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    imgSlider: document.getElementById('imgSlider'),
    circle: [
        document.getElementById('circle-1'),
        document.getElementById('circle-2'),
        document.getElementById('circle-3')
    ],
    currentYear: document.getElementById('rights-year'),

    start: function () {
        this.arrayImg.push('img/slider/slider-0.jpeg');
        this.arrayImg.push('img/slider/slider-1.jpeg');
        this.arrayImg.push('img/slider/slider-2.jpeg');

        this.prevButton.addEventListener('click', (e) => this.onClickPrevButton(e))
        this.nextButton.addEventListener('click', (e) => this.onClickNextButton(e))

        this.imgSlider.src = this.arrayImg[this.currentIndexImg]
        this.circle[this.currentIndexImg].classList.add('grey')
        this.prevButton.disabled = false

        this.circle[0].addEventListener('click', (e) => this.onFirstImg(e))
        this.circle[1].addEventListener('click', (e) => this.onSecondImg(e))
        this.circle[2].addEventListener('click', (e) => this.onThirdImg(e))

        this.currentYear.innerHTML = new Date().getFullYear().toString()
    },

    onClickPrevButton: function (e) {
        console.log(e)
        this.currentIndexImg--
        this.imgSlider.src = this.arrayImg[this.currentIndexImg]

        if (!this.circle[this.currentIndexImg].classList.contains('grey')) {
            this.circle[this.currentIndexImg].classList.add('grey')
            this.circle[this.currentIndexImg + 1].classList.remove('grey')
        }

        this.nextButton.disabled = false

        if (this.currentIndexImg === 0) {
            this.prevButton.removeEventListener('click', this.onClickPrevButton(e))
        }
    },

    onClickNextButton: function (e) {
        this.currentIndexImg++
        this.imgSlider.src = this.arrayImg[this.currentIndexImg]

        if (!this.circle[this.currentIndexImg].classList.contains('grey')) {
            this.circle[this.currentIndexImg].classList.add('grey')
            this.circle[this.currentIndexImg - 1].classList.remove('grey')
        }

        this.prevButton.disabled = false
        if (this.currentIndexImg === 2) {
            this.nextButton.disabled = true
        }
    },

    onFirstImg: function (e) {
        this.imgSlider.src = this.arrayImg[0]
        this.currentIndexImg = 0
        this.prevButton.disabled = true
        this.nextButton.disabled = false
        this.circle[this.currentIndexImg].classList.add('grey')
        this.circle[1].classList.remove('grey')
        this.circle[2].classList.remove('grey')
    },

    onSecondImg: function (e) {
        this.imgSlider.src = this.arrayImg[1]
        this.currentIndexImg = 1
        this.prevButton.disabled = false
        this.nextButton.disabled = false
        this.circle[this.currentIndexImg].classList.add('grey')
        this.circle[0].classList.remove('grey')
        this.circle[2].classList.remove('grey')
    },

    onThirdImg: function (e) {
        this.imgSlider.src = this.arrayImg[2]
        this.currentIndexImg = 2
        this.prevButton.disabled = false
        this.nextButton.disabled = true
        this.circle[this.currentIndexImg].classList.add('grey')
        this.circle[0].classList.remove('grey')
        this.circle[1].classList.remove('grey')
    }
}*/
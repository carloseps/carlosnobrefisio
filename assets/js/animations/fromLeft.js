window.addEventListener('scroll', left);

        function left() {
            var lefts = document.querySelectorAll('.left');

            for (var i = 0; i < lefts.length; i++) {
                var windowHeight = window.innerHeight;
                var leftTop = lefts[i].getBoundingClientRect().top;
                var leftPoint = 150;

                if (leftTop < windowHeight - leftPoint) {
                    lefts[i].classList.add('active');
                }
            }
        }
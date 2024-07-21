window.addEventListener('scroll', bottom);

        function bottom() {
            var bottoms = document.querySelectorAll('.bottom');

            for (var i = 0; i < bottoms.length; i++) {
                var windowHeight = window.innerHeight;
                var bottomTop = bottoms[i].getBoundingClientRect().top;
                var bottomPoint = 150;

                if (bottomTop < windowHeight - bottomPoint) {
                    bottoms[i].classList.add('active');
                }
            }
        }
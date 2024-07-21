window.addEventListener('scroll', right);

        function right() {
            var rights = document.querySelectorAll('.right');

            for (var i = 0; i < rights.length; i++) {
                var windowHeight = window.innerHeight;
                var rightTop = rights[i].getBoundingClientRect().top;
                var rightPoint = 150;

                if (rightTop < windowHeight - rightPoint) {
                    rights[i].classList.add('active');
                }
            }
        }
;(function ($) {
    $(function () {
            var $grid = $('.category').isotope({
                itemSelector: '.category__item',
                layoutMode: 'masonry'
            });

            function toggleBtnChecked($this) {
                $this
                    .addClass('is-checked')
                    .siblings()
                    .removeClass('is-checked');
            }

            $('.button-group button').on('click', function () {
                var $this = $(this),
                    filterValue = $this.attr('data-filter');
                $grid.isotope({filter: filterValue});
                console.log($this);
                toggleBtnChecked($this);
            });
        }
    );
})(jQuery);
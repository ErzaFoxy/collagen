const catalogItem = ({ image, descr, cost }) => {
    return ` 
<div class="col-lg-4 col-md-6 col-sm-12 catalog__card">
    <div class="card h-100 p-lg-3 p-md-3 p-md-3 p-2">
        <div class="catalog_link-img">${image}</div>
        <div class="card-body">
            <div class="catalog__descr catalog_link card-title pb-lg-3">${descr}</div>
            <hr>
            <div class="row align-items-end pt-lg-3 pt-md-3">
                <div class="col-md-6 col-6">
                    <div class="catalog__cost text-uppercase">${cost}<span> UAH</span></div>
                </div>
                <div class="col-md-6 col-6">
                    <button class="btn badge-pill text-uppercase button button_catalog px-md-3 py-md-1 px-4 py-1" data-toggle="modal" data-target="#order">купить</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
};

const listItem = (item) => {
    return `<li>${item}</li>`
}

const catalogModalItem = ({ image, title, subtitle, descrTitle, descr, list, descrLast, use, composition }) => {
    return ` 
<div class="modal fade catalog-modal__item" tabindex="-1" role="dialog" aria-labelledby="desc" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
                <button type="button" class="close pr-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            <div class="modal-body row pt-0">
                <div class="col-lg-6 col-md-12">${image}
                    <h4 href="#" class="catalog-modal__title text-lg-left text-center">${title}</h4>
                    <div class="catalog-modal__subtitle">${subtitle}</div>
                </div>
                
                <div class="col-lg-6 col-md-12">
                <hr class="mt-lg-0">
                    <ul class="nav-modal row justify-content-center">
                        <li class="nav-modal__catalog nav-modal__catalog_active col-lg-4 col-md-3 col-4">
                            Описание
                        </li>
                        <li class="nav-modal__catalog col-lg-5 col-md-4 col-5 text-md-center">
                            Применение
                        </li>
                        <li class="nav-modal__catalog col-lg-3 col-md-3 col-3 text-md-center">
                            Состав
                        </li>
                    </ul>
                    <hr>

                    <div class="catalog-modal__content catalog-modal__content_active">
                        <p class="text-center text-uppercase mb-2">${descrTitle}</p>
                        ${descr}
                            <ul class="catalog-modal__list mb-0 text-left">${list.map(listItem).join(' ')}</ul>
                        ${descrLast}
                    </div>

                    <div class="catalog-modal__content">
                        ${use}
                    </div>

                    <div class="catalog-modal__content">
                        ${composition}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
};


$(document).ready(function() {
    $('#catalog').prepend(catalogArray.map(catalogItem).join(' '));
    $('#modal-catalog-items').prepend(catalogArrayModal.map(catalogModalItem).join(' '));

    $('#more').on('click', function() {
        $('#hidden').slideToggle();
    });

    $('#btn-hidden').on('click', function() {
        $('#hidden').slideToggle();
    });

    $('#more_2').on('click', function() {
        $('#hidden_2').slideToggle();
    });

    $('#btn-hidden_2').on('click', function() {
        $('#hidden_2').slideToggle();
    });

    $('.btn_main').on('click', 'button:not(.hidden)', function() {
        $(this).addClass('hidden').siblings().removeClass('hidden')
    });

    //Modal
    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog__descr').eq(i).text());
            $('#orderForm input[name=order]').val($('.catalog__descr').eq(i).text());
        })
    });

    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.main-product__title').eq(i).text());
            $('#orderForm input[name=order]').val($('.main-product__title').eq(i).text());
        })
    });

    $('.catalog_link').each(function(i) {
        $(this).on('click', function() {
            $('.catalog-modal__item').eq(i).modal('show');
        });
    });

    $('.catalog_link-img').each(function(i) {
        $(this).on('click', function() {
            $('.catalog-modal__item').eq(i).modal('show');
        });
    });

    $('ul.nav-modal').on('click', 'li:not(.nav-modal__catalog_active)', function() {
        $(this)
            .addClass('nav-modal__catalog_active').siblings().removeClass('nav-modal__catalog_active')
            .closest('div.catalog-modal__item').find('div.catalog-modal__content').removeClass('catalog-modal__content_active').eq($(this).index()).addClass('catalog-modal__content_active');
    });

    $('input[name=phone]').mask('+38 (999) 999-99-99');

    $("#callForm").submit(function(event) {
        // cancels the form submission
        event.preventDefault();
        submitForm(this);
    });

    $("#orderForm").submit(function(event) {
        // cancels the form submission
        event.preventDefault();
        submitForm(this);
    });


    function submitForm(form) {
        var message = $('input[name=order]', form).val();
        if (message === undefined) {
            message = 'заказал(а) звонок';
        };
        $.ajax({
            type: "POST",
            url: "https://formsubmit.co/ajax/erzafoxy55565@gmail.com",
            data: {
                name: $('input[name=name]', form).val(),
                phone: $('input[name=phone]', form).val(),
                message: message,
                _subject: "Новый заказ от " + $('input[name=name]', form).val() + " " + $('input[name=phone]', form).val() + " " + message
            },
            datatype: "json",
            success: function(result) {
                var data = $.parseJSON(result);
                if (data.success) {
                    $('#call, #order').modal('hide');
                    formSuccess();
                }
            }
        });
    };


    function formSuccess() {
        $("#thanks").modal('show');
    }

    $('#viberButton').on('click', function() {
        var md = new MobileDetect(window.navigator.userAgent);
        location.href = 'viber://chat?number=%2B380971535340'
            /*if (md.mobile()) {
                location.href = 'viber://add?number=+380971535340'
            } else {
                location.href = 'viber://chat?number=+380971535340'
            }*/
    });
});
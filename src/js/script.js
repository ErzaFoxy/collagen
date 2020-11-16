let catalogArray = [{
        'image': '<img src="images/artroflex_gel_300px.jpg" class="img-fluid rounded catalog_img-size">',
        'descr': 'Гель ARTROFLEX NUTRAXIN, 100 мл',
        'cost': '777',
    },
    {
        'image': '<img src="images/artroflex_red_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка ARTROFLEX HYA-C-II NUTRAXIN, 90 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/b-one_formula_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка B-ONE FORMULA NUTRAXIN, 90 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/CoQ-10_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Коэнзим Q10" NUTRAXIN, 30 капсул',
        'cost': '777',
    },
    {
        'image': '<img src="images/immun-s_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка IMMUN-S NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/saw_palmetto_formula_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка SAW PALMETTO FORMULA NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/chromium_picolinate_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Пиколинат хрома" NUTRAXIN, 90 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/zinc_sulphate_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Цинк" NUTRAXIN, 100 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/folic_acid_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Фолиевая кислота" NUTRAXIN, 100 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/selenium_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Селен" НУТРАКСИН, 100 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/biotin_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Биотин 5000 мкг" NUTRAXIN, 30 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/vitamin_d3_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Витамин D3" NUTRAXIN, 120 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/vitamin_b12_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Витамин В12" NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/psyllium_husk_fiber_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Псилиум клетчатка" NUTRAXIN, 30 саше',
        'cost': '777',
    },
    {
        'image': '<img src="images/propolis_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Прополис-спрей" NUTRAXIN, 30 мл',
        'cost': '777',
    },
    {
        'image': '<img src="images/a-oxi_formula_300px.jpg" class="img-fluid rounded catalog_img-size">',
        'descr': 'Диетическая добавка A-OXI FORMULA NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/cleanse_formula7_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка для очистки организма CLEANSE FORMULA NUTRAXIN, 14 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/thermo_burn_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка для очистки организма CLEANSE FORMULA NUTRAXIN, 14 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/ginkgo_biloba_300px.jpg" class="img-fluid rounded">',
        'descr': 'Растительная добавка "Гинкго билоба" NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/natural_sleep_300px.jpg" class="img-fluid rounded">',
        'descr': 'Растительная добавка NATURAL SLEEP NUTRAXIN, 60 капсул',
        'cost': '777',
    },
    {
        'image': '<img src="images/bromelain_300px.jpg" class="img-fluid rounded">',
        'descr': 'Растительная добавка "Бромелайн" NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/milk_thistlegit_300px.jpg" class="img-fluid rounded">',
        'descr': 'Растительная добавка "Расторопша" NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/ultra_men_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка для мужчин ULTRAMEN NUTRAXIN, 60 таблеток',
        'cost': '777',
    },
    {
        'image': '<img src="images/vitamin_c_300px.jpg" class="img-fluid rounded">',
        'descr': 'Диетическая добавка "Витамин С" NUTRAXIN, 28 таблеток',
        'cost': '777',
    }
];

const catalogItem = ({ image, descr, cost }) => {
    return ` 
<div class="col-lg-4 col-md-6 col-sm-12 catalog__card">
    <div class="card h-100 p-lg-3 p-md-3 p-md-3 p-2">
        ${image}
        <div class="card-body">
            <div class="catalog__descr card-title pb-lg-3">${descr}</div>
            <hr>
            <div class="row align-items-end pt-lg-3 pt-md-3">
                <div class="col-md-6 col-6">
                    <div class="catalog__cost text-uppercase">${cost}UAH</div>
                </div>
                <div class="col-md-6 col-6">
                    <button class="btn badge-pill text-uppercase button button_catalog py-xl-2 px-lg-4 py-lg-1 px-md-4 py-md-1 px-4 py-1">купить</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
};

$(document).ready(function() {
    $('#catalog').prepend(catalogArray.map(catalogItem).join(' '));
});
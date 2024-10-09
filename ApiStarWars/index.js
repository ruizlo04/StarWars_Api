$(document).ready(function () {
    getStarWarsCharacterList();

    $(document).on("click", "#btn-get-data", function () {
        getStarWarsCharacterList();
    });

    $(document).on("input", ".search-bar input", function () {
        var searchQuery = $(this).val().toLowerCase();
        getStarWarsCharacterList(searchQuery);
    });

    function getStarWarsCharacterList(searchQuery = "") {
        $(".character-grid").html("<img src='https://i.sstatic.net/kOnzy.gif' class='mx-auto d-block' />");
        $.ajax({
            url: "https://swapi.dev/api/people/",
            method: "GET",
        }).done(function (resp) {
            setTimeout(function () {
                $(".character-grid").html("");
                var listadoPersonajes = resp.results;
                listadoPersonajes = listadoPersonajes.filter(function (personaje) {
                    return personaje.name.toLowerCase().includes(searchQuery);
                });
                listadoPersonajes.forEach(function (personaje) {
                    var personajeId = personaje.url.split("/")[5];
                    var template = `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm character-card">
                                <a href="detail.html?pid=${personajeId}">
                                    <div class="card-body text-center">
                                        <p class="card-text bg-dark text-white rounded-pill py-2">#${String(personajeId).padStart(4, '0')} ${personaje.name}</p>
                                    </div>
                                </a>
                            </div>
                        </div>`;
                    $(".character-grid").append(template);
                });
            }, 1000);
        });
    }
});
